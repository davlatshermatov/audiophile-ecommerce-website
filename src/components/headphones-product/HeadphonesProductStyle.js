import styled from "styled-components";

export const HeadphonesProductStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 125px;
  order: -1;
  width: 75%;
  margin: 100px auto;
  color: #000;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: block;
    text-align: center;
  }

  @media screen and (max-width: 395px) {
  }
`;

export const Image = styled.div`
  width: 100%;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: ${(props) => (props.order ? "1" : "-1")};

  > p {
    font-size: 14px;
    text-transform: uppercase;
    color: #d87d4a;
    letter-spacing: 10px;
    margin-bottom: 16px;
  }

  .btn {
      width: 160px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 60px;
    margin-top: 52px;

    .btn {
        margin: auto;
    }
  }

  @media screen and (max-width: 395px) {
      padding: 0;
  }
`;

export const ProductTitle = styled.div`
  margin-bottom: 32px;
  h1 {
    font-size: 40px;
    text-transform: uppercase;
  }
`;

export const ProductDesc = styled.div`
  opacity: 0.5;
  margin-bottom: 40px;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
`;
