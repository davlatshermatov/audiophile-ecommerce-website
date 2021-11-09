import React from "react";
import {
  ProductDetails,
  ProductImage,
  Zx9Styled,
  ProductTitle,
  ProductDescription,
  Button,
} from "./Zx9Styled";

const Zx9 = () => {
  return (
    <Zx9Styled>
      <ProductImage>
        <img
          src="./assets/home/desktop/image-speaker-zx9.png"
          alt="peaker-zx9"
        />
      </ProductImage>
      <ProductDetails>
        <ProductTitle>
          <h1>zx9 speaker</h1>
        </ProductTitle>
        <ProductDescription>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
        </ProductDescription>
        <Button>see product</Button>
      </ProductDetails>
    </Zx9Styled>
  );
};

export default Zx9;
