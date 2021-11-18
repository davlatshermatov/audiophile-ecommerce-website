import styled from "styled-components";

export const FooterSection = styled.div`
  padding: 2rem 0;
  width: 75%;
  margin: 0 auto;
  color: white;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 395px) {
    text-align: center;
  }
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FooterMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 30px;
  grid-row-gap: 1rem;
  justify-content: end;

  @media screen and (max-width: 768px) {
    justify-content: start;
    margin: 32px 0;
  }

  @media screen and (max-width: 395px) {
    grid-template-columns: 1fr;
  }
`;

export const MiddleSection = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  margin: 1.8rem 0;

  > p {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;

    > div {
      display: none;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;

  i {
    color: white;
    font-size: 24px;
    margin: 0 10px;

    &:hover {
      color: #d87d4a;
    }
  }
`;

export const CopyrightSection = styled.div`
  font-size: 15px;
  margin-top: 56px;

  > div {
    display: none;
  }

  p {
    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    margin-top: 70px;
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
    }
  }

  @media screen and (max-width: 395px) {
    display: block;

    p {
      margin: 48px 0;
    }

    div {
      display: block;
    }
  }
`;

export const Container = styled.div`
  background: #000;
`;
