import React from "react";
import { ProductPreviewStyled } from "./ProductPreviewStyle";
import Zx9 from "./zx9-speaker/Zx9";

const ProductPreview = () => {
  return (
    <>
      <ProductPreviewStyled>
          <Zx9/>
      </ProductPreviewStyled>
    </>
  );
};

export default ProductPreview;
