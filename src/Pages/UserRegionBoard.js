import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "../Styles/Main.css";
import "../Styles/UserRegion.css";
import RegionBoardList from "../Components/UserBoards/RegionBoardList.js";

const UserRegionBoard = () => {
  const location = useLocation();
  const title = location.state?.title || "";
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

      <main className="UserBoardSection">
        <Header />
        <section>
          <div className="wrapper">
            <div className="local_title">{title}지역 게시판</div>
            <RegionBoardList />
          </div>
        </section>
        <Footer />
      </main>
    </section>
  );
};

export default UserRegionBoard;
