import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuCartStyled = styled.div`
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const CartImgStyled = styled.div`
  width: 100%;
  position: absolute;
  top: -60px;

  > img {
    object-fit: contain;
    height: 160px;
  }
`;

export const CartBodyStyled = styled.div`
  /* margin-top: -100px; */
  border-radius: 8px;
  background-color: #f1f1f1;
  height: 200px;
  position: relative;

  > p {
    padding-top: 116px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const Details = styled(Link)`
  margin-top: 15px;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: black;

  > p {
    opacity: 0.5;
    font-size: 13px;
    margin-right: 10px;
  }

  > img {
    object-fit: contain;
    height: 10px;
  }
`;
