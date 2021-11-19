import styled from "styled-components";

export const CartProducts = styled.div`
  display: flex;
  margin: 1rem 0;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.div`
  height: 64px;
  width: 64px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
`;

export const ProductDetails = styled.div`
  font-weight: 700;
  margin-left: 16px;

  p {
    font-size: 15px;
    text-transform: uppercase;
  }

  span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Counter = styled.div`
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96px;
  height: 32px;
  font-size: 13px;
  font-weight: 700;
  /* margin-left: 60px; */

  > button {
    background: none;
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
    height: 100%;
    width: 40%;

    &:active {
      background: #d87d4a;
      color: white;
    }
  }
`;
