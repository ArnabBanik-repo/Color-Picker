import React, { Component } from 'react'
import { styled } from '@mui/material/styles'
import { ChromePicker } from 'react-color'
import { Button } from '@mui/material'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import chroma from 'chroma-js'

const AddButton = styled(Button)`
  background-color: ${props => props.bg};
  &:hover {
    background-color: ${props => chroma(props.bg).darken(1).hex()};
  }
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.7rem;
  font-size: 2rem;
`
const Container = styled('div')`
  width: 88%;
`

const ColorNameInput = styled(TextValidator)`
  width: 100%;
  height: 70px;
`

const StyledChromePicker = styled(ChromePicker)`
  width: 100% !important;
  margin-top: 2rem;
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
        <ValidatorForm onSubmit={this.addColor}>
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
