import React from "react";
import MenuCart from "./MenuCart";
import { MenuStyled } from "./MenuStyled";

const Menu = () => {
  const menu = [
    {
      img: "./assets/shared/desktop/image-category-thumbnail-headphones.png",
      name: "headphones",
      url: "/headphones",
    },
    {
      img: "./assets/shared/desktop/image-category-thumbnail-speakers.png",
      name: "speakers",
      url: "/speakers",
    },
    {
      img: "./assets/shared/desktop/image-category-thumbnail-earphones.png",
      name: "earphones",
      url: "/earphones",
    },
  ];
  return (
    <>
      <MenuStyled>
        {menu.map((item, index) => (
          <MenuCart
            key={index}
            name={item.name}
            img={item.img}
            productName={item.name}
            url={item.url}
          />
        ))}
      </MenuStyled>
    </>
  );
};

export default Menu;
