import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  background: #000; ;
`;

export const CheckoutStyled = styled.div`
  background: #f2f2f2;
`;

export const Container = styled.div`
  width: 75%;
  margin: 142px auto;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: block;

    > div {
      margin-bottom: 32px;
    }
  }
`;

export const CheckoutLeftStyled = styled.div`
  background: #fff;
  padding: 48px;
  border-radius: 8px;

  > h1 {
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  form {
    p {
      font-size: 13px;
      text-transform: uppercase;
      color: #d87d4a;
      font-weight: 700;
      margin-bottom: 16px;
    }

    > div {
      margin-bottom: 53px;
    }

    label {
      font-size: 12px;
      font-weight: 700;
      display: block;
      margin-bottom: 10px;
    }

    input {
      border: 1px solid #cfcfcf;
      border-radius: 8px;
      padding: 24px 18px;
    }
  }

  @media screen and (max-width: 395px) {
    padding: 24px;
  }
`;

export const BillingDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  input {
    width: 100%;
  }

  @media screen and (max-width: 395px) {
    display: block;

    > div {
      margin-bottom: 24px;
    }
  }
`;

export const ShippingInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "addr addr"
    "zip  city";
  gap: 1rem;

  input {
    width: 100%;
  }

  .address {
    grid-area: addr;
  }

  .zip {
    grid-area: zip;
  }

  .city {
    grid-area: city;
  }

  @media screen and (max-width: 395px) {
    display: block;

    > div {
      margin-bottom: 24px;
    }
  }
`;

export const PaymentDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title emoney"
    "title  cash";
  gap: 1rem;

  .title {
    grid-area: title;
    font-size: 12px;
    font-weight: 700;
    text-transform: capitalize;
  }

  .emoney {
    grid-area: emoney;
  }

  .cash {
    grid-area: cash;
  }

  > div {
    input {
      margin-right: 1rem;
    }

    input[type="radio"] {
      /* remove standard background appearance */
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      /* create custom radiobutton appearance */
      display: inline-block;
      width: 25px;
      height: 25px;
      padding: 6px;
      /* background-color only for content */
      background-clip: content-box;
      border: 2px solid #bbbbbb;
      background-color: #e7e6e7;
      border-radius: 50%;
    }

    input[type="radio"]:checked {
      background-color: #d87d4a;
    }

    label {
      border: 1px solid #cfcfcf;
      padding: 10px 20px;
      width: 100%;
      border-radius: 8px;
      font-size: 14px;
      margin-bottom: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 18px;
    }
  }

  @media screen and (max-width: 395px) {
    display: block;

    > div {
      margin-bottom: 24px;
    }
  }
`;

export const EMoneyNumber = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  input {
    width: 100%;
  }

  @media screen and (max-width: 395px) {
    display: block;

    > div {
      margin-bottom: 24px;
    }
  }
`;

export const CashOnDelivery = styled.div`
  display: flex;

  div img {
    margin-right: 32px;
  }

  div p {
    text-transform: none;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Form = styled.div``;

export const SummaryStyled = styled.div`
  background: #fff;
  height: fit-content;
  padding: 32px;
  border-radius: 8px;

  > p {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 32px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    p:nth-child(odd) {
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.5);
    }

    p:nth-child(even) {
      font-weight: 700;
    }
  }

  .total {
    margin-top: 24px;

    p:nth-child(2) {
      color: #d87d4a;
    }
  }

  button {
    margin-top: 32px;
    width: 100%;
    background: #d87d4a;
    color: white;
    padding: 15px 0;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: #fbaf85;
    }
  }
`;

export const SummaryProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;

  > div {
    display: flex;
    align-items: center;
    font-weight: 700;

    p {
      font-size: 15px;
      text-transform: uppercase;
    }

    span {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  img {
    object-fit: contain;
    width: 64px;
    border-radius: 8px;
    margin-right: 16px;
  }

  .quantity {
    color: rgba(0, 0, 0, 0.5);
  }
`;
