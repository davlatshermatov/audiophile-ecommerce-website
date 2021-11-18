import React from "react";
import { Button } from "../../components/home-banner/HomeBannerStyle";
import {
  Image,
  AddToCart,
  Features,
  Gallery,
  ProductTitle,
  ProductDesc,
  Price,
  ProductDetails,
  Xx99MarkTwoStyled,
} from "./Xx99MarkTwoStyle";
import xx99 from "./productData";

const Xx99MarkTwo = () => {
  return (
    <>
      <Xx99MarkTwoStyled>
        <Image>
          <picture>
            <source
              srcset={`./assets/${xx99.img.mobile}`}
              media="(max-width: 395px)"
            />
            <source
              srcset={`./assets/${xx99.img.tablet}`}
              media="(max-width: 768px)"
            />

            <img srcset={xx99.img.desktop} alt="" />
          </picture>
          <h1>Image</h1>
        </Image>
        {/* <ProductDetails>
          {xx99.new ? <p>new product</p> : ""}
          <ProductTitle>
            <h1>{xx99.name}</h1>
          </ProductTitle>
          <ProductDesc>{xx99.desc}</ProductDesc>
          <Price>{`$ ${xx99.price}`}</Price>
          <AddToCart>
            <Button>add to cart</Button>
          </AddToCart>
        </ProductDetails>*/}
      </Xx99MarkTwoStyled>
      {/* <Features>
        <div>
          <h1>features</h1>
          <p>{xx99.features}</p>
        </div>
        <div>
          <h1>in the box</h1>
          {xx99.inTheBox.map((item) => (
            <p>
              <span>{`${item.amount}x`}</span> {item.name}
            </p>
          ))}
        </div>
      </Features> */}
      {/* <Gallery></Gallery> */}
    </>
  );
};

export default Xx99MarkTwo;
