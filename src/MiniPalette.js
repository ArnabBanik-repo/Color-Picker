import React from "react";

import {
  MiniColor,
  StyledMiniPalette,
  Colors,
  Title,
  Emoji,
} from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
  const { paletteName, emoji, colors, handleClick, id } = props;
  const miniColorBoxes = colors.map((color) => (
    <MiniColor key={color.name} bg={color.color}></MiniColor>
  ));
  return (
    <StyledMiniPalette onClick={() => handleClick(id)}>
      <Colors>{miniColorBoxes}</Colors>
      <Title>
        {paletteName}
        <Emoji>{emoji}</Emoji>
      </Title>
    </StyledMiniPalette>
  );
}

export default MiniPalette;
