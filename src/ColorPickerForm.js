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

const AddButton = styled(Button)`
	background-color: ${props => props.bg};
	&:hover {
		background-color: ${props => props.bg};
	}
`

export default class ColorPickerForm extends Component {
	state = {
		curr_color: '#333',
		colorName: '',
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', value =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		)
		ValidatorForm.addValidationRule('isColorUnique', value =>
			this.props.colors.every(
				color => color.color !== this.state.curr_color
			)
		)
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

	addColor = () => {
		const newColor = {
			color: this.state.curr_color,
			name: this.state.colorName,
		}
		this.props.addColor(newColor)
		this.setState({ curr_color: '#333', colorName: '' })
	}

	render() {
		const { curr_color, colorName } = this.state
		const { isFull } = this.props
		return (
			<div>
				<ChromePicker
					color={curr_color}
					onChange={this.handleColorChange}
					disableAlpha={true}
				/>
				<ValidatorForm onSubmit={this.addColor}>
					<TextValidator
						label='Color Name'
						name='colorName'
						value={colorName}
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
						bg={curr_color}
						type='submit'
						disabled={isFull}
					>
						{isFull ? `Palette Full` : `Add Color`}
					</AddButton>
				</ValidatorForm>
			</div>
		)
	}
}
