import React, { Component } from 'react'
import { ValidatorForm } from 'react-material-ui-form-validator'
import chroma from 'chroma-js'

import {
  AddButton,
  Container,
  ColorNameInput,
  StyledChromePicker,
} from './styles/ColorPickerFormStyles'

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
      this.props.colors.every(color => color.color !== this.state.curr_color)
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
      <Container>
        <StyledChromePicker
          color={curr_color}
          onChange={this.handleColorChange}
          disableAlpha={true}
        />
        <ValidatorForm onSubmit={this.addColor} instantValidate={false}>
          <ColorNameInput
            label='Color Name'
            name='colorName'
            value={colorName}
            variant={`filled`}
            margin='normal'
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter a color name',
              'Color Name already used',
              'Color already used',
            ]}
          />
          <AddButton
            variant='contained'
            bg={curr_color}
            lum={chroma(`${curr_color}`).luminance()}
            type='submit'
            disabled={isFull}
          >
            {isFull ? `Palette Full` : `Add Color`}
          </AddButton>
        </ValidatorForm>
      </Container>
    )
  }
}
