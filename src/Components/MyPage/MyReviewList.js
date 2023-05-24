import styled from "styled-components";
import React, { useState, useEffect, Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LoginComponent from "../LoginComponent";
import { FaAngleLeft } from "react-icons/fa";
import MyReviewDetailPage from "../../Pages/MyReviewDetailPage";
import ReviewWriteComponent from "../ReviewWriteComponent";

const ReviewContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: -15px;
  padding: 14px;
`;

const ReviewListHeader = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-left: 25%;
  margin-bottom: 20px;
`;

const ReviewListWrap = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ReviewTableHeader = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 2px solid #333;
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

const ReviewTableContent = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  cursor: pointer;
`;

const ReviewContent = styled.td`
  word-break: break-all;
`;

const ReviewDate = styled.td`
  margin-right: -10px;
`;

const ReviewCheckbox = styled.input`
  margin-right: 16px;
`;

const ReviewButtonsWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const ReviewList = ({ setMyPageAction }) => {
  const [checkedReviews, setCheckedReviews] = useState([]);
  const navigate = useNavigate();

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      const allReviewsIds = reviews.map((review) => review.id);
      setCheckedReviews(allReviewsIds);
    } else {
      setCheckedReviews([]);
    }
  };

  const handleCheck = (review) => {
    if (checkedReviews.includes(review.id)) {
      setCheckedReviews(checkedReviews.filter((r) => r !== review.id));
    } else {
      setCheckedReviews([...checkedReviews, review.id]);
    }
  };

  const handleDelete = (reviewIds) => {
    const remainingReviews = reviews.filter(
      (review) => !reviewIds.includes(review.id)
    );
    setCheckedReviews([]);
    setReviews(remainingReviews);
  };

  const [reviews, setReviews] = useState([
    {
      id: 1,
      date: "2022.05.01",
      content: "이 가게 추천합니다",
    },
    {
      id: 2,
      date: "2022.04.28",
      content: "이 가게 추천합니다",
    },
    {
      id: 3,
      date: "2022.04.25",
      content: "이 가게 추천합니다",
    },
  ]);

  const [myPageReviewAction, setMyPageReviewAction] = useState(0); // 마이 리뷰 액션
  // [액션 0 : 리뷰 리스트] [액션 1 : 리뷰 상세] , [액션 2 : 리뷰 수정]

  return (
    <>
      {myPageReviewAction === 0 ? (
        <>
          <div className="inquiryHeader">
            <div
              className="inquiryBack-left"
              onClick={() => {
                setMyPageAction(0);
              }}
            >
              <FaAngleLeft className="inquiryBack-icon" />
            </div>
            <h4>내 리뷰 관리</h4>
          </div>
          <ReviewContainer>
            {/* <ReviewListHeader>내 리뷰 관리</ReviewListHeader> */}
            <ReviewListWrap>
              <ReviewTableHeader>
                <ReviewCheckbox
                  type="checkbox"
                  onChange={handleCheckAll}
                  checked={checkedReviews.length === reviews.length}
                />
                <div className="myreviewcontentbox">내용</div>
                <div className="myreviewdatebox">날짜</div>
              </ReviewTableHeader>
              {reviews.map((review) => (
                <ReviewTableContent key={review.id}>
                  <ReviewCheckbox
                    type="checkbox"
                    checked={checkedReviews.includes(review.id)}
                    onChange={() => handleCheck(review)}
                  />
                  <ReviewContent
                    onClick={() => {
                      // navigate("/myreviewdetail");
                      setMyPageReviewAction(1); // [액션 1 : 리뷰 상세]
                    }}
                  >
                    {review.content}
                  </ReviewContent>
                  <ReviewDate>{review.date}</ReviewDate>
                </ReviewTableContent>
              ))}
            </ReviewListWrap>
            <ReviewButtonsWrap>
              <Button
                className="mt-2 float-right"
                variant="primary"
                size="sm"
                onClick={() => handleDelete(checkedReviews)}
              >
                삭제
              </Button>
              {/* 수정 - 한번에 하나씩만 할 수 있게 해야 하지 않나? 논의 필요 */}
              {/* <Link to="/">
          <Button
            className="mt-2 border-primary"
            variant="btn-outline-primary"
            size="sm"
            onClick={() => {
              navigate("/reviewwrite");
            }}
          >
            수정
          </Button>
        </Link> */}
            </ReviewButtonsWrap>
          </ReviewContainer>
        </>
      ) : myPageReviewAction === 1 ? ( // [액션 1 : 리뷰 상세]
        <>
          <div className="inquiryHeader">
            <div
              className="inquiryBack-left"
              onClick={() => {
                setMyPageReviewAction(0);
              }}
            >
              <FaAngleLeft className="inquiryBack-icon" />
            </div>
            <h4>내 리뷰 관리</h4>
          </div>
          <MyReviewDetailPage setMyPageReviewAction={setMyPageReviewAction} />
        </>
      ) : (
        // [액션 2 : 리뷰 수정]
        <>
          <div className="inquiryHeader">
            <div
              className="inquiryBack-left"
              onClick={() => {
                setMyPageReviewAction(0);
              }}
            >
              <FaAngleLeft className="inquiryBack-icon" />
            </div>
            <h4>리뷰 수정</h4>
          </div>
          <ReviewWriteComponent setMyPageReviewAction={setMyPageReviewAction} />
        </>
      )}
    </>
  );
};

export default ReviewList;
