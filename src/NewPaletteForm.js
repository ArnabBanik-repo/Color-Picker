import React, { Component } from 'react'
import PaletteFormNav from './PaletteFormNav'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { ChromePicker } from 'react-color'
import { Button } from '@mui/material'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import DraggableColorBoxList from './DraggableColorBoxList'
import { arrayMoveImmutable } from 'array-move'
import ColorPickerForm from './ColorPickerForm'

const drawerWidth = 400

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
	({ theme, open }) => ({
		height: 'calc(100vh - 64px)',
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
)

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}))

export default class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20,
	}
	constructor(props) {
		super(props)
		this.state = {
			open: true,
			colors: this.props.palettes[
				Math.floor(Math.random() * this.props.palettes.length)
			].colors,
		}
	}

	savePalette = paletteName => {
		const newPalette = {
			paletteName: paletteName,
			emoji: '💯',
			id: paletteName.toLowerCase().replace(/ /g, '-'),
			colors: this.state.colors,
		}
		this.props.savePalette(newPalette)
		this.props.history.push('/')
	}

	addRandomColor = () => {
		const palette = Math.floor(Math.random() * this.props.palettes.length)
		const color = Math.floor(
			Math.random() * this.props.palettes[palette].colors.length
		)
		const newColor = this.props.palettes[palette].colors[color]
		this.state.colors.every(color => color.color !== newColor.color) &&
			this.setState(st => ({
				colors: [...st.colors, newColor],
			}))
	}

	addColor = newColor => {
		this.setState(
			st => ({
				colors: [...st.colors, newColor],
			}),
			() => {
				this.setState({ colorName: '', curr_color: '' })
			}
		)
	}

	deleteColor = colorName => {
		this.setState(st => ({
			colors: st.colors.filter(({ name }) => name !== colorName),
		}))
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleDrawerOpen = () => {
		this.setState({
			open: true,
		})
	}

	handleDrawerClose = () => {
		this.setState({
			open: false,
		})
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMoveImmutable(colors, oldIndex, newIndex),
		}))
	}

	render() {
		const { open, colors } = this.state
		const { maxColors, palettes } = this.props

		const isFull = colors.length >= maxColors
		return (
			<Box sx={{ display: 'flex' }}>
				<PaletteFormNav
					open={open}
					palettes={palettes}
					savePalette={this.savePalette}
					handleDrawerOpen={this.handleDrawerOpen}
					handleDrawerClose={this.handleDrawerClose}
				/>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box',
						},
					}}
					variant='persistent'
					anchor='left'
					open={open}
				>
					<DrawerHeader>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</DrawerHeader>
					<Divider />
					<Typography variant='h4'>Design Your Palette</Typography>
					<Box display={`flex`} gap={`1rem`}>
						<Button
							variant={`contained`}
							color={`error`}
							onClick={() => this.setState({ colors: [] })}
						>
							Clear Palette
						</Button>
						<Button
							variant={`contained`}
							color={`primary`}
							disabled={isFull}
							onClick={this.addRandomColor}
						>
							Random Color
						</Button>
					</Box>
					<ColorPickerForm
						colors={colors}
						addColor={this.addColor}
						isFull={isFull}
					/>
				</Drawer>
				<Main open={open}>
					<DrawerHeader />

					<DraggableColorBoxList
						colors={colors}
						deleteColor={this.deleteColor}
						axis='xy'
						onSortEnd={this.onSortEnd}
					/>
				</Main>
			</Box>
		)
	}
}