import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "../Styles/Main.css";

const RouteTrip = () => {
  return (
    <section className="full-bg">
      <section className="left-bg">
        {/*배경 요소 디자인 */}
        <div className="logo">
          <img src="../../img/logo.png" alt="Petoia logo" />
        </div>
        <div className="main-left">
          <h1>
            반려 동물과
            <br />
            함께하는
            <br />
            일상 여행
          </h1>
          <img src="../../img/dog_main.png" alt="dog" />
        </div>
      </section>

      <main>
        <Header />
        <section>
          {/* 여기에 모바일 화면 
          개발하시면 됩니다*/}
          <p>여행 추천 페이지입니다</p>
        </section>
        <Footer />
      </main>
    </section>
  );
};

export default RouteTrip;
