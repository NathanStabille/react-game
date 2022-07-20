import styled from "styled-components";

export const Container = styled.div<{
  left: number;
  top: number;
  size: number;
  sidePos: number;
}>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;

  background-image: url("/assets/char.png");
  background-position: 0px ${(props) => props.sidePos}px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;
