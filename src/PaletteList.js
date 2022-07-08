import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

const Root = styled.div`
  background: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;
`;
const Palettes = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
`;

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
