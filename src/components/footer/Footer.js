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
  return (
    <Container>
      <FooterSection>
        <TopSection>
          <Link to="/">
            <img src="./assets/shared/desktop/logo.svg" alt="NavLogo" />
          </Link>
          <FooterMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/headphones">Headphones</NavLink>
            <NavLink to="/speakers">Speakers</NavLink>
            <NavLink to="/earphones">Earphones</NavLink>
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
            <Link>
              <i class="fab fa-facebook-square"></i>
            </Link>
            <Link>
              <i class="fab fa-twitter"></i>
            </Link>
            <Link>
              <i class="fab fa-instagram"></i>
            </Link>
          </Icons>
        </MiddleSection>
        <CopyrightSection>
          <p>Copyright 2021. All Rights Reserved</p>
          <Icons>
            <Link>
              <i class="fab fa-facebook-square"></i>
            </Link>
            <Link>
              <i class="fab fa-twitter"></i>
            </Link>
            <Link>
              <i class="fab fa-instagram"></i>
            </Link>
          </Icons>
        </CopyrightSection>
      </FooterSection>
    </Container>
  );
};

export default Footer;
