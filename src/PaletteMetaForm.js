import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import styled from '@emotion/styled'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

const StyledValidatorForm = styled(ValidatorForm)({})

export default function PaletteMetaForm({ palettes, savePalette }) {
  const [open, setOpen] = React.useState(true)
  const [paletteName, setName] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = e => {
    setName(e.target.value)
  }

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(({ paletteName }) => paletteName !== value)
    )
  }, [])

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Enter a Palette Name 😄</DialogTitle>
      <StyledValidatorForm onSubmit={() => savePalette(paletteName)}>
        <DialogContent>
          <DialogContentText>
            Enter a fitting name for your new beautiful color palette. Make sure
            it's unique ✅
          </DialogContentText>
          <TextValidator
            label='Palette Name'
            name='paletteName'
            variant='standard'
            margin='normal'
            fullWidth
            value={paletteName}
            onChange={handleChange}
            validators={['required', 'isPaletteNameUnique']}
            errorMessages={['Enter a palette name', 'Name already in use']}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' variant='contained'>
            Save Palette
          </Button>
        </DialogActions>
      </StyledValidatorForm>
    </Dialog>
  )
}
