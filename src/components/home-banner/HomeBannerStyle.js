import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeBannerStyled = styled.div`
  /* margin: 100px auto ; */
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  width: 75%;

  > p {
    text-transform: uppercase;
    letter-spacing: 10px;
    opacity: 0.5;
    font-size: 0.875rem;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    /* margin: 100px auto; */
  }

  @media screen and (max-width: 375px) {
    /* margin:0; */
    width: 100%;
  }
`;

export const ProductTitle = styled.div`
  /* margin-top: 16px; */
  /* margin-bottom: 24px; */
  /* width: 50%; */
  margin: 24px 0;
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 100%;
    /* display: none; */
  }

  @media screen and (max-width: 395px) {
    font-size: 36px;
  }
`;

export const ProductDescription = styled.div`
  opacity: 0.75;
  font-weight: 500;
  margin-bottom: 40px;
  width: 37%;

  @media screen and (max-width: 768px) {
    margin: auto;
    width: 65%;
    margin-bottom: 50px;
    font-size: 15px;
  }

  @media screen and (max-width: 395px) {
    width: 85%;
  }
`;
export const Button = styled(Link)`
  background-color: #d87d4a;
  text-transform: uppercase;
  padding: 20px 30px;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 700;
  font-size: 13px;

  &:hover {
    background-color: #fbaf85;
  }
`;
