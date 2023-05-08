import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import UserRegion from "../Pages/UserRegion";
import { Route, Routes } from "react-router-dom";
import BgLeft from "../Components/BgLeft.js";
import BoardList from "../Components/BoardList";
import "../Styles/UserBoard.css";
import FreeBoardSelect from "../Components/UserBoards/FreeBoardSelect";
import RegionBoardSelect from "../Components/UserBoards/RegionBoardSelect";
import Button from "react-bootstrap/Button";

const UserBoard = () => {
  const toWrite = () => {
    window.location.href = "/Write";
  };
  return (
    <>
      <BgLeft />

      <main className="UserBoardSection">
        <Header />
        <section>
          <div className="wrapper">
            <div className="selectBoxes">
              <FreeBoardSelect />
              <RegionBoardSelect />
            </div>
            <div className="totalBoard">
              <br />
              <hr />
              <div className="totalBoardTitle">전체 글 보기</div>
              <br />
              <BoardList />
              <div class="div_boardwrite_btn">
                <Button
                  type="button"
                  class="btn btn-primary boardwrite_btn"
                  onClick={toWrite}
                >
                  글쓰기
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default UserBoard;
