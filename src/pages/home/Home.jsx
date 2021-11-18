import React from "react";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import HomeBanner from "../../components/home-banner/HomeBanner";
import Menu from "../../components/home-menu/Menu";
import ProductPreview from "../../components/home-product-preview/ProductPreview";
import Navbar from "../../components/navbar/Navbar";
import { HomeStyled } from "./HomeStyle";

const Home = () => {
  return (
    <HomeStyled>
      <Navbar />
      <HomeBanner />
      <Menu />
      <ProductPreview />
      <Menu />
      <About />
      <Footer />
    </HomeStyled>
  );
};

export default Home;
