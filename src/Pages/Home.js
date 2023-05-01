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
    autoplay: true,
    autoplaySpeed: 4000, // 4초 간격
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

          {/*지도 코드 들어갈 위치 */}

          {/* 여행지 추천 div */}
          <div className="recommendation">
            <p>경로 추천</p>
            <div className="column">
              <div className="image-wrapper">
                <img src="https://placehold.it/120x120" alt="image" />
              </div>
            </div>
            <div className="column">
              <div className="stars-wrapper">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
          </div>

          {/* 커뮤니티 게시글 div */}
          <div className="recommendation">
            <p>인기 게시글</p>
            <div className="column">
              <div className="image-wrapper">
                <img src="https://placehold.it/120x120" alt="image" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
