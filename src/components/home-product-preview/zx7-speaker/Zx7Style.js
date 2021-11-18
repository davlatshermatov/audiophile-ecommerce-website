import styled from "styled-components";
import { Link } from "react-router-dom";

export const Zx7Styled = styled.div`
  margin: 50px 0;
  background: url("./assets/home/desktop/image-speaker-zx7.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  height: 320px;
  padding-left: 95px;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    background: url("./assets/home/tablet/image-speaker-zx7.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    padding-left: 60px;
  }

  @media screen and (max-width: 395px) {
    background: url("./assets/home/mobile/image-speaker-zx7.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    padding-left: 24px;
  }
`;

export const Details = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: center;
  h1 {
    text-transform: uppercase;
    font-size: 28px;
    margin: 32px 0;
  }
`;

export const Button = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  background: transparent;
  border: 2px solid #000;
  font-size: 13px;
  padding: 15px 30px;
  width: fit-content;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
