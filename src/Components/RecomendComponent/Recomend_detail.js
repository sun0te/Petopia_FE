import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { BsHandThumbsUp, BsHeart, BsPerson } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReportModal from "../../Modal/ReportModal";
import "../../Styles/RecomendStyle.css";

const Recomend_detail = () => {
  const location = useLocation();
  const boardid = location.state.boardid;

  const thumbIsClicked = document.getElementById("thumb");
  const heartIsClicked = document.getElementById("heart");
  const thumbsClick = () => {
    if (
      sessionStorage.getItem("email") !== null &&
      sessionStorage.getItem("email") !== "" &&
      sessionStorage.getItem("email") !== undefined
    ) {
      axios
        .post("/recommend/confirm", {
          post: { id: boardid },
          user: { email: sessionStorage.getItem("email") },
        })
        .then((res) => {
          if (res.data === false) {
            axios
              .post("/recommend/upper", {
                post: { id: boardid },
                user: { email: sessionStorage.getItem("email") },
              })
              .then((res) => {
                setBoardData((tempData) => ({
                  ...tempData,
                  recommends: tempData.recommends + 1,
                }));
                thumbIsClicked.classList.add("clickedIconColor");
              });
          } else if (res.data === true) {
            axios
              .post("/recommend/lower", {
                post: { id: boardid },
                user: { email: sessionStorage.getItem("email") },
              })
              .then((res) => {
                setBoardData((tempData) => ({
                  ...tempData,
                  recommends: tempData.recommends - 1,
                }));
                thumbIsClicked.classList.remove("clickedIconColor");
              });
          } else {
            alert("error");
          }
        })
        .catch((err) => {});
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  const heartClick = () => {
    if (
      sessionStorage.getItem("email") !== null &&
      sessionStorage.getItem("email") !== "" &&
      sessionStorage.getItem("email") !== undefined
    ) {
      axios
        .post("/interest/confirmlike", {
          post: { id: boardid },
          user: { email: sessionStorage.getItem("email") },
        })
        .then((res) => {
          if (res.data === false) {
            axios
              .post("/interest/upperlike", {
                post: { id: boardid },
                user: { email: sessionStorage.getItem("email") },
              })
              .then((res) => {
                setBoardData((tempData) => ({
                  ...tempData,
                  likes: tempData.likes + 1,
                }));
                heartIsClicked.classList.add("clickedIconColorRed");
              });
          } else if (res.data === true) {
            axios
              .post("/interest/lowerlike", {
                post: { id: boardid },
                user: { email: sessionStorage.getItem("email") },
              })
              .then((res) => {
                setBoardData((tempData) => ({
                  ...tempData,
                  likes: tempData.likes - 1,
                }));
                heartIsClicked.classList.remove("clickedIconColorRed");
              });
          } else {
            alert("error");
          }
        })
        .catch((err) => {});
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [boardData, setBoardData] = useState(null);
  const [boardImgs, setBoardImgs] = useState([]);
  const [travelData, setTravelData] = useState(null);

  const [placeCategory, setPlaceCategory] = useState("");
  const [petProvisionsData, setPetProvisionsData] = useState([]);

  const getImgInfo = () => {
    axios
      .post("/board/detailimg", {
        post: { id: boardid },
      })
      .then((res) => {
        setBoardImgs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBoardInfo = () => {
    axios
      .post("/board/detail", {
        id: boardid,
        category: "TRAVEL",
      })
      .then((res) => {
        getTravelInfo(res.data.id);
        setBoardData({
          title: res.data.title,
          email: res.data.author.email,
          aurthorprofile: res.data.author.profileImage,
          authornickname: res.data.author.nickname,
          createdat: res.data.createdAt,
          content: res.data.content,
          recommends: res.data.recommends,
          likes: res.data.likes,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .then(getImgInfo());
  };

  const getTravelInfo = (boardid) => {
    axios
      .post("/travel/getinfo", { post: { id: boardid } })
      .then((res) => {
        setPlaceCategory(res.data.category);
        setPetProvisionsData(res.data.petProvisions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const thumbIsClicked = document.getElementById("thumb");
    const heartIsClicked = document.getElementById("heart");
    const checkBoardRecommend = () => {
      if (
        sessionStorage.getItem("email") !== null ||
        sessionStorage.getItem("email") !== "" ||
        sessionStorage.getItem("email") !== undefined
      ) {
        axios
          .post("/recommend/confirm", {
            post: { id: boardid },
            user: { email: sessionStorage.getItem("email") },
          })
          .then((res) => {
            if (res.data === true) {
              if (thumbIsClicked !== null) {
                thumbIsClicked.classList.add("clickedIconColor");
              }
            }
          });
      }
    };

    const checkBoardLike = () => {
      if (
        sessionStorage.getItem("email") !== null ||
        sessionStorage.getItem("email") !== "" ||
        sessionStorage.getItem("email") !== undefined
      ) {
        axios
          .post("/interest/confirmlike", {
            post: { id: boardid },
            user: { email: sessionStorage.getItem("email") },
          })
          .then((res) => {
            if (res.data === true) {
              if (heartIsClicked !== null) {
                heartIsClicked.classList.add("clickedIconColorRed");
              }
            }
          });
      }
    };

    getBoardInfo();
    checkBoardRecommend();
    checkBoardLike();
  }, []);

  const imagePath = "/uploadimgs/";

  const navigate = useNavigate();
  // 게시글 삭제
  const deleteBoard = () => {
    const deleteConfirm = window.confirm("게시글을 삭제하시겠습니까?");
    if (deleteConfirm) {
      axios.post("/board/delete", { id: boardid }).then((res) => {
        navigate("/routetrip");
      });
    }
  };

  return (
    <>
      <ReportModal
        open={modalOpen}
        close={closeModal}
        header="게시글 신고"
        id={boardid}
      >
        <p>신고 사유를 선택해 주세요</p>
      </ReportModal>
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
            <Button className="searchBtn btn-sm" variant="outline-primary">
              검색
            </Button>
          </Form>
        </div>

        <h4 className="h4_Recomend recommendDetailTitle">
          {boardData && boardData.title !== undefined ? boardData.title : null}
        </h4>
        <div className="detailReportBtnDiv">
          {sessionStorage.getItem("email") === "admin@admin.com" ||
          boardData?.email === sessionStorage.getItem("email") ? (
            <Button
              className="btm-sm reportBtn"
              variant="outline-secondary"
              style={{ padding: "4px 0px 3px 0px", marginRight: "10px" }}
              onClick={() => {
                deleteBoard();
              }}
            >
              삭제
            </Button>
          ) : null}
          <Button
            className="btm-sm reportBtn"
            variant="outline-danger"
            style={{ padding: "4px 0px 3px 0px" }}
            onClick={openModal}
          >
            🚨신고
          </Button>
        </div>
        <hr className="hr_Recomend" />

        <p className="p_recomend detailWriterP">
          {boardData !== null &&
          boardData.aurthorprofile !== null &&
          boardData.aurthorprofile !== undefined &&
          boardData.aurthorprofile !== "" ? (
            <img
              className="detailProfileImg"
              src={boardData.aurthorprofile}
              alt=""
            />
          ) : (
            <>
              <BsPerson className="recommendIcon detailauthoricon" />
              &nbsp;
            </>
          )}

          {boardData !== null ? (
            <span className="recommendDetailNickname">
              <>{boardData.authornickname}</>
            </span>
          ) : null}
        </p>

        <p className="p_recommendDate">
          {boardData !== null ? (
            <>{boardData.createdat.substring(0, 16).replace("T", " ")}</>
          ) : null}
        </p>

        <br />
        <br />
        <br />
        <br />

        <div className="RecomendDetailBody">
          {/* <div>
            <img
              className="RecomendDetailImg"
              src="img/recommend_detail1.png"
              alt=""
            />
          </div> */}

          <div>
            {boardImgs !== null ? (
              <>
                {boardImgs.map((img) => {
                  return (
                    <>
                      <img
                        className="RecomendDetailImg"
                        src={imagePath + img.imageUrl}
                        alt="fasd"
                      />
                    </>
                  );
                })}
              </>
            ) : null}
          </div>

          <div>
            <p className="RecomendDetailP">
              {boardData !== null ? <>{boardData.content}</> : null}
            </p>
          </div>
          <br />

          <Card className="cardRecomendDetail">
            <Card.Body className="cardRecomendDetailBody jangso">
              ✅ 장소 정보
            </Card.Body>
            <Card.Body className="cardRecomendDetailBody">
              📌 어떤 종류의 장소인가요? <br /> <br />
              {placeCategory === "RESTAURANT" ? (
                <span>- 음식점</span>
              ) : placeCategory === "PARK" ? (
                <span>- 공원</span>
              ) : placeCategory === "CAFE" ? (
                <span>- 카페</span>
              ) : placeCategory === "ACCOMMODATION" ? (
                <span>- 숙소</span>
              ) : null}
            </Card.Body>
            <Card.Body className="cardRecomendDetailBody">
              📌 반려견 동반 시 유의사항 <br /> <br />
              {petProvisionsData.includes("PET_SNACK") && (
                <span>
                  - 펫 간식 제공 <br />
                </span>
              )}
              {petProvisionsData.includes("PET_SUPPLIES_PROVIDED") && (
                <span>
                  - 펫방석 혹은 담요 제공 <br />
                </span>
              )}
              {petProvisionsData.includes("PET_MANNER_BELT") && (
                <span>
                  - 마킹이 심한 반려견은 매너벨트 착용 <br />
                </span>
              )}
              {petProvisionsData.includes("NO_LARGE_DOG_ALLOWED") && (
                <span>
                  - 15 kg 이상 대형견은 업체 문의 <br />
                </span>
              )}
              - 심한 짖음, 공격성 있는 반려견 동반 불가
            </Card.Body>

            <Card.Body className="cardRecomendDetailBodyAlert">
              💡기본적인 펫티켓을 꼭 지켜주세요💡
            </Card.Body>
          </Card>

          <div className="thumbsHeart">
            <br />
            <div className="thumbs">
              {/* <p className="thumbsHeartText">추천해요</p> */}
              <button type="button" className="thumbsHeartIconBtn">
                <BsHandThumbsUp
                  id="thumb"
                  className="thumbsHeartIcon thumbsIconHover"
                  onClick={thumbsClick}
                />
              </button>
              <span className="thumbsHeartSpan">
                {boardData !== null ? boardData.recommends : null}
              </span>
            </div>

            <br />

            <div className="heart">
              {/* <p className="thumbsHeartText">저장할래요</p> */}
              <button type="button" className="thumbsHeartIconBtn">
                <BsHeart
                  id="heart"
                  className="thumbsHeartIcon heartIconHover"
                  onClick={heartClick}
                />
              </button>
              <span className="thumbsHeartSpan">
                {boardData !== null ? boardData.likes : null}
              </span>
            </div>
          </div>

          <div className="Div_boardListBtn">
            <Link to="/routetrip">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary boardListBtn"
              >
                글목록
              </button>
            </Link>
          </div>

          {boardData?.email === sessionStorage.getItem("email") ? (
            <div className="recommendUpdateBtnDiv">
              <Link
                to={`/recommendupdate?id=${boardid}`}
                state={{ boardid: boardid }}
              >
                <button
                  type="button"
                  visibility="hidden"
                  className="btn btn-primary btn-sm recommendUpdateBtn"
                >
                  글 수정
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Recomend_detail;
