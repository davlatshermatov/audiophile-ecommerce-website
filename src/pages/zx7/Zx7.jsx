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
import { zx7, others } from "./productData";
import Others from "../../components/others/Others";

const Xx99MarkTwo = () => {
  const [counter, setCounter] = useState(1);
  const [totalSum, setTotalSum] = useState(zx7.price);

  return (
    <>
      <Nav>
        <Navbar background={"#000"} />
      </Nav>
      <Xx99TwoStyled>
        <Image>
          <picture>
            <source
              srcset={`./assets/${zx7.img.mobile}`}
              media="(max-width: 395px)"
            />
            <source
              srcset={`./assets/${zx7.img.tablet}`}
              media="(max-width: 768px)"
            />

            <img srcset={`./assets/${zx7.img.desktop}`} alt="" />
          </picture>
        </Image>
        <ProductDetails>
          {zx7.new ? <p>new product</p> : ""}
          <ProductTitle>
            <h1>{zx7.name}</h1>
          </ProductTitle>
          <ProductDesc>{zx7.desc}</ProductDesc>
          <Price>{`$ ${totalSum}`}</Price>
          <AddToCart>
            <Counter>
              <button
                onClick={() => {
                  setCounter((prevCount) =>
                    prevCount !== 0 ? prevCount - 1 : prevCount
                  );
                  setTotalSum((prevSum) =>
                    prevSum !== 0 ? prevSum - zx7.price : prevSum
                  );
                }}
              >
                -
              </button>
              <p>{counter}</p>
              <button
                onClick={() => {
                  setCounter((prevCount) => prevCount + 1);
                  setTotalSum((prevSum) => parseInt(prevSum) + zx7.price);
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
          <p>{zx7.features}</p>
          <br />
          <p>{zx7.feature2}</p>
        </div>
        <div>
          <h1>in the box</h1>
          <div>
            {zx7.inTheBox.map((item) => (
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
            srcset={`./assets/${zx7.gallery.first.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${zx7.gallery.first.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${zx7.gallery.first.desktop}`} alt="" />
        </picture>
        <picture className="b">
          <source
            srcset={`./assets/${zx7.gallery.second.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${zx7.gallery.second.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${zx7.gallery.second.desktop}`} alt="" />
        </picture>
        <picture className="c">
          <source
            srcset={`./assets/${zx7.gallery.third.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${zx7.gallery.third.tablet}`}
            media="(max-width: 768px)"
          />
          <img srcset={`./assets/${zx7.gallery.third.desktop}`} alt="" />
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
