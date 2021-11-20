import React, { useState } from "react";
import {
  CheckoutStyled,
  CheckoutLeftStyled,
  SummaryStyled,
  ShippingInfo,
  BillingDetails,
  PaymentDetails,
  EMoneyNumber,
  CashOnDelivery,
  Container,
  Nav,
  SummaryProductStyled,
} from "./CheckoutStyle";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Checkout = () => {
  return (
    <CheckoutStyled>
      <Nav>
        <Navbar background="#000" />
      </Nav>
      <Container>
        <CheckoutLeft />
        <Summary />
      </Container>
      <Footer />
    </CheckoutStyled>
  );
};

const CheckoutLeft = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <CheckoutLeftStyled>
      <h1>checkout</h1>
      <form action="#">
        <p>billing details</p>
        <BillingDetails>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Alexei Ward"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="alexei@mail.com"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+1 202-555-0136"
            />
          </div>
        </BillingDetails>

        <p>shipping info</p>
        <ShippingInfo>
          <div className="address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="adress"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className="zip">
            <label htmlFor="zipCode">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="10001"
            />
          </div>
          <div className="city">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" placeholder="New York" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="United States"
            />
          </div>
        </ShippingInfo>

        <p>payment details</p>
        <PaymentDetails>
          <div className="title">payment method</div>
          <div className="emoney" htmlFor="eMoney">
            <label htmlFor="eMoney">
              <input
                type="radio"
                id="eMoney"
                name="payMethod"
                checked={isChecked}
                onChange={() => {
                  setIsChecked(true);
                }}
              />
              e-Money
            </label>
          </div>
          <div className="cash" htmlFor="cash">
            <label htmlFor="cash">
              <input
                type="radio"
                id="cash"
                name="payMethod"
                checked={isChecked ? false : true}
                onChange={() => {
                  setIsChecked(false);
                }}
              />
              Cash on Delivery
            </label>
          </div>
        </PaymentDetails>

        {isChecked ? (
          <EMoneyNumber>
            <div>
              <label htmlFor="e-money-number">e-Money Number</label>
              <input
                type="text"
                id="e-money-number"
                name="eMoneyNumber"
                placeholder="238521993"
              />
            </div>
            <div>
              <label htmlFor="e-money-pin">e-Money PIN</label>
              <input
                type="text"
                id="e-money-pin"
                name="eMoneyPin"
                placeholder="6891"
              />
            </div>
          </EMoneyNumber>
        ) : (
          <CashOnDelivery>
            <div>
              <img src="./assets/shared/desktop/cash-on-delivery.svg" alt="" />
            </div>
            <div>
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          </CashOnDelivery>
        )}
      </form>
      <ShippingInfo></ShippingInfo>
    </CheckoutLeftStyled>
  );
};

const Summary = () => {
  return (
    <SummaryStyled>
      <p>summary</p>
      <SummaryProduct />
      <SummaryProduct />
      <div className="info">
        <p>total</p>
        <p>$ 5,396</p>
      </div>
      <div className="info">
        <p>shipping</p>
        <p>$ 50</p>
      </div>
      <div className="info">
        <p>vat (included)</p>
        <p>$ 1,079</p>
      </div>
      <div className="info total">
        <p>grand total</p>
        <p>$ 5,446</p>
      </div>
      <button>continue</button>
    </SummaryStyled>
  );
};

const SummaryProduct = () => {
  return (
    <SummaryProductStyled>
      <div className="image">
        <img src="./assets/cart/image-xx99-mark-two-headphones.jpg" alt="" />
        <div>
          <p>xx99 mk ||</p>
          <span> $ 2,999 </span>
        </div>
      </div>
      <div className="quantity">x1</div>
    </SummaryProductStyled>
  );
};

export default Checkout;
