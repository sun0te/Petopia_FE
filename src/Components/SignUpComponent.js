import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import "../Styles/Login.css";
import { useRef, useState } from "react";

const SignUpComponent = () => {
  const name = useRef("");
  const nickname = useRef("");
  const email = useRef("");
  const birthdate = useRef("");
  const password1 = useRef("");
  const password2 = useRef("");

  // let pwtest = document.getElementById("submitForm");
  // pwtest.addEventListener("submit", (event) => {
  //   if (password1.current.value !== password2.current.value) {
  //     alert("비밀번호가 일치하지 않습니다.");
  //     event.preventDefault();
  //   }
  // });

  const checkPassword = (event) => {
    event.preventDefault();
    if (password1.current.value !== password2.current.value) {
      event.preventDefault();
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("비밀번호가 일치합니다.");
    }
    console.log(
      name.current.value +
        "\n" +
        nickname.current.value +
        "\n" +
        email.current.value +
        "\n" +
        birthdate.current.value +
        "\n" +
        password1.current.value
    );
  };

  return (
    <>
      <div class="container">
        <div class="input-form-backgroud row">
          <div class="input-form col-md-12 mx-auto signUpForm">
            <h4 class="mb-3 signUpText">회원가입</h4>

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

            <form
              class="validation-form"
              id="submitForm"
              onSubmit={() => checkPassword()}
              novalidate
            >
              <div class="signUpRow">
                <div class="col-md-6 mb-3 signUpName">
                  {/* <Form.Text muted className="formText">
                    성명
                  </Form.Text> */}
                  <label for="name"></label>
                  <input
                    type="text"
                    class="form-control signUpFormInput"
                    id="name"
                    name="name"
                    ref={name}
                    placeholder="이름"
                    required
                  />
                  <div class="invalid-feedback">이름을 입력해주세요.</div>
                </div>
                <div class="col-md-5 mb-3 signUpNickname">
                  {/* <Form.Text muted className="formText">
                    닉네임
                  </Form.Text> */}
                  <label for="nickname"></label>
                  <input
                    type="text"
                    class="form-control signUpFormInput"
                    id="nickname"
                    name="nickname"
                    ref={nickname}
                    placeholder="닉네임"
                    required
                  />
                  <div class="invalid-feedback">닉네임을 입력해주세요.</div>
                </div>
              </div>

              <div class="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  이메일
                </Form.Text> */}
                <label for="email"></label>
                <input
                  type="email"
                  class="form-control signUpFormInput"
                  id="email"
                  name="email"
                  placeholder="이메일"
                  ref={email}
                  required
                />
                <div class="invalid-feedback">이메일을 입력해주세요.</div>
              </div>

              <div class="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  생년월일
                </Form.Text> */}
                <label for="address"></label>
                <input
                  type="date"
                  className="form-control signUpFormInput signUpFormInputDate"
                  id="address"
                  name="email"
                  placeholder="서울특별시 강남구"
                  data-placeholder="생년월일"
                  ref={birthdate}
                  required
                />
                <div class="invalid-feedback">생년월일을 입력해주세요.</div>
              </div>

              <div class="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  비밀번호
                </Form.Text> */}
                <label for="address"></label>
                <input
                  type="password"
                  class="form-control signUpFormInput"
                  id="password1"
                  name="password1"
                  placeholder="비밀번호"
                  ref={password1}
                  required
                />
                <div class="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>

              <div class="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  비밀번호 확인
                </Form.Text> */}
                <label for="address"></label>
                <input
                  type="password"
                  class="form-control signUpFormInput"
                  id="password2"
                  placeholder="비밀번호 확인"
                  name="password2"
                  ref={password2}
                  required
                />
                <div class="invalid-feedback">
                  비밀번호를 다시 한 번 입력해주세요.
                </div>
              </div>
              {/* <hr class="mb-4" /> */}
              {/* <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="aggrement"
                  required
                />
                <label class="custom-control-label" for="aggrement">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
              </div> */}
              <br />
              <div class="mb-4 signUpBtnDiv">
                <button
                  class="btn btn-primary btn-sm btn-block signUpBtn"
                  type="button"
                  onClick={checkPassword}
                >
                  가입 완료
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
