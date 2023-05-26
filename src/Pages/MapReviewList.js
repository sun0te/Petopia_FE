import React from "react";
import StarRating from "../Components/StarRating.js";
import { FaAngleLeft } from "react-icons/fa";

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
      {reviewList.map((review) => (
        <div>{review.content}</div>
      ))}
    </>
  );
};

export default MapReviewList;
