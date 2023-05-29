import React, { useEffect, useState } from "react";
import StarRating from "../StarRating.js";
import StarRating1 from "../StarRating1.js";
import { FaAngleLeft } from "react-icons/fa";
import "../../Styles/ReviewList.css";
import Slider from "react-slick";

const MapReviewList = ({
  setReviewAction,
  placedata,
  reviewList,
  ratingScore,
  reviewImgList,
}) => {
  const [test, setTest] = useState([]);

  const [imgtest, setImgtest] = useState("");
  const [imgtest1, setImgtest1] = useState("");

  useEffect(() => {}, [imgtest, test]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {reviewList.length !== 0 ? (
        <>
          <div className="reviewListTitle">
            <span>{placedata.facility_name}</span>
            <div
              className="reviewListBack"
              onClick={() => {
                setReviewAction(0);
              }}
            >
              <FaAngleLeft className="inquiryBack-icon" />
            </div>
            <div className="reviewListRating">
              <StarRating ratingScore={ratingScore} />
              {reviewList.length !== 0 ? (
                <b className="reviewMainRatingScore">({ratingScore})</b>
              ) : (
                <b className="reviewMainRatingScore">(0)</b>
              )}
            </div>
          </div>
          <hr style={{ height: "3px", backgroundColor: "lightgray" }} />
          <div className="test99">
            <div>
              <span className="reviewListName">
                {reviewList[3].writer.nickname.length <= 2 ? (
                  <>
                    {reviewList[3].writer.nickname.substr(
                      0,
                      reviewList[0].writer.nickname.length - 1
                    ) + "*".repeat(1)}
                  </>
                ) : (
                  <>
                    {reviewList[3].writer.nickname.substr(
                      0,
                      reviewList[0].writer.nickname.length - 2
                    ) + "*".repeat(2)}
                  </>
                )}
                &nbsp;&nbsp;&nbsp;
                {new Date(reviewList[0].updatedAt).toISOString().split("T")[0]}
              </span>
            </div>
            <div className="reviewListStar">
              <StarRating1
                className="test8"
                score={reviewList[3].rating}
                index={1}
              />
              <span className="reviewListScore">{reviewList[3].rating}.0</span>
            </div>
            <div className="reviewListContentBox">
              <div className="reviewListImgBox">
                {imgtest !== "" ? (
                  test.length === 1 ? (
                    <img
                      className="reviewListImg"
                      src={process.env.PUBLIC_URL + "/uploadimgs/" + imgtest}
                      alt="이미지"
                    />
                  ) : (
                    <>
                      <Slider arrows={false} beforeChange={handleSlideChange}>
                        <div>
                          <img
                            className="reviewListImg2"
                            src={
                              process.env.PUBLIC_URL + "/uploadimgs/" + imgtest
                            }
                            alt="이미지"
                          />
                          <div className="custom-indicator reviewImgNum">
                            {currentSlide + 1}/{totalSlides}
                          </div>
                        </div>
                        <div>
                          <img
                            className="reviewListImg2"
                            src={
                              process.env.PUBLIC_URL + "/uploadimgs/" + imgtest1
                            }
                            alt="이미지"
                          />
                          <div className="custom-indicator reviewImgNum">
                            {currentSlide + 1}/{totalSlides}
                          </div>
                        </div>
                      </Slider>
                    </>
                  )
                ) : null}
              </div>
              <span className="reviewListContent">{reviewList[3].content}</span>
            </div>
          </div>
          <button
            onClick={() => {
              console.log(
                "값",
                // reviewList
                reviewImgList
              );
              setTest(
                reviewImgList.filter(
                  (item) => item.review.id === reviewList[26].id
                )
              );
              if (test.length === 1) {
                console.log(test[0].imageUrl);
                setImgtest(test[0].imageUrl);
              } else if (test.length === 2) {
                setImgtest(test[0].imageUrl);
                setImgtest1(test[1].imageUrl);
              } else {
                setImgtest("");
              }
              console.log("이미지값", imgtest);
              console.log("테스트값", test);
            }}
          >
            버튼
          </button>

          {/* {reviewList.map((review, index) => (
        <>
          <div>{review.content}</div>
          <StarRating1
            className="test8"
            score={review.rating}
            index={index}
          />
        </>
      ))} */}
        </>
      ) : (
        <>
          <div className="reviewListTitle">
            <span>{placedata.facility_name}</span>
            <div
              className="reviewListBack"
              onClick={() => {
                setReviewAction(0);
              }}
            >
              <FaAngleLeft className="inquiryBack-icon" />
            </div>
            <div className="reviewListRating">
              <StarRating ratingScore={ratingScore} />
              {reviewList.length !== 0 ? (
                <b className="reviewMainRatingScore">({ratingScore})</b>
              ) : (
                <b className="reviewMainRatingScore">(0)</b>
              )}
            </div>
          </div>
          <hr style={{ height: "3px", backgroundColor: "lightgray" }} />
        </>
      )}
    </>
  );
};

export default MapReviewList;
