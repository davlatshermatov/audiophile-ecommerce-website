import React from "react";
import { Heading } from "../../AppStyle";
import Navbar from "../../components/navbar/Navbar";
import { HeadphonesStyled } from "./HeadphonesStyle";

const Headphones = () => {
  return (
    <HeadphonesStyled>
      <Navbar />
      <Heading>
        <h1>Headphones</h1>
      </Heading>
    </HeadphonesStyled>
  );
};

export default Headphones;
