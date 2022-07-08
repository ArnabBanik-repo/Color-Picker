import styled from "styled-components";
import React from "react";

const StyledMiniPalette = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const Colors = styled.div`
  height: 150px;
  width: 100%;
  background-color: #dae1e4;
  border-radius: 5px;
  overflow: hidden;
`;

const MiniColor = styled.div`
  background-color: ${(props) => props.bg};
  height: 25%;
  width: 20%;
  display: inline-block;
  margin: 0 auto;
  position: relative;
  margin-bottom: -4px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;
`;

const Emoji = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

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
