import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'

export const StyledDeleteIcon = styled(DeleteIcon)`
  color: white;
  background-color: #eb3d30;
  border-radius: 3px;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 10px;
  z-index: 10;
  opacity: 0;
`

export const StyledMiniPalette = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  &:hover ${StyledDeleteIcon} {
    opacity: 1;
  }
`

export const Colors = styled.div`
  height: 150px;
  width: 100%;
  background-color: #dae1e4;
  border-radius: 5px;
  overflow: hidden;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;
`

export const MiniColor = styled.div`
  background-color: ${props => props.bg};
  height: 25%;
  width: 20%;
  display: inline-block;
  margin: 0 auto;
  position: relative;
  margin-bottom: -6.5px;
`

export const Emoji = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`
