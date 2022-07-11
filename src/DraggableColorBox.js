import { SortableElement } from 'react-sortable-hoc'
import React from 'react'

import {
  StyledDeleteIcon,
  ColorBox,
  BoxContent,
  ColorName,
} from './styles/DraggableColorBoxStyles'
const DraggableColorBox = SortableElement(props => {
  const { bg, name, handleClick } = props
  return (
    <ColorBox bg={bg}>
      <BoxContent>
        <ColorName>{name}</ColorName>
        <StyledDeleteIcon onClick={() => handleClick(name)} />
      </BoxContent>
    </ColorBox>
  )
})
export default DraggableColorBox
