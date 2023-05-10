import React from "react";
import Header from "../../Components/Header.js";
import Footer from "../../Components/Footer.js";
import BgLeft from "../../Components/BgLeft.js";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../Styles/RecomendStyle.css";

const FreeBoardDetail = () => {
  return (
    <>
      <BgLeft />
      <main className="RouteTripSection">
        <Header />
        <section>
          <div className="RecomendBody">
            <div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-1 w-75 searchBar"
                  aria-label="Search"
                />
                <Button
                  className="searchBtn"
                  variant="outline-primary"
                  size="sm"
                >
                  Search
                </Button>
              </Form>
            </div>

            <h4 className="h4_Recomend">게시글 제목</h4>
            <hr className="hr_Recomend" />

            <p className="p_recomend">작성자 : petopia</p>
            <br />
            <br />

            <div className="RecomendDetailBody">
              <div>
                <img
                  className="RecomendDetailImg"
                  src="img/recommend_detail1.png"
                  alt=""
                />
              </div>

              <div>
                <p className="RecomendDetailP">
                  [송도IBD 매거진 블로그]에서는, 송도IBD '블로그피플'이라는
                  코너를 연재하고 있습니다. <br />
                  일상생활과 문화, 예술 등 송도IBD의 생생한 모습들이 담겨있는
                  블로그를 하나하나 찾아 소개해드리는 코너지요! <br />
                  이번에는 '로니&베베 개판 Story'라는 독특한 이름을 가진
                  블로그를 만나봤습니다. <br />
                  <br />
                  블로그를 운영하고 계신 로니PaPa님은 비글 로니와 닥스훈트
                  베베라는 반려견을 키우고 있습니다.
                  <br /> 이 활발한 강아지들을 산책시킬 때는 송도국제도시에 있는
                  센트럴파크가 딱이라고 하는데요.
                  <br />
                  <br /> 이유가 뭘까요? 그 현장에서 확인해보시죠!
                </p>
              </div>
              <br />

              <div>
                <img
                  className="RecomendDetailImg"
                  src="img/recommend_detail2.png"
                  //   src="https://placeholder.com/300x200"
                  alt=""
                />
              </div>

              <div>
                <p className="RecomendDetailP">
                  센트럴파크에서의 행복한 한 때를 보낸 로니, 베베 그리고 파파.{" "}
                  <br />
                  마치 화보 같은 센트럴파크의 사진들을 보니 정말 푸른 풀밭이
                  있는 공원에서 여유로운 한 때를 보내고 싶은 기분이 들지
                  않으세요? <br />
                  오늘은 공원 산책, 어떠세요?
                </p>
              </div>

              <div className="Div_boardListBtn">
                <button
                  type="button"
                  class="btn btn-outline-primary boardListBtn"
                >
                  글목록
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default FreeBoardDetail;
