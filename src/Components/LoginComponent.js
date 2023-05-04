import "../Styles/Login.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const email = useRef("");
  const password = useRef("");

  const clickLogin = () => {
    sessionStorage.setItem("email", email.current.value);
    const sessionEmail = sessionStorage.getItem("email");
    alert("세션값 임시 설정(email : " + sessionEmail + ")\n");
  };

  return (
    <>
      <div className="container loginComponent">
        <div className="input-form-backgroud row">
          <div className="input-form col-md-12 mx-auto signUpForm">
            <h4 className="mb-3 signUpText">로그인</h4>

            <div>
              <img
                className="socialLoginLogoLeft"
                src="img/naver.png"
                alt=""
                type="button"
              />

              <img
                className="socialLoginLogoRight"
                src="img/kakao.png"
                alt=""
                type="button"
              />
            </div>

            <br />
            <p className="p_or">- OR -</p>

            <form className="validation-form" onSubmit={clickLogin}>
              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  이메일
                </Form.Text> */}
                <label htmlFor="email"></label>
                <input
                  type="email"
                  className="form-control signUpFormInput"
                  id="email"
                  placeholder="이메일"
                  ref={email}
                  name="email"
                  required
                />
                <div className="invalid-feedback">이메일을 입력해주세요.</div>
              </div>

              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  비밀번호
                </Form.Text> */}
                <label htmlFor="password"></label>
                <input
                  type="password"
                  className="form-control signUpFormInput "
                  id="password1"
                  placeholder="비밀번호"
                  //ref={password}
                  name="password"
                  required
                />
                <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>
              <Link to="/findaccountemail" style={{ textDecoration: "none" }}>
                <p className="p_idpw">아이디/비밀번호 찾기</p>
              </Link>

              <br />

              <div className="mb-4 signUpBtnDiv">
                <button
                  className="btn btn-outline-primary btn-sm btn-block signUpBtn"
                  type="submit"
                >
                  로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
