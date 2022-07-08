import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
  background: white;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  border: 0;
`;

const Emoji = styled.span`
  font-size: 1.5rem;
  margin: 0 1rem;
`;
export default function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <Footer className="Palette-footer">
      {paletteName}
      <Emoji className="emoji">{emoji}</Emoji>
    </Footer>
  );
}
