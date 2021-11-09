import React from "react";
import { Heading } from "../../AppStyle";
import Navbar from "../../components/navbar/Navbar";
import { EarphonesStyled } from "./EarphonesStyle";

const Earphones = () => {
  return (
    <EarphonesStyled>
      <Navbar />
      <Heading>
        <h1>Earphones</h1>
      </Heading>
    </EarphonesStyled>
  );
};

export default Earphones;
