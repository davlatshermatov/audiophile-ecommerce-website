import styled from "styled-components";

export const Xx99TwoStyled = styled.div`
  width: 75%;
  margin: 80px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 125px;

  @media screen and (max-width: 768px) {
    width: 90%;
    grid-column-gap: 70px;
  }

  @media screen and (max-width: 395px) {
    display: block;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const Nav = styled.div`
  width: 100%;
  background: #000; ;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    font-size: 14px;
    text-transform: uppercase;
    color: #d87d4a;
    letter-spacing: 10px;
    margin: 16px 0;
  }
`;

export const ProductTitle = styled.div`
  h1 {
    font-size: 40px;
    text-transform: uppercase;

    @media screen and (max-width: 395px) {
      font-size: 28px;
    }
  }
`;

export const ProductDesc = styled.div`
  font-size: 15px;
  opacity: 0.5;
  margin: 32px 0;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 50px;
`;

export const AddToCart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 0.9fr 1.1fr;
  }
`;

export const Counter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #f1f1f1;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  button {
    cursor: pointer;
    height: 100%;

    &:active {
      background: #d87d4a;
      color: white;
    }
  }
`;

export const Button = styled.button`
  background: #d87d4a;
  padding: 20px 20px;
  color: white;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #fbaf85;
  }
`;

export const Features = styled.div`
  width: 75%;
  margin: 160px auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 5rem;

  h1 {
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  p {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);

    span {
      color: #d87d4a;
      font-weight: 700;
      margin-right: 1rem;
    }
  }

  div div p {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 90%;

    > div {
      margin-bottom: 4rem;
    }
  }

  @media screen and (max-width: 395px) {
  }
`;

export const Gallery = styled.div`
  width: 75%;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr 1.3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "a c"
    "b c";
  gap: 1.5rem;

  img {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .b {
    grid-area: b;
  }
  .c {
    grid-area: c;
  }
  .a {
    grid-area: a;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 395px) {
    display: block;
  }
`;

export const OtherItems = styled.div`
  width: 75%;
  margin: 160px auto;

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 395px) {
    > div {
      display: block;
    }
  }
`;
