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
import { xx99One, others } from "./productData";
import Others from "../../components/others/Others";

const Xx99MarkTwo = () => {
  const [counter, setCounter] = useState(1);
  const [totalSum, setTotalSum] = useState(xx99One.price);

  return (
    <>
      <Nav>
        <Navbar background={"#000"} />
      </Nav>
      <Xx99TwoStyled>
        <Image>
          <picture>
            <source
              srcset={`./assets/${xx99One.img.mobile}`}
              media="(max-width: 395px)"
            />
            <source
              srcset={`./assets/${xx99One.img.tablet}`}
              media="(max-width: 768px)"
            />

            <img srcset={`./assets/${xx99One.img.desktop}`} alt="" />
          </picture>
        </Image>
        <ProductDetails>
          {xx99One.new ? <p>new product</p> : ""}
          <ProductTitle>
            <h1>{xx99One.name}</h1>
          </ProductTitle>
          <ProductDesc>{xx99One.desc}</ProductDesc>
          <Price>{`$ ${totalSum}`}</Price>
          <AddToCart>
            <Counter>
              <button
                onClick={() => {
                  setCounter((prevCount) =>
                    prevCount !== 0 ? prevCount - 1 : prevCount
                  );
                  setTotalSum((prevSum) =>
                    prevSum !== 0 ? prevSum - xx99One.price : prevSum
                  );
                }}
              >
                -
              </button>
              <p>{counter}</p>
              <button
                onClick={() => {
                  setCounter((prevCount) => prevCount + 1);
                  setTotalSum((prevSum) => parseInt(prevSum) + xx99One.price);
                }}
              >
                +
              </button>
            </Counter>
            <Button>add to cart</Button>
          </AddToCart>
        </ProductDetails>
      </Xx99TwoStyled>
      <Features>
        <div>
          <h1>features</h1>
          <p>{xx99One.features}</p>
          <br />
          <p>{xx99One.feature2}</p>
        </div>
        <div>
          <h1>in the box</h1>
          <div>
            {xx99One.inTheBox.map((item) => (
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
            srcset={`./assets/${xx99One.gallery.first.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${xx99One.gallery.first.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${xx99One.gallery.first.desktop}`} alt="" />
        </picture>
        <picture className="b">
          <source
            srcset={`./assets/${xx99One.gallery.second.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${xx99One.gallery.second.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${xx99One.gallery.second.desktop}`} alt="" />
        </picture>
        <picture className="c">
          <source
            srcset={`./assets/${xx99One.gallery.third.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${xx99One.gallery.third.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${xx99One.gallery.third.desktop}`} alt="" />
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
    </>
  );
};

export default Xx99MarkTwo;
