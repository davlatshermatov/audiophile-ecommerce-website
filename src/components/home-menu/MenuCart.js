import React from "react";
import {
  CartBodyStyled,
  CartImgStyled,
  Details,
  MenuCartStyled,
} from "./MenuCartStyled";

const MenuCart = ({ img, productName, url }) => {
  return (
    <MenuCartStyled>
      <CartBodyStyled>
        <p>{productName}</p>
        <Details to={url}>
          <p>Shop</p>
          <img
            src="./assets/shared/desktop/icon-arrow-right.svg"
            alt="icon-arrow-right"
          />
        </Details>
        <CartImgStyled>
          <img src={img} alt={`${productName} photo`} />
        </CartImgStyled>
      </CartBodyStyled>
    </MenuCartStyled>
  );
};

export default MenuCart;
