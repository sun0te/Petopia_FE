import React from "react";
import StarRating from "../StarRating.js";
import StarRating1 from "../StarRating1.js";
import { FaAngleLeft } from "react-icons/fa";
import "../../Styles/ReviewList.css";

const MapReviewList = ({
  setReviewAction,
  placedata,
  reviewList,
  ratingScore,
}) => {
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
          {reviewList.length !== 0 ? (
            <b className="reviewMainRatingScore">({ratingScore})</b>
          ) : (
            <b className="reviewMainRatingScore">(0)</b>
          )}
        </div>
      </div>
      <hr style={{ height: "3px", backgroundColor: "lightgray" }} />
      <div className="test99">
        리스트
        <StarRating1 className="test8" ratingScore={ratingScore} />
      </div>
      {/* {reviewList.map((review) => (
        <div>{review.content}</div>
      ))} */}
    </>
  );
};

export default MapReviewList;
