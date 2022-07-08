import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import {
  PaletteContainer,
  CB,
  PaletteColors,
  BackButton,
} from "./styles/SingleColorPalette";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);

    this._shades = this.getShades(
      this.props.palette,
      this.props.match.params.colorId
    );

    this.state = {
      format: "hex",
      open: false,
    };
  }

  closeSnackbar = () => {
    this.setState({
      open: false,
    });
  };

  getShades = (palette, colorId) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades.push(...allColors[key].filter((color) => color.id === colorId));
    }
    return shades.slice(1);
  };

  changeColor = (format) => {
    this.setState({
      format,
      open: true,
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        background={color[this.state.format]}
        name={color.name}
        key={color.name}
        showingFullPalette={false}
      />
    ));
    return (
      <PaletteContainer>
        <Navbar changeColor={this.changeColor} />
        <PaletteColors>
          {colorBoxes}
          <CB background="black" showingFullPalette={false}>
            <BackButton className="back-button" onClick={this.goBack}>
              GO BACK
            </BackButton>
          </CB>
        </PaletteColors>
        <Snackbar
          open={this.state.open}
          onClose={this.closeSnackbar}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed!</span>}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </PaletteContainer>
    );
  }
}
