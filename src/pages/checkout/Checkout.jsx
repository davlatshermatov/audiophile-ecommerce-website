import React, { useState, useEffect } from "react";
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
import { useCart } from "react-use-cart";
import Modal from "../../components/modal/Modal";
import useForm from "./useForm";
import validate from "./validateInfo";

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
  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [isChecked, setIsChecked] = useState(true);

  return (
    <CheckoutLeftStyled>
      <h1>checkout</h1>
      <form>
        <p>billing details</p>
        <BillingDetails>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Alexei Ward"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="alexei@mail.com"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+1 202-555-0136"
              value={values.phoneNumber}
              onChange={handleChange}
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
              name="address"
              placeholder="1137 Williams Avenue"
              value={values.address}
              onChange={handleChange}
            />
          </div>
          <div className="zip">
            <label htmlFor="zipCode">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="10001"
              value={values.zipCode}
              onChange={handleChange}
            />
          </div>
          <div className="city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="New York"
              value={values.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="United States"
              value={values.country}
              onChange={handleChange}
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
  const { items, totalItems, cartTotal, totalUniqueItems, emptyCart } =
    useCart();
  const [shipping, setShipping] = useState(50);
  const [vat, setVat] = useState(1079);
  const [grandTotal, setGrandTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    emptyCart();
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    setGrandTotal(cartTotal + shipping + vat);
    console.log(showModal);
  }, [items]);

  return (
    <SummaryStyled>
      <p>summary</p>

      {items.map((item) => (
        <SummaryProduct
          img={item.cartImg}
          name={item.cartName}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <div className="info">
        <p>total</p>
        <p>$ {cartTotal}</p>
      </div>
      <div className="info">
        <p>shipping</p>
        <p>$ {shipping}</p>
      </div>
      <div className="info">
        <p>vat (included)</p>
        <p>$ {vat}</p>
      </div>
      <div className="info total">
        <p>grand total</p>
        <p>$ {grandTotal}</p>
      </div>
      <button onClick={openModal}>continue</button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </SummaryStyled>
  );
};

const SummaryProduct = ({ img, name, price, quantity }) => {
  return (
    <SummaryProductStyled>
      <div className="image">
        <img src={img} alt="" />
        <div>
          <p>{name}</p>
          <span> $ {price} </span>
        </div>
      </div>
      <div className="quantity">x{quantity}</div>
    </SummaryProductStyled>
  );
};

export default Checkout;
