import { FormControl, MenuItem, Select } from "@mui/material";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  NavbarContainer,
  Logo,
  SliderContainer,
  SelectContainer,
} from "./styles/NavbarStyles";

export default class Navbar extends Component {
  handleChange = (e) => {
    this.props.changeColor(e.target.value);
  };

  render() {
    return (
      <NavbarContainer>
        <Logo>
          <Link to="/">
            Color<span>Picker</span>
          </Link>
        </Logo>
        {this.props.showingFullPalette !== undefined && (
          <div>
            <span>Level: {this.props.level}</span>
            <SliderContainer>
              <Slider
                defaultValue={this.props.level}
                min={100}
                max={900}
                step={100}
                onChange={this.props.changeLevel}
                trackStyle={{ background: `transparent` }}
                railStyle={{ height: 8 }}
                handleStyle={{
                  backgroundColor: `green`,
                  outline: `none`,
                  border: `2px solid green`,
                  boxShadow: `none`,
                  height: 13,
                  width: 13,
                  marginLeft: -7,
                  marginTop: -3,
                }}
              />
            </SliderContainer>
          </div>
        )}
        <SelectContainer>
          <FormControl variant="standard" sx={{ minWidth: 260 }}>
            <Select defaultValue={"hex"} onChange={this.handleChange}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
          </FormControl>
        </SelectContainer>
      </NavbarContainer>
    );
  }
}
