import styled from "styled-components";
export const ColorName = styled.span`
  color: ${(props) => (props.lum >= 0.55 ? "black" : "white")};
`;

export const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0.3rem;
  left: 0.3rem;
  color: black;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
`;

export const CopyButton = styled.button`
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
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 0;
  color: ${(props) => (props.lum >= 0.7 ? "rgba(0,0,0,0.7)" : "white")};
`;

export const ColorBoxMain = styled.div`
  background-color: ${(props) => props.bg};
  width: 20%;
  height: ${(props) => (props.showingFullPalette ? "25%" : "50%")};
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -5px;
  &:hover ${CopyButton} {
    opacity: 1;
  }
`;

export const MoreButton = styled.button`
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  border: none;
  right: 0;
  bottom: 0;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  text-transform: uppercase;
  color: ${(props) => (props.lum >= 0.6 ? "rgba(0,0,0,0.5)" : "white")};
`;

export const CopiedColor = styled.p`
  color: ${(props) => (props.lum >= 0.6 ? "rgba(0,0,0,0.7)" : "white")};
`;

export const CopyOverlay = styled.div`
  transform: scale(0.1);
  opacity: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => (props.show ? `scale(50)` : `scale(0.1)`)};
  background-color: ${(props) => props.bg};
  opacity: ${(props) => (props.show ? 1 : 0)};
  z-index: ${(props) => (props.show ? 10 : -1)};
`;

export const CopyMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  transition: transform 0.4s ease, opacity 0.4s ease;
  transition-delay: 0.1s;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) => (props.show ? `scale(1)` : `scale(0.1)`)};
  z-index: ${(props) => (props.show ? 10 : -1)};
  h1 {
    font-weight: 400;
    text-shadow: 1px 2px black;
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    text-align: center;
    margin-bottom: 0.75rem;
    padding: 1rem;
    text-transform: uppercase;
  }
  p {
    font-size: 2rem;
    font-weight: 100;
    opacity: 0.7;
  }
`;
