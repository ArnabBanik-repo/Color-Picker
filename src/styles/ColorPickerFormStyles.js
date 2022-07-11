import { styled } from '@mui/material/styles'
import { ChromePicker } from 'react-color'
import { Button } from '@mui/material'
import chroma from 'chroma-js'
import { TextValidator } from 'react-material-ui-form-validator'

export const AddButton = styled(Button)`
  background-color: ${props => props.bg};
  color: ${props => (props.lum >= 0.6 ? 'rgba(0,0,0,0.7)' : 'white')};
  &:hover {
    background-color: ${props => chroma(props.bg).darken(1).hex()};
  }
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.7rem;
  font-size: 2rem;
`
export const Container = styled('div')`
  width: 88%;
`

export const ColorNameInput = styled(TextValidator)`
  width: 100%;
  height: 70px;
`

export const StyledChromePicker = styled(ChromePicker)`
  width: 100% !important;
  margin-top: 2rem;
`
