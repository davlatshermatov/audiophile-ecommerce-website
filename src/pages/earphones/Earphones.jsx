import React from "react";
import { Heading } from "../../AppStyle";
import Navbar from "../../components/navbar/Navbar";
import HeadphonesProduct from "../../components/headphones-product/HeadphonesProduct";
import { EarphonesStyled } from "./EarphonesStyle";
import Menu from "../../components/home-menu/Menu";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";

const Earphones = () => {
  const earphones = {
    id: 1,
    name: "yx1 wireless earphones",
    desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    img: {
      desktop: "product-yx1-earphones/desktop/image-category-page-preview.jpg",
      tablet: "product-yx1-earphones/tablet/image-category-page-preview.jpg",
      mobile: "product-yx1-earphones/mobile/image-category-page-preview.jpg",
    },
    link: "/earphones/yx1",
  };

  return (
    <>
      <EarphonesStyled>
        <Navbar />
        <Heading>
          <h1>Earphones</h1>
        </Heading>
      </EarphonesStyled>
      <div>
        <HeadphonesProduct order {...earphones} />
      </div>
      <Menu />
      <About />
      <Footer />
    </>
  );
};

export default Earphones;
