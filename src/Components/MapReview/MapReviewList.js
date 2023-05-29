import React, { useEffect, useState } from "react";
import StarRating from "../StarRating.js";
import StarRating1 from "../StarRating1.js";
import { FaAngleLeft } from "react-icons/fa";
import "../../Styles/ReviewList.css";
import MapReviewSlider from "./MapReviewSlider.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const MapReviewList = ({
  setReviewAction,
  placedata,
  reviewList,
  ratingScore,
  reviewImgList,
  setReviewListState,
  getPlaceReview,
}) => {
  const [test, setTest] = useState([]);

  const reviewDelete = (reviewIds) => {
    const delete1 = [reviewIds];

    axios
      .post("/myreviewdelete", delete1)
      .then((res) => {
        getPlaceReview();
      })
      .catch((e) => {
        console.error(e);
      });
  };

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
      <Form.Select
        className="reviewListSelectBox"
        aria-label="Default select example"
        size="sm"
        onChange={(e) => {
          setReviewListState(e.target.value);
        }}
      >
        <option value="0">최신순</option>
        <option value="1">오래된순</option>
        <option value="2">별점 높은 순</option>
        <option value="3">별점 낮은 순</option>
      </Form.Select>
      {/* 반복문 */}
      {reviewList.map((review, index) => (
        <>
          <div className="reviewListMain">
            <div className="reviewListReport">
              <Button
                className="btm-sm reportBtn reviewListFont1"
                variant="outline-danger"
                style={{ padding: "4px 0px 3px 0px" }}
              >
                🚨신고
              </Button>
            </div>
            {sessionStorage.getItem("email") === review.writer.email ? (
              <div className="reviewListDelete">
                <Button
                  className="btm-sm reportBtn reviewListFont2"
                  variant="outline-secondary"
                  style={{ padding: "4px 0px 3px 0px" }}
                  onClick={() => {
                    reviewDelete(review.id);
                  }}
                >
                  삭제
                </Button>
              </div>
            ) : null}
            <div className="reviewListMainHeader">
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
                className="test13"
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
                      <div className="reviewListImg1">
                        <img
                          className="reviewListImg2"
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
