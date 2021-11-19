import React, { useState } from "react";
import {
  CartProducts,
  Counter,
  ProductDetails,
  ProductImage,
  Container,
} from "./CartProductStyle";
import { useCart } from "react-use-cart";

const CartProduct = ({ id, name, price, quantity, img }) => {
  const { updateItemQuantity } = useCart();

  const increase = () => {
    updateItemQuantity(id, quantity + 1);
  };

  const descrease = () => {
    updateItemQuantity(id, quantity - 1);
  };

  return (
    <>
      <CartProducts>
        <Container>
          <ProductImage>
            <img src={img} alt="" />
          </ProductImage>
          <ProductDetails>
            <p>{name}</p>
            <span>$ {price}</span>
          </ProductDetails>
        </Container>
        <Counter>
          <button onClick={descrease}>-</button>
          <p>{quantity}</p>
          <button onClick={increase}>+</button>
        </Counter>
      </CartProducts>
    </>
  );
};

export default CartProduct;
