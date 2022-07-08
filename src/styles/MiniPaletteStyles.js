import styled from "styled-components";

export const StyledMiniPalette = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const Colors = styled.div`
  height: 150px;
  width: 100%;
  background-color: #dae1e4;
  border-radius: 5px;
  overflow: hidden;
`;

export const MiniColor = styled.div`
  background-color: ${(props) => props.bg};
  height: 25%;
  width: 20%;
  display: inline-block;
  margin: 0 auto;
  position: relative;
  margin-bottom: -4px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;
`;

export const Emoji = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;
