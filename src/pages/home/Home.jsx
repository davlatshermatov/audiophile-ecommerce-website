import React from "react";
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
      {/* <ProductPreview /> */}
    </HomeStyled>
  );
};

export default Home;
