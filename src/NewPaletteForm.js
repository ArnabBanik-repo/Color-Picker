import React, { Component } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { ChromePicker } from 'react-color'
import { Button } from '@mui/material'
import DraggableColorBox from './DraggableColorBox'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

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

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}))

const AddButton = styled(Button)`
	background-color: ${props => props.bg};
	&:hover {
		background-color: ${props => props.bg};
	}
`

export default class NewPaletteForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			curr_color: '#000fff',
			colorName: '',
			paletteName: '',
			colors: [],
		}
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', value =>
			this.state.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		)
		ValidatorForm.addValidationRule('isColorUnique', value =>
			this.state.colors.every(
				color => color.color !== this.state.curr_color
			)
		)
		ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
			this.props.palettes.every(
				({ paletteName }) => paletteName !== value
			)
		)
	}

	savePalette = () => {
		const paletteName = this.state.paletteName
		const newPalette = {
			paletteName: paletteName,
			emoji: '💯',
			id: paletteName.toLowerCase().replace(/ /g, '-'),
			colors: this.state.colors,
		}
		this.props.savePalette(newPalette)
		this.props.history.push('/')
	}

	addColor = () => {
		const newColor = {
			color: this.state.curr_color,
			name: this.state.colorName,
		}
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

	handleColorChange = (color, evt) => {
		this.setState({
			curr_color: color.hex,
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

	render() {
		return (
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position='fixed' open={this.state.open} color='default'>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={this.handleDrawerOpen}
							edge='start'
							sx={{
								mr: 2,
								...(this.state.open && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap component='div'>
							Persistent drawer
						</Typography>
						<ValidatorForm onSubmit={this.savePalette}>
							<TextValidator
								label='Palette Name'
								name='paletteName'
								value={this.state.paletteName}
								onChange={this.handleChange}
								validators={['required', 'isPaletteNameUnique']}
								errorMessages={[
									'Enter a palette name',
									'Name already in use',
								]}
							/>
							<Button
								variant='contained'
								color='primary'
								type='submit'
							>
								Save palette
							</Button>
						</ValidatorForm>
					</Toolbar>
				</AppBar>
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
					open={this.state.open}
				>
					<DrawerHeader>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</DrawerHeader>
					<Divider />
					<Typography variant='h4'>Design Your Palette</Typography>
					<Box display={`flex`} gap={`1rem`}>
						<Button variant={`contained`} color={`error`}>
							Clear Palette
						</Button>
						<Button variant={`contained`} color={`primary`}>
							Random Color
						</Button>
					</Box>
					<ChromePicker
						color={this.state.curr_color}
						onChange={this.handleColorChange}
						disableAlpha={true}
					/>
					<ValidatorForm onSubmit={this.addColor}>
						<TextValidator
							label='Color Name'
							name='colorName'
							value={this.state.colorName}
							onChange={this.handleChange}
							validators={[
								'required',
								'isColorNameUnique',
								'isColorUnique',
							]}
							errorMessages={[
								'Enter a color name',
								'Color Name already used',
								'Color already used',
							]}
						/>
						<AddButton
							variant='contained'
							bg={this.state.curr_color}
							type='submit'
						>
							Add Color
						</AddButton>
					</ValidatorForm>
				</Drawer>
				<Main open={this.state.open}>
					<DrawerHeader />

					{this.state.colors.map(color => (
						<DraggableColorBox
							name={color.name}
							bg={color.color}
							key={color.name}
							handleClick={this.deleteColor}
						/>
					))}
				</Main>
			</Box>
		)
	}
}
