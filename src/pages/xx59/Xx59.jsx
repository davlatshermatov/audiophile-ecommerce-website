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
import { xx59, others } from "./productData";
import Others from "../../components/others/Others";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";

const Xx99MarkTwo = () => {
  const [counter, setCounter] = useState(1);
  const [totalSum, setTotalSum] = useState(xx59.price);

  const { addItem } = useCart();

  const handleClick = () => {
    addItem(xx59, counter);
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
    setTotalSum(xx59.price);
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
              srcset={`./assets/${xx59.img.mobile}`}
              media="(max-width: 395px)"
            />
            <source
              srcset={`./assets/${xx59.img.tablet}`}
              media="(max-width: 768px)"
            />

            <img srcset={`./assets/${xx59.img.desktop}`} alt="" />
          </picture>
        </Image>
        <ProductDetails>
          {xx59.new ? <p>new product</p> : ""}
          <ProductTitle>
            <h1>{xx59.name}</h1>
          </ProductTitle>
          <ProductDesc>{xx59.desc}</ProductDesc>
          <Price>{`$ ${totalSum}`}</Price>
          <AddToCart>
            <Counter>
              <button
                onClick={() => {
                  setCounter((prevCount) =>
                    prevCount !== 0 ? prevCount - 1 : prevCount
                  );
                  setTotalSum((prevSum) =>
                    prevSum !== 0 ? prevSum - xx59.price : prevSum
                  );
                }}
              >
                -
              </button>
              <p>{counter}</p>
              <button
                onClick={() => {
                  setCounter((prevCount) => prevCount + 1);
                  setTotalSum((prevSum) => parseInt(prevSum) + xx59.price);
                }}
              >
                +
              </button>
            </Counter>
            <Button onClick={handleClick}>add to cart</Button>
          </AddToCart>
        </ProductDetails>
      </Xx99TwoStyled>
      <Features>
        <div>
          <h1>features</h1>
          <p>{xx59.features}</p>
          <br />
          <p>{xx59.feature2}</p>
        </div>
        <div>
          <h1>in the box</h1>
          <div>
            {xx59.inTheBox.map((item) => (
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
            srcset={`./assets/${xx59.gallery.first.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${xx59.gallery.first.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${xx59.gallery.first.desktop}`} alt="" />
        </picture>
        <picture className="b">
          <source
            srcset={`./assets/${xx59.gallery.second.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${xx59.gallery.second.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${xx59.gallery.second.desktop}`} alt="" />
        </picture>
        <picture className="c">
          <source
            srcset={`./assets/${xx59.gallery.third.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${xx59.gallery.third.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${xx59.gallery.third.desktop}`} alt="" />
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
