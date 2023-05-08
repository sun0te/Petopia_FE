import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import "../Styles/UserRegion.css";
import RegionBoardList from "../Components/UserBoards/RegionBoardList.js";

const UserRegionBoard = () => {
  const location = useLocation();
  const title = location.state?.title || "";
  return (
    <>
      <BgLeft />

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
    </>
  );
};

export default UserRegionBoard;
