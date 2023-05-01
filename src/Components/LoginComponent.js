import "../Styles/Login.css";
import { useRef } from "react";

const LoginComponent = () => {
  const email = useRef("");
  const password = useRef("");

  const clickLogin = () => {
    sessionStorage.setItem("email", email.current.value);
    const sessionEmail = sessionStorage.getItem("email");
    alert(
      email.current.value + "\n" + password.current.value + "\n" + sessionEmail
    );
  };

  return (
    <>
      <div class="container">
        <div class="input-form-backgroud row">
          <div class="input-form col-md-12 mx-auto signUpForm">
            <h4 class="mb-3 signUpText">로그인</h4>

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

            <form class="validation-form" onSubmit={clickLogin} novalidate>
              <div class="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  이메일
                </Form.Text> */}
                <label for="email"></label>
                <input
                  type="email"
                  class="form-control signUpFormInput"
                  id="email"
                  placeholder="이메일"
                  ref={email}
                  name={email}
                  required
                />
                <div class="invalid-feedback">이메일을 입력해주세요.</div>
              </div>

              <div class="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  비밀번호
                </Form.Text> */}
                <label for="address"></label>
                <input
                  type="password"
                  className="form-control signUpFormInput "
                  id="password1"
                  placeholder="비밀번호"
                  ref={password}
                  name={password}
                  required
                />
                <div class="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>

              <p className="p_idpw">아이디/비밀번호 찾기</p>
              <br />

              <div class="mb-4 signUpBtnDiv">
                <button
                  class="btn btn-outline-primary btn-sm btn-block signUpBtn"
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
