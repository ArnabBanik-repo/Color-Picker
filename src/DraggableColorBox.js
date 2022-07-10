import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'

const StyledDeleteIcon = styled(DeleteIcon)`
	transition: all 0.3s ease;
	cursor: pointer;
`

const ColorBox = styled(Box)`
	background-color: ${props => props.bg};
	width: 20%;
	height: 25%;
	margin: 0 auto;
	display: inline-block;
	position: relative;
	margin-bottom: -3.5px;
	&:hover ${StyledDeleteIcon} {
		color: white;
		transform: scale(1.2);
	}
`

const BoxContent = styled.div`
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

const ColorName = styled.span`
	color: white;
`

const DraggableColorBox = props => {
	const { bg, name, handleClick } = props
	return (
		<ColorBox bg={bg}>
			<BoxContent>
				<ColorName>{name}</ColorName>
				<StyledDeleteIcon onClick={() => handleClick(name)} />
			</BoxContent>
		</ColorBox>
	)
}

export default DraggableColorBox
