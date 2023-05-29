import React, { useEffect, useState } from "react";
import StarRating from "../StarRating.js";
import StarRating1 from "../StarRating1.js";
import { FaAngleLeft } from "react-icons/fa";
import "../../Styles/ReviewList.css";
import MapReviewSlider from "./MapReviewSlider.js";

const MapReviewList = ({
  setReviewAction,
  placedata,
  reviewList,
  ratingScore,
  reviewImgList,
}) => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    setTest(
      reviewImgList.filter((item) => item.review.id === reviewList[0].id)
    );
  }, []);

  return (
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
          <b className="reviewMainRatingScore">({ratingScore})</b>
        </div>
      </div>
      <hr style={{ height: "3px", backgroundColor: "lightgray" }} />

      {/* 반복문 */}
      {reviewList.map((review, index) => (
        <>
          <div className="test99">
            <div className="test100">
              <span className="reviewListName">
                {review.writer.nickname.length <= 2 ? (
                  <>
                    {review.writer.nickname.substr(
                      0,
                      review.writer.nickname.length - 1
                    ) + "*".repeat(1)}
                  </>
                ) : (
                  <>
                    {review.writer.nickname.substr(
                      0,
                      review.writer.nickname.length - 2
                    ) + "*".repeat(2)}
                  </>
                )}
                &nbsp;&nbsp;&nbsp;
                {new Date(review.updatedAt).toISOString().split("T")[0]}
              </span>
            </div>
            <div className="reviewListStar">
              <StarRating1
                className="test8"
                score={review.rating}
                index={index}
              />
              <span className="reviewListScore">{review.rating}.0</span>
            </div>
            {review.location.category3 === "동물병원" ? (
              <div className="reviewListCost">
                <div className="reviewListCost2">
                  <span className="reviewListMedical">
                    진료비
                    <br />
                    {review.medicalCost
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </span>
                </div>
                <div className="reviewListCost2">
                  <span className="reviewListMedical">
                    수술비
                    <br />
                    {review.surgeryCost
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </span>
                </div>
                <div className="reviewListCost2">
                  <span className="reviewListMedical">
                    총 비용
                    <br />
                    {review.cost
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </span>
                </div>
              </div>
            ) : (
              <div className="reviewListCost3">
                <span className="reviewListMedical">
                  총 비용 :&nbsp;
                  {review.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </span>
              </div>
            )}
            <div>
              <div className="reviewListImgBox">
                {reviewImgList.filter((item) => item.review.id === review.id)
                  .length !== 0 ? (
                  reviewImgList.filter((item) => item.review.id === review.id)
                    .length === 1 ? (
                    <>
                      <div className="test14">
                        <img
                          className="test15"
                          src={
                            process.env.PUBLIC_URL +
                            "/uploadimgs/" +
                            reviewImgList.filter(
                              (item) => item.review.id === review.id
                            )[0].imageUrl
                          }
                          alt="이미지"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <MapReviewSlider
                        test={test}
                        setTest={setTest}
                        review={review}
                        reviewImgList={reviewImgList}
                      />
                    </>
                  )
                ) : null}
              </div>
              <div className="reviewListContentBox">
                <span className="reviewListContent">{review.content}</span>
              </div>
            </div>
          </div>
          <hr style={{ height: "3px", backgroundColor: "lightgray" }} />
        </>
      ))}
    </>
  );
};

export default MapReviewList;
