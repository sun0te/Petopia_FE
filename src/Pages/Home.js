import React from "react";
import Slider from "react-slick";
import "../Styles/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";

const slides = [
  {
    id: 1,
    image: "https://placehold.it/360x240",
    caption: "First slide",
  },
  {
    id: 2,
    image: "https://placehold.it/360x240",
    caption: "Second slide",
  },
  {
    id: 3,
    image: "https://placehold.it/360x240",
    caption: "Third slide",
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <BgLeft />
      <main>
        <Header />
        <section>
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id}>
                <img src={slide.image} alt={slide.caption} />
                <div className="caption">{slide.caption}</div>
              </div>
            ))}
          </Slider>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
