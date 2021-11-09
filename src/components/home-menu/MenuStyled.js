import styled from "styled-components";

export const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 6rem 1rem;
  width: 75%;
  text-align: center;
  margin: 250px auto;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  /* @media screen and (max-width: 375px) {
    display: block;
    margin: 0 auto;
  } */
`;
