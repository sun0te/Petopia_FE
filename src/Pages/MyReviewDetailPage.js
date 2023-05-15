import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import RatingSection from "../Components/RatingSection";
import MyReviewDetail from "../Components/MyPage/MyReviewDetail";
import Button from "react-bootstrap/Button";

const ReviewPage = () => {
  const ratingIndex = 4;
  const compareOption = "저렴해요";
  const shopType = "카페";
  const totalCost = "15000원";
  const reviewContent =
    "이 카페는 분위기도 좋고 커피도 맛있어요. 가격도 적당해서 자주 가는 곳이에요.";

  const navigate = useNavigate();

  return (
    <>
      <BgLeft />
      <main>
        <Header />
        <section>
          <div className="myReviewDetail">
            <MyReviewDetail
              rating={ratingIndex}
              compareOption={compareOption}
              shopType={shopType}
              totalCost={totalCost}
              reviewContent={reviewContent}
            />
          </div>
          <Button
            className="btn btn-sm btn-outline-primary submit reviewWriteSubmit"
            onClick={() => {
              navigate("/myreview");
            }}
          >
            글목록
          </Button>
          <Button
            className="btn btn-sm btn-outline-primary submit reviewWriteSubmit"
            onClick={() => {
              navigate("/reviewwrite");
            }}
          >
            수정
          </Button>
          <Button className="btn btn-sm btn-outline-primary submit reviewWriteSubmit">
            삭제
          </Button>
        </section>
      </main>
    </>
  );
};

export default ReviewPage;
