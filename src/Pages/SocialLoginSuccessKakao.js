import React, { useEffect, useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

const SocialLoginSuccessKakao = () => {
  const [user_id, setUserId] = useState();
  const [userEmail, setUserEmail] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setUserEmail(data.kakao_account.email);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.thumbnail_image);
      sessionStorage.setItem("socialSession", "kakao");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <BgLeft />

      <main className="RouteTripSection">
        <Header />
        <section>
          <>
            <div className="container loginComponent">
              <div className="input-form-backgroud row">
                <div className="input-form col-md-12 mx-auto signUpForm">
                  <h4 className="mb-3 signUpText">
                    <span style={{ color: "#FEE500" }}>카카오</span> 간편
                    회원가입
                  </h4>

                  <div className="socialLoginSuccessDiv">
                    <table className="socialLoginSuccessTable">
                      <tr className="socialLoginSuccessTr socialLoginSuccessTrProfile">
                        <td className="socialLoginSuccessTdTitle">프로필</td>
                        <td className="socialLoginSuccessTd socialLoginSuccessTdProfile">
                          {profileImage ? (
                            <img
                              src={profileImage}
                              alt=""
                              className="socialLoginSuccessTdProfileImg"
                            />
                          ) : null}
                        </td>
                      </tr>
                      <tr className="socialLoginSuccessTr">
                        <td className="socialLoginSuccessTdTitle">이메일</td>
                        <td className="socialLoginSuccessTd">
                          {userEmail ? <p>{userEmail}</p> : null}
                        </td>
                      </tr>
                      {/* <tr className="socialLoginSuccessTr">
                        <td className="socialLoginSuccessTdTitle">이름</td>
                        <td className="socialLoginSuccessTd">
                          {user && user.name ? <p>{user.name}</p> : null}
                        </td>
                      </tr> */}
                      <tr className="socialLoginSuccessTr">
                        <td className="socialLoginSuccessTdTitle">닉네임</td>
                        <td className="socialLoginSuccessTd">
                          {nickName ? <p>{nickName}</p> : null}
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div className="custom-control custom-checkbox signupCheckAgreeDiv socialLoginSuccessAgreeDiv">
                    <input
                      type="checkbox"
                      className="custom-control-input signupCheckAgreeBox"
                      id="aggrement"
                      required
                    />
                    <label className="custom-control-label" htmlFor="aggrement">
                      &nbsp;&nbsp;개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>

                  <br />

                  <form className="validation-form" onSubmit={() => {}}>
                    <div className="findidpwsignupDiv">
                      <Link
                        to="/findaccountemail"
                        style={{ textDecoration: "none" }}
                      >
                        <p className="p_idpw">이메일 찾기 </p>
                      </Link>
                      |
                      <Link
                        to="/findaccountpassword"
                        style={{ textDecoration: "none" }}
                      >
                        <p className="p_idpw"> 비밀번호 찾기 </p>
                      </Link>
                      |
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <p className="p_idpw"> 로그인</p>
                      </Link>
                    </div>

                    <br />

                    <div className="mb-4 signUpBtnDiv">
                      <button
                        className="btn btn-outline-primary btn-sm btn-block signUpBtn"
                        type="submit"
                      >
                        회원가입
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        </section>
        <Footer />
      </main>
    </>
  );
};
export default SocialLoginSuccessKakao;
