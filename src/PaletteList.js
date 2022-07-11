import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { Root, Container, Nav, Palettes } from './styles/PaletteListStyles'

export default class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`)
  }

  handleDelete = id => {
    this.props.handleDelete(id)
  }

  render() {
    const { palettes } = this.props
    return (
      <Root>
        <Container>
          <Nav>
            <h2 style={{ fontSize: '1.7rem' }}>ColorPicker</h2>
            <Link to={`/palette/new`}>Create Palette</Link>
          </Nav>
          <Palettes>
            {palettes.map(palette => (
              <MiniPalette
                {...palette}
                key={palette.id}
                handleClick={this.goToPalette}
                deletePalette={this.handleDelete}
              />
            ))}
          </Palettes>
        </Container>
      </Root>
    )
  }
}
