import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import "../Styles/RecomendStyle.css";
import Paginationcm from "./Paginationcm";
import RecomendBest from "./RecomendComponent/Recomend_best";
import RecommendCard from "./RecomendComponent/RecommendCard";
import { Link } from "react-router-dom";

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
`;

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
`;

const Recomend = () => {
  const [viewMode, setViewMode] = useState(0);
  const clickViewAllBtn = () => {
    if (viewMode === 0) {
      setViewMode(1);
    } else {
      setViewMode(0);
    }
  };

  const clickTravelWriteBtn = () => {
    if (sessionStorage.getItem("email") === null) {
      document.location.href = "/login";
    } else {
      document.location.href = "/routetripwrite";
    }
  };

  const [travelBestData, setTravelBestData] = useState([]);
  const [travelAllData, setTravelAllData] = useState([]);

  useEffect(() => {
    callTravelBest();
    callTravelAll();
  }, [setTravelBestData, setTravelAllData]);

  const callTravelBest = () => {
    axios
      .post("http://localhost:8080/travelboard/travelbest", {
        category: "TRAVEL",
      })
      .then((res) => {
        setTravelBestData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const callTravelAll = () => {
    axios
      .post("http://localhost:8080/travelboard/travelall", {
        category: "TRAVEL",
      })
      .then((res) => {
        setTravelAllData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const imagePath = "/uploadimgs/";
  const MAX_BESTTITLE_LENGTH = 37;
  const MAX_TITLE_LENGTH = 11;

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div className="RecomendBody">
      <h2 className="h2_Recomend">여행 추천</h2>
      <div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="검색할 내용을 입력하세요"
            className="me-1 w-75 searchBar"
            aria-label="Search"
          />
          <Button className="searchBtn" variant="outline-primary" size="sm">
            검색
          </Button>
        </Form>
      </div>

      {viewMode === 0 ? (
        <bestSection>
          <h3 className="h3_Recomend">금주의 BEST!</h3>
          <div className="viweAllBtnDiv">
            <p className="bestFoldBtn" onClick={clickViewAllBtn}>
              {viewMode === 0 ? <>Best 접기 ▲</> : <>Best 보기 ▼</>}
            </p>
          </div>
          {travelBestData.map((traveldata) => {
            return (
              <RecomendBest
                id={traveldata.id !== undefined ? traveldata.id : null}
                picture={
                  traveldata.thumbnailImage !== undefined
                    ? imagePath + traveldata.thumbnailImage
                    : null
                }
                title={
                  traveldata.title.length > MAX_BESTTITLE_LENGTH
                    ? traveldata.title.slice(0, MAX_BESTTITLE_LENGTH) + "..."
                    : traveldata.title
                }
                recommends={traveldata.recommends}
                writerimg={traveldata.author.profileImage}
                writer={traveldata.author.nickname}
                view={traveldata.views}
                like={traveldata.likes}
              />
            );
          })}
        </bestSection>
      ) : (
        <div className="recommendBestWhiteSpaceDiv">
          <div className="recommendBestWhiteSpace"></div>
          <p className="bestUnfoldBtn" onClick={clickViewAllBtn}>
            {viewMode === 0 ? <>Best 접기 ▲</> : <>Best 보기 ▼</>}
          </p>
          <hr className="hr_Recomend" style={{ color: "#537fe7" }} />
        </div>
      )}

      <h3 className="h3_totalboard">전체 글</h3>
      <div className="recomendWriteBtn">
        <Button
          className="searchBtn"
          variant="outline-primary"
          size="sm"
          onClick={clickTravelWriteBtn}
        >
          추천 글쓰기
        </Button>
      </div>
      <div className="recommendation recommendAllBoardDiv">
        <div className="recommendation-title"></div>
        {/* <Board /> */}
        <NoticeContainer>
          <BoardWrapper>
            {travelAllData
              .slice(offset, offset + limit)
              .map((travelalldata) => {
                return (
                  <StyledLink
                    to={`/recomend_best?id=${travelalldata.id}`}
                    key={travelalldata.id}
                    state={{ boardid: travelalldata.id }}
                  >
                    <RecommendCard
                      picture={
                        travelalldata.thumbnailImage !== undefined
                          ? imagePath + travelalldata.thumbnailImage
                          : null
                      }
                      title={
                        travelalldata.title.length > MAX_TITLE_LENGTH
                          ? travelalldata.title.slice(0, MAX_TITLE_LENGTH) +
                            "..."
                          : travelalldata.title
                      }
                      recommends={travelalldata.recommends}
                      writerimg={travelalldata.author.profileImage}
                      writer={travelalldata.author.nickname}
                      view={travelalldata.views}
                      like={travelalldata.likes}
                      createdat={travelalldata.createdAt}
                    />
                  </StyledLink>
                );
              })}
          </BoardWrapper>
        </NoticeContainer>

        <Paginationcm
          total={travelAllData.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
      {/* <Recomend_Viewall /> */}
    </div>
  );
};

export default Recomend;
