import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "../Styles/Main.css";
import "../Styles/UserRegion.css";

import RegionBoardList from "../Components/UserBoards/RegionBoardList.js";

const UserRegionBoard = ({ id }) => {
  return (
    <>
      <div className="local_title">{id}지역 게시판</div>
      <RegionBoardList />
    </>
  );
};

export default UserRegionBoard;
