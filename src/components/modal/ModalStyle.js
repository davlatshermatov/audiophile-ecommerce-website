import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModalStyled = styled.div`
  width: 540px;
  /* height: 580px; */
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: absolute;
  z-index: 10000;
  border-radius: 8px;
  padding: 3rem;
  /* height: fit-content; */

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 395px) {
    width: 90vw;
    padding: 2rem;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalTitle = styled.div`
  margin: 32px 0 24px;
  h1 {
    font-size: 32px;
    text-transform: uppercase;
  }
`;

export const ModalDesc = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 32px;
`;

export const ModalInfo = styled.div`
  width: 100%;
  display: flex;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 395px) {
    display: block;
  }
`;

export const ModalProduct = styled.div`
  background: #f1f1f1;
  width: 60%;
  padding: 24px;

  .product-image {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    img {
      object-fit: contain;
      width: 50px;
    }

    .product {
      font-weight: 700;

      p:first-child {
        font-size: 15px;
        text-transform: uppercase;
      }

      p:last-child {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
      }
    }

    .quantity {
      p {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .others {
    margin-top: 12px;
    text-align: center;

    p {
      color: rgba(0, 0, 0, 0.5);
      font-size: 12px;
    }
  }

  @media screen and (max-width: 395px) {
    width: 100%;
  }
`;

export const GrandTotal = styled.div`
  background: #000;
  width: 40%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;

  p:first-child {
    font-size: 15px;
    color: white;
    opacity: 0.5;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 395px) {
    width: 100%;
    padding-top: 15px;
    padding-bottom: 20px;
  }
`;

export const ModalButton = styled(Link)`
  width: 100%;
  display: inline-block;
  background: #d87d4a;
  padding: 15px 0;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 13px;
  margin-top: 50px;
`;
