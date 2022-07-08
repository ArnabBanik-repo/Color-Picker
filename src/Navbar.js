import { FormControl, MenuItem, Select } from "@mui/material";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
  handleChange = (e) => {
    this.props.changeColor(e.target.value);
  };

  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">
            Color<span>Picker</span>
          </Link>
        </div>
        {this.props.showingFullPalette !== undefined && (
          <div className="slider-container">
            <span>Level: {this.props.level}</span>
            <div className="slider">
              <Slider
                defaultValue={this.props.level}
                min={100}
                max={900}
                step={100}
                onChange={this.props.changeLevel}
              />
            </div>
          </div>
        )}
        <div className="select-container">
          <FormControl variant="standard" sx={{ minWidth: 260 }}>
            <Select defaultValue={"hex"} onChange={this.handleChange}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </header>
    );
  }
}
