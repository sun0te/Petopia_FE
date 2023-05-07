import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import "../Styles/UserMypage.css";
import { FaUser, FaHeart, FaComment, FaEdit } from "react-icons/fa";
//import MyInquiry from "../Components/MyPage/MyInquiry.js";
//import MyInquiryWrite from "../Components/MyPage/MyInquiryWrite.js";
//import Write123 from "../Components/MyPage/Write123.js";

const UserMypage = () => {
  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section className="user-mypage">
          <div className="user-profile">
            <div className="profile-image" />
            <p className="user-nickname">사용자 닉네임</p>
          </div>

          <hr className="hr-line" />

          <div className="user-category">
            <div className="category-item">
              내 글 <span className="category-count">3</span>
            </div>
            <div className="category-item">
              내 댓글 <span className="category-count">2</span>
            </div>
            <div className="category-item">
              내 리뷰 <span className="category-count">7</span>
            </div>
          </div>

          <div className="user-sections">
            <div className="user-section">
              <div className="user-section-icon">
                <FaUser className="user-info-icon" />
              </div>
              <div className="user-section-title">회원정보 수정</div>
            </div>
            <div className="user-section">
              <div className="user-section-icon">
                <FaHeart className="user-info-icon" />
              </div>
              <div className="user-section-title">관심목록</div>
            </div>
            <div className="user-section">
              <div className="user-section-icon">
                <FaComment className="user-info-icon" />
              </div>
              <div className="user-section-title">리뷰 관리</div>
            </div>
            <div className="user-section">
              <div className="user-section-icon">
                <FaEdit className="user-info-icon" />
              </div>
              <div className="user-section-title">1:1 문의</div>
            </div>
          </div>
        </section>
        {/* <MyInquiry /> */}
        {/* <MyInquiryWrite /> */}
        {/* <Write123 /> */}
        <Footer />
      </main>
    </>
  );
};

export default UserMypage;
