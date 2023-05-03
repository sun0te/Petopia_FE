import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BoardList from "../Components/BoardList";
import "../Styles/Main.css";
import "../Styles/UserBoard.css";
import FreeBoardSelect from "../Components/UserBoards/FreeBoardSelect";
import RegionBoardSelect from "../Components/UserBoards/RegionBoardSelect";
import Button from "react-bootstrap/Button";

const UserBoard = () => {
  const toWrite = () => {
    window.location.href = "/Write";
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
    </section>
  );
};

export default UserBoard;
