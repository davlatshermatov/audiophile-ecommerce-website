import styled from "styled-components";
import { Link } from "react-router-dom";

export const Zx9Styled = styled.div`
  background: url("./assets/home/desktop/pattern-circles.svg") no-repeat -180px -70px,
    #d87d4a;
  overflow: hidden;
  color: white;
  border-radius: 8px;
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    background: url("./assets/home/desktop/pattern-circles.svg") no-repeat,
      #d87d4a;
    background-position: center;
  }

  @media screen and (max-width: 395px) {
  }
`;

export const Box = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 395px) {
  }
`;

export const ProductImage = styled.div`
  height: 490px;
  display: flex;
  justify-content: end;
  margin-bottom: -8px;

  img {
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    height: 237px;
    justify-content: center;
  }

  @media screen and (max-width: 395px) {
  }
`;

export const ProductDetails = styled.div`
  padding: 0 15%;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 64px;
    padding: 0 20%;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 395px) {
    padding: 0 5%;
    padding-bottom: 50px;
  }
`;

export const ProductTitle = styled.div`
  margin-bottom: 24px;

  > h1 {
    text-transform: uppercase;
    font-size: 56px;
  }
`;

export const ProductDescription = styled.div`
  margin-bottom: 40px;
  > p {
    font-size: 15px;
    opacity: 0.75;
  }
`;

export const Button = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background: black;
  font-size: 13px;
  padding: 15px 30px;
  width: fit-content;

  &:hover {
    background: #4c4c4c;
  }
`;
