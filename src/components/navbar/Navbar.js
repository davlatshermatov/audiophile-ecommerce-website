import React, { useState } from "react";
import { Nav, NavLink, NavLogo, NavMenu, NavBtn } from "./NavbarElements";

const Navbar = ({background}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav background={background}>
        <div
          className={`menuBtn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="menuBtn-burger"></div>
        </div>
        <NavLogo to="/">
          <img src="./assets/shared/desktop/logo.svg" alt="NavLogo" />
        </NavLogo>
        <NavMenu menuOpen={menuOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/headphones">Headphones</NavLink>
          <NavLink to="/speakers">Speakers</NavLink>
          <NavLink to="/earphones">Earphones</NavLink>
        </NavMenu>
        <NavBtn>
          <img src="./assets/shared/desktop/icon-cart.svg" alt="cart-icon" />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
