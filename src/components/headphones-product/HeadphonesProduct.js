import React from "react";
import { Button } from "../home-banner/HomeBannerStyle";
import {
  HeadphonesProductStyled,
  Image,
  ProductTitle,
  ProductDetails,
  ProductDesc,
} from "./HeadphonesProductStyle";

const HeadphonesProduct = ({ name, img, desc, order, link, isNew }) => {
  return (
    <HeadphonesProductStyled>
      <Image>
        `{" "}
        <picture>
          <source
            srcset={`./assets/${img.mobile}`}
            media="(max-width: 395px)"
          />
          <source
            srcset={`./assets/${img.tablet}`}
            media="(max-width: 768px)"
          />

          <img srcset={`./assets/${img.desktop}`} alt="" />
        </picture>
        `
      </Image>
      <ProductDetails order={order}>
        {isNew ? <p>new product</p> : ""}
        <ProductTitle>
          <h1>{name}</h1>
        </ProductTitle>
        <ProductDesc>
          <p>{desc}</p>
        </ProductDesc>
        <Button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          to={link}
          className="btn"
        >
          see product
        </Button>
      </ProductDetails>
    </HeadphonesProductStyled>
  );
};

export default HeadphonesProduct;
