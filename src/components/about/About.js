import React from "react";
import { AboutStyled, Info, Image } from "./AboutStyle";

const About = () => {
  return (
    <AboutStyled>
      <Info>
        <h1>
          bring you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Info>
      <Image>
        <picture><source
            srcset="./assets/shared/mobile/image-best-gear.jpg"
            media="(max-width: 395px)"
          />
          <source
            srcset="./assets/shared/tablet/image-best-gear.jpg"
            media="(max-width: 768px)"
          />
           
          <img srcset="./assets/shared/desktop/image-best-gear.jpg" alt="" />
        </picture>

        {/* <img
          src="./assets/shared/desktop/image-best-gear.jpg"
          alt="best gear"
        /> */}
      </Image>
    </AboutStyled>
  );
};

export default About;
