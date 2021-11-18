import styled from "styled-components";

export const HomeStyled = styled.div`
  background: url("./assets/home/desktop/image-hero.jpg") no-repeat;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;

  @media screen and (max-width: 768px) {
    background: url("./assets/home/tablet/image-header.jpg") no-repeat;
    background-size: 100%;
  }

  @media screen and (max-width: 395px) {
    background: url("./assets/home/mobile/image-header.jpg") no-repeat;
    background-size: 100%;
  }
`;
