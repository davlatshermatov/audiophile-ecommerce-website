import React from "react";
import { Button } from "../zx7-speaker/Zx7Style";
import { Yx1Styled, Left, Right } from "./Yx1EarphoneStyle";

const Yx1Earphone = () => {

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Yx1Styled>
      <Left>
        <picture>
          <source
            srcset="./assets/home/mobile/image-earphones-yx1.jpg"
            media="(max-width: 395px)"
          />
          <source
            srcset="./assets/home/tablet/image-earphones-yx1.jpg"
            media="(max-width: 768px)"
          />

          <img srcset="./assets/home/desktop/image-earphones-yx1.jpg" alt="" />
        </picture>
      </Left>
      <Right>
        <div>
          <h1>yx1 earphones</h1>
          <Button to="/earphones/yx1" onClick={toTop}>see product</Button>
        </div>
      </Right>
    </Yx1Styled>
  );
};

export default Yx1Earphone;
