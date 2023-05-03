import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import "../Styles/UserRegion.css";

import RegionBoardList from "../Components/UserBoards/RegionBoardList.js";

const UserRegionBoard = ({ id }) => {
  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section>
          {/* 여기에 모바일 화면 
          개발하시면 됩니다*/}
         <div className="local_title">{id}지역 게시판</div>
          <RegionBoardList />
        </section>
        <Footer />
      </main>
      
    </>
  );
};

export default UserRegionBoard;
