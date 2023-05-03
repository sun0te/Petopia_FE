import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "../Styles/Main.css";
import "../Styles/UserRegion.css";
import BgLeft from "../Components/BgLeft.js";

const UserRegion = () => {
  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section>
          <div className="local_title">지역별 모임 게시판</div>
          <div className="wrapper1">
            <div className="content">
              <div className="locationTag">서울</div>
              <div className="content_title">서울 지역 모임 게시판 입니다.</div>
            </div>
            <div className="content">
              <div className="locationTag">경기(북)</div>
              <div className="content_title">
                경기 북부지역 모임 게시판 입니다.
              </div>
            </div>
            <div className="content">
              <div className="locationTag">경기(남)</div>
              <div className="content_title">
                경기 남부지역 모임 게시판 입니다.
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default UserRegion;
