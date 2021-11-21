import React from "react";
import {
  ModalStyled,
  Background,
  ModalImage,
  ModalTitle,
  ModalDesc,
  ModalInfo,
  GrandTotal,
  ModalButton,
  ModalProduct,
} from "./ModalStyle";

const Modal = ({ showModal, setShowModal }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showModal ? (
        <Background>
          <ModalStyled>
            <img src="./assets/shared/desktop/modal-tick.svg" alt="" />
            <ModalTitle>
              <h1>
                thank you <br /> for your order
              </h1>
            </ModalTitle>
            <ModalDesc>
              You will receive an email confirmation shortly.
            </ModalDesc>
            <ModalInfo>
              <ModalProduct>
                <div className="product-image">
                  <img
                    src="./assets/cart/image-xx99-mark-two-headphones.jpg"
                    alt=""
                  />
                  <div className="product">
                    <p>xx99 mk ||</p>
                    <p>$ 2,999</p>
                  </div>
                  <div className="quantity">
                    <p>x1</p>
                  </div>
                </div>
                <div className="others">
                  <p>and 2 other item(s)</p>
                </div>
              </ModalProduct>
              <GrandTotal>
                <p>grand total</p>
                <p>$ 5,446</p>
              </GrandTotal>
            </ModalInfo>
            <ModalButton to="/" onClick={handleClick}>
              back to home
            </ModalButton>
          </ModalStyled>
        </Background>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
