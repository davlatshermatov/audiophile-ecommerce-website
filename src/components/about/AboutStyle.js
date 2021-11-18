import styled from "styled-components";

export const AboutStyled = styled.div`
  width: 75%;
  margin:200px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Info = styled.div`
  h1 {
    font-size: 40px;
    text-transform: uppercase;

    span {
      color: #d87d4a;
    }
  }

  p {
    opacity: 0.5;
    font-size: 15px;
    margin: 32px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2.5rem;
    h1 {
      margin-top: 60px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 395px) {
    padding: 0;
  }
`;

export const Image = styled.div`
  img {
    /* object-fit: cover; */
    width: 100%;
    /* height: 100%; */
    border-radius: 8px;
  }
`;
