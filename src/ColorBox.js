import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import {
  ColorBoxMain,
  ColorName,
  BoxContent,
  CopyButton,
  MoreButton,
  CopiedColor,
  CopyOverlay,
  CopyMessage,
} from "./styles/ColorBoxStyles";

export default class ColorBox extends Component {
  state = {
    copied: false,
  };
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  };
  render() {
    const { name, background, moreUrl, showingFullPalette } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <ColorBoxMain
          className="ColorBox"
          bg={background}
          showingFullPalette={showingFullPalette}
        >
          <CopyOverlay show={copied} bg={background} />
          <CopyMessage show={copied}>
            <h1>copied!</h1>
            <CopiedColor lum={chroma(`${background}`).luminance()}>
              {background}
            </CopiedColor>
          </CopyMessage>
          <div>
            <BoxContent className="box-content">
              <ColorName lum={chroma(`${background}`).luminance()}>
                {name}
              </ColorName>
            </BoxContent>

            <CopyButton
              className="copy-button"
              lum={chroma(`${background}`).luminance()}
            >
              Copy
            </CopyButton>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <MoreButton
                className="see-more"
                lum={chroma(`${background}`).luminance()}
              >
                More
              </MoreButton>
            </Link>
          )}
        </ColorBoxMain>
      </CopyToClipboard>
    );
  }
}
