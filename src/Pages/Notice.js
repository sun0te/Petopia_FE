import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "../Styles/Main.css";
import NoticeBoard from "../Components/NoticeBoard.js";
import styled from "styled-components";

const Notice = () => {
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
        <section className="wrap">
          <NoticeBoard />
        </section>
        <Footer />
      </main>
    </section>
  );
};

export default Notice;
