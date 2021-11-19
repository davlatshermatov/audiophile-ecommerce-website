import React from "react";
import { Heading } from "../../AppStyle";
import Navbar from "../../components/navbar/Navbar";
import { SpeakersStyled } from "./SpeakersStyle";
import HeadphonesProduct from "../../components/headphones-product/HeadphonesProduct";
import Menu from "../../components/home-menu/Menu";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "zx9 speaker",
      desc: " Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      img: {
        desktop: "product-zx9-speaker/desktop/image-category-page-preview.jpg",
        tablet: "product-zx9-speaker/tablet/image-category-page-preview.jpg",
        mobile: "product-zx9-speaker/mobile/image-category-page-preview.jpg",
      },
      link: "/speakers/zx9",
      isNew: true,
    },
    {
      id: 2,
      name: "zx7 speaker",
      desc: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      img: {
        desktop: "product-zx7-speaker/desktop/image-category-page-preview.jpg",
        tablet: "product-zx7-speaker/tablet/image-category-page-preview.jpg",
        mobile: "product-zx7-speaker/mobile/image-category-page-preview.jpg",
      },
      link: "/speakers/zx7",
      isNew: false,
    },
  ];

  return (
    <>
      <SpeakersStyled>
        <Navbar />
        <Heading>
          <h1>Speakers</h1>
        </Heading>
      </SpeakersStyled>
      <div>
        {speakers.map((product, index) => (
          <HeadphonesProduct
            order={(index + 1) % 2 == 0 ? false : true}
            key={product.id}
            {...product}
          />
        ))}
      </div>
      <Menu />
      <About />
      <Footer />
    </>
  );
};

export default Speakers;
