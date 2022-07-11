import styled from 'styled-components'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const StyledDeleteIcon = styled(DeleteIcon)`
  cursor: pointer;
`

export const ColorBox = styled(Box)`
  background-color: ${props => props.bg};
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  margin-bottom: -7.2px;
  &:hover ${StyledDeleteIcon} {
    color: white;
    transform: scale(1.2);
  }
`

export const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0rem;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.7rem;
`

export const ColorName = styled.span`
  color: ${props => (props.lum >= 0.6 ? 'rgba(0,0,0,0.7)' : 'white')};
`
