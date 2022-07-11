import React, { useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import styled from '@emotion/styled'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import Picker from 'emoji-picker-react'

const StyledValidatorForm = styled(ValidatorForm)({})

export default function PaletteMetaForm({ palettes, savePalette, hideForm }) {
  const [paletteName, setName] = useState('')
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const [stage, setStage] = useState(0)
  const didMount = useRef(false)

  const emojiStage = async () => {
    setStage((stage + 1) % 2)
    console.log(stage)
  }

  const handleChange = async e => {
    setName(e.target.value)
  }

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
  }

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(({ paletteName }) => paletteName !== value)
    )
  })

  useEffect(() => {
    if (!didMount.current) {
      return (didMount.current = true)
    }
    savePalette(paletteName, chosenEmoji.emoji)
  }, [chosenEmoji])

  return (
    <div>
      <Dialog open={stage === 1} onClose={hideForm}>
        <DialogTitle>Choose an Emoji 😎</DialogTitle>
        <DialogContent>
          <Picker onEmojiClick={onEmojiClick} />
        </DialogContent>
      </Dialog>
      <Dialog open={stage === 0} onClose={hideForm}>
        <DialogTitle>Enter a Palette Name 😄</DialogTitle>
        <StyledValidatorForm onSubmit={emojiStage}>
          <DialogContent>
            <DialogContentText>
              Enter a fitting name for your new beautiful color palette. Make
              sure it's unique {chosenEmoji ? chosenEmoji.emoji : '✅'}
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
            <Button onClick={hideForm}>Cancel</Button>
            <Button type='submit' variant='contained'>
              Save Palette
            </Button>
          </DialogActions>
        </StyledValidatorForm>
      </Dialog>
    </div>
  )
}
