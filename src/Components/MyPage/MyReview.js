import React from "react";
import Header from "../Header.js";
import BgLeft from "../BgLeft.js";
import MyReviewList from "./MyReviewList.js";
const MyReview = () => {
  return (
    <>
      <BgLeft />
      <main>
        <Header />
        <section>
          <MyReviewList />
        </section>
      </main>
    </>
  );
};

export default MyReview;
