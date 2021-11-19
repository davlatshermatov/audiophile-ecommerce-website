import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartStyled = styled.div`
  background: #fff;
  position: absolute;
  right: 0;
  top: 6rem;
  padding: 1.8rem;
  border-radius: 8px;
  width: 377px;
  color: #000;
  z-index: 1000;
  box-shadow: 2px 0px 43px 10px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: 2px 0px 43px 10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 2px 0px 43px 10px rgba(0, 0, 0, 0.57);

  @media screen and (max-width: 395px) {
    right: 50%;
    transform: translate(50%, 0);
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
  }

  input {
    background: none;
    text-decoration: underline;
    cursor: pointer;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);

    &:hover {
      color: #d87d4a;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    font-weight: 500;
  }

  span {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Checkout = styled(Link)`
  width: 100%;
  height: 3rem;
  display: block;
  display: grid;
  place-items: center;
  color: white;
  background: #d87d4a;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 24px;
`;

export const EmptyCart = styled.div`
  height: 64px;
  margin: 3rem auto;
  text-align: center;

  img {
    object-fit: contain;
    height: 100%;
  }
`;
