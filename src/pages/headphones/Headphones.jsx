import React from "react";
import { Heading } from "../../AppStyle";
import Navbar from "../../components/navbar/Navbar";
import { HeadphonesStyled } from "./HeadphonesStyle";
import HeadphonesProduct from "../../components/headphones-product/HeadphonesProduct";
import Menu from "../../components/home-menu/Menu";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import headphones from "./productData";

const Headphones = () => {
  return (
    <>
      <HeadphonesStyled>
        <Navbar />
        <Heading>
          <h1>Headphones</h1>
        </Heading>
      </HeadphonesStyled>
      <div>
        {headphones.map((product, index) => (
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

export default Headphones;
