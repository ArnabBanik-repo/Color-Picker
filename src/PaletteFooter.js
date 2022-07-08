import React from "react";
import { Footer, Emoji } from "./styles/FooterStyles";

export default function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <Footer className="Palette-footer">
      {paletteName}
      <Emoji className="emoji">{emoji}</Emoji>
    </Footer>
  );
}
