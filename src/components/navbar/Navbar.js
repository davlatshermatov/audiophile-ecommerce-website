import React, { useState } from "react";
import Cart from "../cart/Cart";
import { Nav, NavLink, NavLogo, NavMenu, NavBtn } from "./NavbarElements";

const Navbar = ({ background }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Nav background={background}>
        <div
          className={`menuBtn ${menuOpen ? "open" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setCartOpen(false);
          }}
        >
          <div className="menuBtn-burger"></div>
        </div>
        {cartOpen ? <Cart /> : ""}
        <NavLogo to="/">
          <img src="./assets/shared/desktop/logo.svg" alt="NavLogo" />
        </NavLogo>
        <NavMenu menuOpen={menuOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/headphones">Headphones</NavLink>
          <NavLink to="/speakers">Speakers</NavLink>
          <NavLink to="/earphones">Earphones</NavLink>
        </NavMenu>
        <NavBtn onClick={() => setCartOpen(!cartOpen)}>
          <img src="./assets/shared/desktop/icon-cart.svg" alt="cart-icon" />
        </NavBtn>
        <div className="layer"></div>
      </Nav>
    </>
  );
};

export default Navbar;
