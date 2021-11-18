import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "../navbar/NavbarElements";
import {
  Container,
  FooterSection,
  Icons,
  MiddleSection,
  TopSection,
  FooterMenu,
  CopyrightSection,
} from "./FooterElements";

const Footer = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <FooterSection>
        <TopSection>
          <Link to="/" onClick={toTop}>
            <img src="./assets/shared/desktop/logo.svg" alt="NavLogo" />
          </Link>
          <FooterMenu>
            <NavLink to="/" onClick={toTop}>
              Home
            </NavLink>
            <NavLink to="/headphones" onClick={toTop}>
              Headphones
            </NavLink>
            <NavLink to="/speakers" onClick={toTop}>
              Speakers
            </NavLink>
            <NavLink to="/earphones" onClick={toTop}>
              Earphones
            </NavLink>
          </FooterMenu>
        </TopSection>

        <MiddleSection>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <Icons>
            <a
              href="https://www.facebook.com/davlatshermatov111/"
              target="_blank"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://t.me/davlat_shermatov" target="_blank">
              <i class="fab fa-telegram-plane"></i>
            </a>
            <a
              href="https://www.instagram.com/world__gone_mad/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </Icons>
        </MiddleSection>
        <CopyrightSection>
          <p>Copyright 2021. All Rights Reserved</p>
          <Icons>
            <a href="https://www.facebook.com/davlatshermatov111/">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://t.me/davlat_shermatov">
              <i class="fab fa-telegram-plane"></i>
            </a>
            <a href="https://www.instagram.com/world__gone_mad/">
              <i class="fab fa-instagram"></i>
            </a>
          </Icons>
        </CopyrightSection>
      </FooterSection>
    </Container>
  );
};

export default Footer;
