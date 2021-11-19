import React from "react";
import { Zx7Styled, Button, Details } from "./Zx7Style";

const Zx7Speaker = () => {

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zx7Styled>
      <Details>
        <h1>zx7 speaker</h1>
        <Button to="/speakers/zx7" onClick={toTop}>see product</Button>
      </Details>
    </Zx7Styled>
  );
};

export default Zx7Speaker;
