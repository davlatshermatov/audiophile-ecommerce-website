import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  width: 75%;
  margin: auto;
  border-bottom: 0.2px solid #434343;
  position: relative;

  .menuBtn {
    position: relative;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 395px) {
      margin-left: 15px;
    }
  }

  .menuBtn.open .menuBtn-burger {
    transform: translateX(-20px);
    background: transparent;
    box-shadow: none;
  }

  .menuBtn.open .menuBtn-burger::before {
    transform: rotate(45deg) translate(15px, -15px);
  }

  .menuBtn.open .menuBtn-burger::after {
    transform: rotate(-45deg) translate(15px, 15px);
  }

  .menuBtn-burger {
    width: 20px;
    height: 3px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 3px;
      background: white;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition: all 0.5s ease-in-out;
    }

    &::before {
      transform: translateY(-5px);
    }

    &::after {
      transform: translateY(5px);
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: start;
    grid-template-columns: auto auto;

    .menuBtn {
      display: block;
    }
  }

  @media screen and (max-width: 395px) {
    width: 100%;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
  }
`;

export const NavLogo = styled(Link)`
  /* @media screen and (max-width: 768px) {
    display: flex;
    justify-self: start;
  } */

  /* @media screen and (max-width: 375px) {
    justify-content: center;
  } */
`;

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #d87d4a;
  }
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  justify-content: space-between;
  width: 55%;
  padding: 0 4rem;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;

  @media screen and (max-width: 1200px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 900px) {
    padding: 0;
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.button`
  cursor: pointer;
  background: transparent;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
  }

  @media screen and (max-width: 395px) {
    margin-right: 15px;
    position: static;
  }
`;
