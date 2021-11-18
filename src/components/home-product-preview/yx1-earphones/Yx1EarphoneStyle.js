import styled from "styled-components";

export const Yx1Styled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media screen and (max-width: 395px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  height: 100%;
  img {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  height: 300px;
  border-radius: 8px;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-size: 28px;
    margin-bottom: 32px;
  }
`;
