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

const BoxContent = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0rem;
	color: black;
	text-transform: uppercase;
	font-size: 12px;
	letter-spacing: 1px;
`

const DeleteButton = styled.button`
	background: rgba(255, 255, 255, 0.3);
	position: absolute;
	border: none;
	right: 0.5rem;
	bottom: 0.2rem;
	width: 60px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	text-transform: uppercase;
	color: white;
	cursor: pointer;
`

const ColorName = styled.span`
	color: white;
	position: relative;
	left: 1rem;
	bottom: 0.3rem;
`

const DraggableColorBox = props => {
	return (
		<ColorBox bg={props.bg}>
			<BoxContent>
				<ColorName>{props.name}</ColorName>
				<DeleteButton>X</DeleteButton>
			</BoxContent>
		</ColorBox>
	)
}

export default DraggableColorBox
