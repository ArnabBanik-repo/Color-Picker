import React, { Component } from 'react'

import {
  MiniColor,
  StyledMiniPalette,
  Colors,
  Title,
  Emoji,
  StyledDeleteIcon,
} from './styles/MiniPaletteStyles'

class MiniPalette extends Component {
  handleDelete = e => {
    e.stopPropagation()
    this.props.deletePalette(this.props.id)
  }
  render() {
    const { paletteName, emoji, colors, handleClick, id } = this.props
    const miniColorBoxes = colors.map(color => (
      <MiniColor key={color.name} bg={color.color}></MiniColor>
    ))
    return (
      <StyledMiniPalette onClick={() => handleClick(id)}>
        <StyledDeleteIcon
          onClick={this.handleDelete}
          style={{ transition: 'all 0.3s ease-in-out' }}
        />

        <Colors>{miniColorBoxes}</Colors>
        <Title>
          {paletteName}
          <Emoji>{emoji}</Emoji>
        </Title>
      </StyledMiniPalette>
    )
  }
}

export default MiniPalette
