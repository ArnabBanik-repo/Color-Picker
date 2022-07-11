import React from 'react'
import DraggableColorBox from './DraggableColorBox'
import { SortableContainer } from 'react-sortable-hoc'
import { Box } from '@mui/material'
const DraggableColorBoxList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <Box style={{ height: '100%' }}>
      {colors.map((color, idx) => (
        <DraggableColorBox
          index={idx}
          name={color.name}
          bg={color.color}
          key={color.name}
          handleClick={deleteColor}
        />
      ))}
    </Box>
  )
})

export default DraggableColorBoxList
