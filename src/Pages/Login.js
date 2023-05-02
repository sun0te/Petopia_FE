import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import "../Styles/Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginEmail = window.sessionStorage.getItem("email");

  // 로그인 유효성 검사
  const loginCheck = () => {
    if (emailRef.current.value === "") {
      alert("이메일을 입력해주세요.");
    } else if (passwordRef.current.value === "") {
      alert("비밀번호를 입력해주세요.");
    } else {
      loginProcess();
    }
  };

  // 로그인
  const loginProcess = () => {
    axios
      .post("/loginProcess", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        const { data } = res;
        if (data.email === "NoEmail") {
          emailRef.current.value = "";
          emailRef.current.focus();
          alert("존재하지 않는 이메일입니다.");
        } else if (data.email === "NoPassword") {
          passwordRef.current.value = "";
          passwordRef.current.focus();
          alert("비밀번호가 올바르지 않습니다.");
        } else {
          window.sessionStorage.setItem("email", data.email);
          window.sessionStorage.setItem("nickname", data.nickname);
          navigate("/?email=" + data.email);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <BgLeft />
      <main>
        <Header />
        <section>
          <div className="loginBox">
            <div className="KaKao-loginBtn">
              {/* 카카오 연동 로그인 */}
              <button>카카오로 로그인</button>
            </div>
            <div className="Naver-loginBtn">
              {/* 네이버 연동 로그인 */}
              <button>네이버로 로그인</button>
            </div>
            <div className="inputBox">
              {/* 이메일 입력창 */}
              <input type="email" placeholder="이메일을 입력하세요" />
            </div>
            <div className="inputBox">
              {/* 비밀번호 입력창 */}
              <input type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className="loginBtn">
              {/* 로그인 */}
              <button>로그인</button>
            </div>
            <div className="registerBox">
              {/* 회원가입 가기 */}
              <p>회원이 아니신가요?</p>
              <button>회원가입 가기</button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Login;
