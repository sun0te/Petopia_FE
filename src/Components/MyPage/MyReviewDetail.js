import React from "react";
import styled from "styled-components";

const ReviewDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyReviewDetail = ({
  rating,
  compareOption,
  shopType,
  totalCost,
  reviewContent,
  reviewdata,
}) => {
  return (
    <ReviewDetailContainer>
      <p>별점: {reviewdata.rating}</p>
      <p>가격대비: {reviewdata.priceLevel}</p>
      <p>상점 종류: {reviewdata.location.category3}</p>
      <p>총 비용: {reviewdata.cost}</p>
      <p>리뷰 내용: {reviewdata.content}</p>
    </ReviewDetailContainer>
  );
};

export default MyReviewDetail;
