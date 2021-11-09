import styled from "styled-components";

export const AppStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

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

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;
