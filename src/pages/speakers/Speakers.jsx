import React from "react";
import { Heading } from "../../AppStyle";
import Navbar from "../../components/navbar/Navbar";
import { SpeakersStyled } from "./SpeakersStyle";

const Speakers = () => {
  return (
    <SpeakersStyled>
      <Navbar />
      <Heading>
        <h1>Speakers</h1>
      </Heading>
    </SpeakersStyled>
  );
};

export default Speakers;
