import React from "react";
import {
  ProductDetails,
  ProductImage,
  Zx9Styled,
  ProductTitle,
  ProductDescription,
  Button,
  Box,
} from "./Zx9Styled";

const Zx9 = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zx9Styled>
      <Box>
        <ProductImage>
          <picture>
            <source
              srcset="./assets/home/mobile/image-speaker-zx9.png"
              media="(max-width: 395px)"
            />
            <source
              srcset="./assets/home/tablet/image-speaker-zx9.png"
              media="(max-width: 768px)"
            />

            <img srcset="./assets/home/desktop/image-speaker-zx9.png" alt="" />
          </picture>
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
          <Button to="/speakers/zx9" onClick={toTop}>
            see product
          </Button>
        </ProductDetails>
      </Box>
    </Zx9Styled>
  );
};

export default Zx9;
