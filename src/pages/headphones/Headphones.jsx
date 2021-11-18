import React from "react";
import { Heading } from "../../AppStyle";
import Navbar from "../../components/navbar/Navbar";
import { HeadphonesStyled } from "./HeadphonesStyle";
import HeadphonesProduct from "../../components/headphones-product/HeadphonesProduct";
import Menu from "../../components/home-menu/Menu";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";

const Headphones = () => {
  const headphones = [
    {
      id: 1,
      name: "xx99 mark || headphones",
      desc: " The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      img: {
        desktop:
          "product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
        tablet:
          "product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
        mobile:
          "product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
      },
      link: "",
    },
    {
      id: 2,
      name: "xx99 mark | headphones",
      desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      img: {
        desktop:
          "product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
        tablet:
          "product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
        mobile:
          "product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
      },
      link: "",
    },
    {
      id: 3,
      name: "xx59 headphones",
      desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      img: {
        desktop:
          "product-xx59-headphones/desktop/image-category-page-preview.jpg",
        tablet:
          "product-xx59-headphones/tablet/image-category-page-preview.jpg",
        mobile:
          "product-xx59-headphones/mobile/image-category-page-preview.jpg",
      },
      link: "",
    },
  ];

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
