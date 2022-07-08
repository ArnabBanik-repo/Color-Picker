import styled from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;
`;

export const Logo = styled.div`
  margin-right: 15px;
  padding: 0 13px;
  font-size: 22px;
  background: #eceff1;
  height: 100%;
  display: flex;
  align-items: center;
  a {
    font-family: "Roboto";
    text-decoration: none;
    color: black;
    font-weight: 300;

    span {
      font-family: "Roboto";
      color: #ff8f17;
      font-weight: 500;
    }
  }
`;

export const SliderContainer = styled.div`
  width: 340px;
  margin: 0 1.1rem;
  display: inline-block;
`;

export const SelectContainer = styled.div`
  margin-left: auto;
  margin-right: 1rem;
`;
