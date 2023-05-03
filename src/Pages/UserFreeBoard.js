import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import FreeBoardList from "../Components/UserBoards/FreeBoardList";
import "../Styles/UserFreeBoard.css";

const UserFreeBoard = () => {
  return (
    <>
      <BgLeft />

      <main className="UserFreeBoardSection">
        <Header />
        <section>
          <div className="free_title">자유 게시판</div>
          <FreeBoardList />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default UserFreeBoard;
