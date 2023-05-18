import React, { useState, useEffect } from "react";

import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";

import { NavLink, useNavigate } from "react-router-dom";

import "../Styles/UserMypage.css";
import {
  FaUser,
  FaHeart,
  FaComment,
  FaEdit,
  FaCheck,
  FaTimes,
  FaAngleRight,
} from "react-icons/fa";

import MyInquiry from "../Components/MyPage/MyInquiry.js";
import MyInquiryAdmin from "../Components/MyPage/MyInquiryAdmin.js";
import axios from "axios";

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

  // useEffect(() => {
  //   // 네이버 로그인 SDK 초기화
  //   window.naver && window.naver.login && window.naver.login.init();
  // }, []);

  // 카카오 rest api key
  const Rest_api_key = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`;

  const handleLogoutClick = () => {
    if (sessionStorage.getItem("socialSession") === "naver") {
      // 네이버 로그아웃
      localStorage.removeItem("com.naver.nid.access_token");
      localStorage.removeItem("access_token");
    } else if (sessionStorage.getItem("socialSession") === "kakao") {
      // 카카오 로그아웃
      // window.Kakao.init(Rest_api_key);
      // window.Kakao.isInitialized();
      // window.Kakao.Auth.logout(function (response) {
      //   if (response === true) {
      //     window.Kakao.Auth.setAccessToken(undefined); // 토큰 제거
      //     sessionStorage.clear(); // 세션 제거
      //     localStorage.clear(); // 로컬스토리지 제거
      //   }
      // });
      localStorage.removeItem("access_token");
    } else if (
      sessionStorage.getItem("email") === undefined ||
      sessionStorage.getItem("email") === "" ||
      sessionStorage.getItem("email") === null
    ) {
      alert("로그인이 필요합니다.");
    } else {
      alert("로그아웃 되었습니다.");
    }
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("socialSession");
    window.location.href = `http://localhost:3000/`;
  };
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});
  const signUpCheck = () => {
    if (
      sessionStorage.getItem("email") !== undefined &&
      sessionStorage.getItem("email") !== "" &&
      sessionStorage.getItem("email") !== null
    ) {
      axios
        .post("/user/getuserinfo", {
          email: sessionStorage.getItem("email"),
        })
        .then((res) => {
          if (res.data === null || res.data === undefined || res.data === "") {
            alert("로그인이 필요합니다.");

            navigate("/");
          } else {
            setUserInfo({
              profile: res.data.profileImage,
              nickname: res.data.nickname,
            });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  const clickUserUpdate = () => {
    if (
      sessionStorage.getItem("email") === null ||
      sessionStorage.getItem("email") === "" ||
      sessionStorage.getItem("email") === undefined
    ) {
      alert("로그인이 필요합니다.");
    } else {
      navigate("/userupdate");
    }
  };

  useEffect(() => {
    signUpCheck();
  }, []);

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
                  src={
                    userInfo.profile !== null &&
                    userInfo.profile !== undefined &&
                    userInfo.profile !== ""
                      ? userInfo.profile
                      : defaultProfileImage
                  }
                  // src={imageSrc || defaultProfileImage}
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
                <div className="user-nickname">
                  {userInfo.nickname !== null &&
                  userInfo.nickname !== undefined &&
                  userInfo.nickname !== ""
                    ? userInfo.nickname
                    : "사용자 닉네임"}
                </div>
                <button
                  className="edit-nickname-button"
                  onClick={handleEditClick}
                >
                  <FaAngleRight className="edit-icon" />
                </button>
              </>
            )}
          </div>
          <div className="hr-line-container">
            <hr className="hr-line" />
          </div>
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
            <div
              className="user-section"
              onClick={() => {
                clickUserUpdate();
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="user-section-icon">
                <FaUser className="user-info-icon" />
              </div>
              <div className="user-section-title">회원정보 수정</div>
              <div className="user-section-icon2">
                <FaAngleRight className="user-info-icon2" />
              </div>
            </div>
            <NavLink to="/userWatchlist" className="active-link">
              <div className="user-section">
                <div className="user-section-icon">
                  <FaHeart className="user-info-icon" />
                </div>
                <div className="user-section-title">관심목록</div>
                <div className="user-section-icon2">
                  <FaAngleRight className="user-info-icon2" />
                </div>
              </div>
            </NavLink>
            <NavLink to="/myreview" className="active-link">
              <div className="user-section">
                <div className="user-section-icon">
                  <FaComment className="user-info-icon" />
                </div>
                <div className="user-section-title">리뷰 관리</div>
                <div className="user-section-icon2">
                  <FaAngleRight className="user-info-icon2" />
                </div>
              </div>
            </NavLink>
            <NavLink to="/usermypageinquiry" className="active-link">
              <div className="user-section">
                <div className="user-section-icon">
                  <FaEdit className="user-info-icon" />
                </div>
                <div className="user-section-title">1:1 문의</div>
                <div className="user-section-icon2">
                  <FaAngleRight className="user-info-icon2" />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="separationArea" />
          <div class="button-wrapper">
            <div class="logout-button-wrapper">
              <button class="logout-button" onClick={handleLogoutClick}>
                로그아웃
              </button>
            </div>
            <div class="admin-button-wrapper">
              <NavLink to="/adminmypage">
                <button class="admin-button">관리자 페이지</button>
              </NavLink>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default UserMypage;
