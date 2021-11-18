import styled from "styled-components";

export const AppStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

  
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: black;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 395px) {
    height: 120px;
  }
`;
