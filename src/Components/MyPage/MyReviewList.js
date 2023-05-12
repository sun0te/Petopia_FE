import react from "react";

import { useState } from "react";
import MyInquiryUpdate from "./MyInquiryUpdate";
import axios from "axios";
import Header from "../Header.js";
import Footer from "../Footer.js";
import BgLeft from "../BgLeft.js";

const MyReviewList = () => {
  return (
    <>
      <BgLeft />
      <main>
        <Header />
        <section>
          <div className="userReviewList">
            <h4 className="userReviewTitle">리뷰 관리</h4>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyReviewList;
