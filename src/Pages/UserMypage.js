import React, { useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import { NavLink } from "react-router-dom";
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
import MyInquiry from "../Components/MyPage/MyInquiry.js";
import MyInquiryAdmin from "../Components/MyPage/MyInquiryAdmin.js";

const UserMypage = () => {
  const [nickname, setNickname] = useState("사용자 닉네임");
  const [editingNickname, setEditingNickname] = useState(false);
  const [tempNickname, setTempNickname] = useState("");
  const [imageSrc, setImageSrc] = useState(null); // 이미지 미리보기 URL
  const defaultProfileImage = "/img/Default_profile.png"; // 기본 이미지 파일명
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section className="user-mypage">
          <div className="user-profile">
            <div className="profile-image">
              <label htmlFor="profile-image-upload">
                <img
                  src={imageSrc || defaultProfileImage}
                  alt="프로필 이미지"
                  className="profile-image-preview"
                />
              </label>
              <input
                type="file"
                id="profile-image-upload"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
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
          <div className="separationArea" />
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
          <div className="separationArea" />
          <div class="button-wrapper">
            <div class="logout-button-wrapper">
              <button class="logout-button">로그아웃</button>
            </div>
            <div class="admin-button-wrapper">
              <button class="admin-button">관리자 페이지</button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default UserMypage;
