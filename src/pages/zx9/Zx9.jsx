import React, { useState } from "react";
import Menu from "../../components/home-menu/Menu";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import {
  Xx99TwoStyled,
  AddToCart,
  Features,
  Gallery,
  ProductTitle,
  ProductDesc,
  Price,
  Image,
  ProductDetails,
  Nav,
  Button,
  Counter,
  OtherItems,
} from "../xx99Two/Xx99TwoStyle";
import Navbar from "../../components/navbar/Navbar";
import { zx9, others } from "./productData";
import Others from "../../components/others/Others";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";

const Xx99MarkTwo = () => {
  const [counter, setCounter] = useState(1);
  const [totalSum, setTotalSum] = useState(zx9.price);
  const { addItem } = useCart();

  const handleClick = () => {
    addItem(zx9, counter);
    toast.success("Successfully added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setCounter(1);
    setTotalSum(zx9.price);
  };

  return (
    <>
      <Nav>
        <Navbar background={"#000"} />
      </Nav>
      <Xx99TwoStyled>
        <Image>
          <picture>
            <source
              srcset={`./assets/${zx9.img.mobile}`}
              media="(max-width: 395px)"
            />
            <source
              srcset={`./assets/${zx9.img.tablet}`}
              media="(max-width: 768px)"
            />
            <img srcset={`./assets/${zx9.img.desktop}`} alt="" />
          </picture>
        </Image>
        <ProductDetails>
          {zx9.new ? <p>new product</p> : ""}
          <ProductTitle>
            <h1>{zx9.name}</h1>
          </ProductTitle>
          <ProductDesc>{zx9.desc}</ProductDesc>
          <Price>{`$ ${totalSum}`}</Price>
          <AddToCart>
            <Counter>
              <button
                onClick={() => {
                  setCounter((prevCount) =>
                    prevCount !== 0 ? prevCount - 1 : prevCount
                  );
                  setTotalSum((prevSum) =>
                    prevSum !== 0 ? prevSum - zx9.price : prevSum
                  );
                }}
              >
                -
              </button>
              <p>{counter}</p>
              <button
                onClick={() => {
                  setCounter((prevCount) => prevCount + 1);
                  setTotalSum((prevSum) => parseInt(prevSum) + zx9.price);
                }}
              >
                +
              </button>
            </Counter>
            <Button onClick={() => handleClick(zx9, counter, zx9.price)}>
              add to cart
            </Button>
          </AddToCart>
        </ProductDetails>
      </Xx99TwoStyled>
      <Features>
        <div>
          <h1>features</h1>
          <p>{zx9.features}</p>
          <br />
          <p>{zx9.feature2}</p>
        </div>
        <div>
          <h1>in the box</h1>
          <div>
            {zx9.inTheBox.map((item) => (
              <p>
                <span>{`${item.amount}x`}</span> {item.name}
              </p>
            ))}
          </div>
        </div>
      </Features>
      <Gallery>
        <picture className="a">
          <source
            srcset={`./assets/${zx9.gallery.first.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${zx9.gallery.first.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${zx9.gallery.first.desktop}`} alt="" />
        </picture>
        <picture className="b">
          <source
            srcset={`./assets/${zx9.gallery.second.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${zx9.gallery.second.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${zx9.gallery.second.desktop}`} alt="" />
        </picture>
        <picture className="c">
          <source
            srcset={`./assets/${zx9.gallery.third.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${zx9.gallery.third.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${zx9.gallery.third.desktop}`} alt="" />
        </picture>
      </Gallery>
      <OtherItems>
        <h1>you may also like</h1>
        <div>
          {others.map((item) => (
            <Others {...item} />
          ))}
        </div>
      </OtherItems>
      <Menu />
      <About />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Xx99MarkTwo;
