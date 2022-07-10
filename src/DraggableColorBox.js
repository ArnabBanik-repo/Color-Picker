import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const ColorBox = styled(Box)`
	background-color: ${props => props.bg};
	width: 20%;
	height: 25%;
	margin: 0 auto;
	display: inline-block;
	position: relative;
`

const DraggableColorBox = props => {
	return (
		<ColorBox bg={props.bg}>
			<Typography variant='p' textTransform={'capitalize'}>
				{props.name}
			</Typography>
		</ColorBox>
	)
}

export default DraggableColorBox
