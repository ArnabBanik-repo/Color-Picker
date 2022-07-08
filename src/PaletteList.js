import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Root, Container, Nav, Palettes } from "./styles/PaletteListStyles";

export default class PaletteList extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palettes } = this.props;
    return (
      <Root>
        <Container>
          <Nav>
            <h1>ColorPicker</h1>
          </Nav>
          <Palettes>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                key={palette.id}
                handleClick={this.goToPalette}
              />
            ))}
          </Palettes>
        </Container>
      </Root>
    );
  }
}
