import React from "react";
import { ProductPreviewStyled } from "./ProductPreviewStyle";
import Yx1Earphone from "./yx1-earphones/Yx1Earphone";
import Zx7Speaker from "./zx7-speaker/Zx7Speaker";
import Zx9 from "./zx9-speaker/Zx9";

const ProductPreview = () => {
  return (
    <>
      <ProductPreviewStyled>
        <Zx9 />
        <Zx7Speaker />
        <Yx1Earphone/>
      </ProductPreviewStyled>
    </>
  );
};

export default ProductPreview;
