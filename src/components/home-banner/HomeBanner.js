import React from "react";
import {
  Button,
  HomeBannerStyled,
  ProductDescription,
  ProductTitle,
} from "./HomeBannerStyle";

const HomeBanner = () => {
  return (
    <HomeBannerStyled>
      <p>New Product</p>
      <ProductTitle>
        <p>XX99 Mark || <br /> Headphones</p>
      </ProductTitle>
      <ProductDescription>
        <p>
          Experince natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </ProductDescription>
      <Button to="#">See Product</Button>
    </HomeBannerStyled>
  );
};

export default HomeBanner;
