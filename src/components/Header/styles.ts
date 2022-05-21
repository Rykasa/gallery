import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: #0E131F;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 10px;
  transform: skewX(-15deg);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
`;