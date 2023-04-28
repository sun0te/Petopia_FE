import React, { useEffect, useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "../Styles/Main.css";
import "../Styles/MainIh.css";
import { useNavigate } from "react-router-dom";
import AccompanyingList from "../Components/AccompanyingList.js";
import Kakao from "../Map/Kakao.js";

const Home = () => {
  let navigate = useNavigate();

  const [alist, setAlist] = useState([
    { 지역: "서울", 시설명: "XX카페", 카테고리: "카페" },
    { 지역: "인천", 시설명: "XX공원", 카테고리: "공원" },
    { 지역: "강원도", 시설명: "XX음식점", 카테고리: "음식점" },
  ]);

  const test123 = () => {
    setAlist([
      ...alist,
      {
        지역: "경기",
        시설명: "XX병원",
        카테고리: "병원",
      },
    ]);
  };
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
          {/* 메인 페이지 개발 */}
          <div className="containerIh">
            <h2 align="center">메인페이지</h2>
            <div className="testmap">
              <h3 align="center">지도</h3>
              <button
                onClick={() => {
                  navigate("/map");
                }}
              >
                지도 페이지 가기
              </button>
            </div>
            <div className="testlist">
              <h5 align="center">주변 반려동물 동반 가능 장소</h5>
              {alist.map((list, index) => {
                return (
                  <div className="mainlist">
                    <AccompanyingList key={index} list={list} />
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={test123}>리스트 추가</button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </section>
  );
};

export default Home;
