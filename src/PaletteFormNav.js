import React, { Component } from 'react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'

const drawerWidth = 400

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

export default class PaletteFormNav extends Component {
	state = {
		paletteName: '',
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
			this.props.palettes.every(
				({ paletteName }) => paletteName !== value
			)
		)
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	render() {
		const { open, savePalette, handleDrawerOpen } = this.props
		const { paletteName } = this.state
		return (
			<div>
				<CssBaseline />
				<AppBar position='fixed' open={open} color='default'>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							sx={{
								mr: 2,
								...(open && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap component='div'>
							Persistent drawer
						</Typography>
						<ValidatorForm
							onSubmit={() => savePalette(paletteName)}
						>
							<TextValidator
								label='Palette Name'
								name='paletteName'
								value={paletteName}
								onChange={this.handleChange}
								validators={['required', 'isPaletteNameUnique']}
								errorMessages={[
									'Enter a palette name',
									'Name already in use',
								]}
							/>
							<Link to='/'>
								<Button variant={`contained`} color='error'>
									Go Back
								</Button>
							</Link>
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
			</div>
		)
	}
}
