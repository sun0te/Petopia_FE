import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FreeBoardList from "../Components/UserBoards/FreeBoardList";
import "../Styles/Main.css";
import "../Styles/UserFreeBoard.css";

const UserFreeBoard = () => {
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

      <main className="UserFreeBoardSection">
        <Header />
        <section>
          <div className="free_title">자유 게시판</div>
          <FreeBoardList />
        </section>
        <Footer />
      </main>
    </section>
  );
};

export default UserFreeBoard;
