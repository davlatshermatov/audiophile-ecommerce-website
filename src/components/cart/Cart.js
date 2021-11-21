import React from "react";
import CartProduct from "./CartProduct";
import {
  CartStyled,
  CartHeader,
  Total,
  Checkout,
  EmptyCart,
} from "./CartStyle";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    emptyCart,
    items,
    cartTotal,
    totalUniqueItems,
  } = useCart();

  return (
    <CartStyled>
      {isEmpty ? (
        <EmptyCart>
          <img src="./assets/shared/desktop/empty-cart-icon.png" alt="" />
          <p>your cart is empty</p>
        </EmptyCart>
      ) : (
        <>
          <CartHeader>
            <p>cart({totalUniqueItems})</p>
            <input
              type="button"
              value="remove all"
              onClick={() => emptyCart()}
            />
          </CartHeader>

          {items.map((item) => (
            <CartProduct
              id={item.id}
              img={item.cartImg}
              name={item.cartName}
              price={item.price}
              quantity={item.quantity}
            />
          ))}

          <Total>
            <p>total</p>
            <span>$ {cartTotal}</span>
          </Total>
          <Checkout to="/checkout">checkout</Checkout>
        </>
      )}
    </CartStyled>
  );
};

export default Cart;
