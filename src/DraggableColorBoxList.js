import React from 'react'
import DraggableColorBox from './DraggableColorBox'
import { SortableContainer } from 'react-sortable-hoc'
const DraggableColorBoxList = SortableContainer(({ colors, deleteColor }) => {
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, idx) => (
				<DraggableColorBox
					index={idx}
					name={color.name}
					bg={color.color}
					key={color.name}
					handleClick={deleteColor}
				/>
			))}
		</div>
	)
})

export default DraggableColorBoxList
