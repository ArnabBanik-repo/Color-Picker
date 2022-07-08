import { IconButton, Snackbar } from "@mui/material";
import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import CloseIcon from "@mui/icons-material/Close";

import { PaletteContainer, PaletteColors } from "./styles/PaletteStyles";

export default class Palette extends Component {
  state = {
    level: 500,
    format: "hex",
    open: false,
  };

  changeLevel = (newlevel) => {
    this.setState({
      level: newlevel,
    });
  };

  changeColor = (format) => {
    this.setState({
      format,
      open: true,
    });
  };

  closeSnackbar = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette
      />
    ));
    return (
      <PaletteContainer>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeColor={this.changeColor}
          showingFullPalette
        />
        <PaletteColors>{colorBoxes}</PaletteColors>
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
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </PaletteContainer>
    );
  }
}
