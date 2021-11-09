import styled from "styled-components";
import { Link } from "react-router-dom";

export const Zx9Styled = styled.div`
  width: 75%;
  background: url("./assets/home/desktop/pattern-circles.svg") no-repeat -180px -70px,
    #d87d4a;
  background-size: 100%;
  margin: auto;
  height: 560px;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  color: white;
  overflow: hidden;
  position: relative;
`;

export const ProductImage = styled.div`
  height: 490px;
  margin-left: 110px;
  margin-bottom: -8px;
  position: absolute;
  > img {
    object-fit: contain;
    height: 100%;
  }
`;

export const ProductDetails = styled.div`
  margin-bottom: 200px;
  margin-left: 666px;
  width: 30%;
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
`;
