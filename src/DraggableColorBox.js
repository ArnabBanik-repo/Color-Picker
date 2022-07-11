import { SortableElement } from 'react-sortable-hoc'
import React from 'react'
import chroma from 'chroma-js'

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
        <ColorName lum={chroma(`${bg}`).luminance()}>{name}</ColorName>
        <StyledDeleteIcon
          onClick={() => {
            handleClick(name)
          }}
          sx={{ transition: 'all 0.3s ease-in-out' }}
        />
      </BoxContent>
    </ColorBox>
  )
})
export default DraggableColorBox
