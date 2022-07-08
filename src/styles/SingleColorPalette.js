import styled from "styled-components";

export const PaletteContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const PaletteColors = styled.div`
  height: 90%;
`;

export const CB = styled.div`
  background-color: black;
  width: 20%;
  height: 50%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -5px;
`;

export const BackButton = styled.button`
  width: 100px;
  height: 30px;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  line-height: 30px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  opacity: 1;
  color: white;
`;
