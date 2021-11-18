import React from "react";
import { Image, OthersStyled, Title } from "./OthersStyle";
import { Button } from "../../components/home-banner/HomeBannerStyle";

const Others = ({ img, name, link }) => {
  return (
    <OthersStyled>
      <Image>
        <picture>
          <source srcset={img.mobile} media="(max-width: 395px)" />
          <source srcset={img.tablet} media="(max-width: 768px)" />
          <img srcset={img.desktop} alt="" />
        </picture>
      </Image>
      <Title>
        <p>{name}</p>
      </Title>
      <Button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        to={link}
      >
        see product
      </Button>
    </OthersStyled>
  );
};

export default Others;
