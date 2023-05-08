import React, { useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import "../Styles/UserMypage.css";
import {
  FaUser,
  FaHeart,
  FaComment,
  FaEdit,
  FaCheck,
  FaTimes,
  FaAngleRight
} from "react-icons/fa";

//import MyInquiry from "../Components/MyPage/MyInquiry.js";
//import MyInquiryWrite from "../Components/MyPage/MyInquiryWrite.js";
//import Write123 from "../Components/MyPage/Write123.js";

const UserMypage = () => {
  const [nickname, setNickname] = useState("사용자 닉네임");
  const [editingNickname, setEditingNickname] = useState(false);
  const [tempNickname, setTempNickname] = useState("");

  const handleNicknameChange = (event) => {
    setTempNickname(event.target.value);
  };

  const handleEditClick = () => {
    setTempNickname(nickname);
    setEditingNickname(true);
  };

  const handleConfirmClick = () => {
    setNickname(tempNickname);
    setEditingNickname(false);
  };

  const handleCancelClick = () => {
    setEditingNickname(false);
  };

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section className="user-mypage">
          <div className="user-profile">
            <div className="profile-image" />
            {editingNickname ? (
              <>
                <input
                  type="text"
                  value={tempNickname}
                  onChange={handleNicknameChange}
                  className="user-nickname-edit"
                />
                <div className="edit-buttons">
                  <button className="edit-check" onClick={handleConfirmClick}>
                    <FaCheck className="edit-icon" />
                  </button>
                  <button className="edit-cancle" onClick={handleCancelClick}>
                    <FaTimes className="edit-icon" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="user-nickname">{nickname}</div>
                <button
                  className="edit-nickname-button"
                  onClick={handleEditClick}
                >
                  <FaAngleRight className="edit-icon" />
                </button>
              </>
            )}
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
              <div className="user-section-icon2">
                <FaAngleRight className="user-info-icon2" />
              </div>
            </div>
            <div className="user-section">
              <div className="user-section-icon">
                <FaHeart className="user-info-icon" />
              </div>
              <div className="user-section-title">관심목록</div>
              <div className="user-section-icon2">
                <FaAngleRight className="user-info-icon2" />
              </div>
            </div>
            <div className="user-section">
              <div className="user-section-icon">
                <FaComment className="user-info-icon" />
              </div>
              <div className="user-section-title">리뷰 관리</div>
              <div className="user-section-icon2">
                <FaAngleRight className="user-info-icon2" />
              </div>
            </div>
            <div className="user-section">
              <div className="user-section-icon">
                <FaEdit className="user-info-icon" />
              </div>
              <div className="user-section-title">1:1 문의</div>
              <div className="user-section-icon2">
                <FaAngleRight className="user-info-icon2" />
              </div>
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
