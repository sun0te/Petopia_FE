import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import "../Styles/Login.css";

const SignUpComponent = () => {
  return (
    <>
      <div class="container">
        <div class="input-form-backgroud row">
          <div class="input-form col-md-12 mx-auto">
            <h4 class="mb-3 signUpText">회원가입</h4>

            <div>
              <div className="bg-light border signUpWithDivLeft">
                <div className="signUpLogoDiv">
                  <img className="signUpLogo" src="img/googlelogo.png" alt="" />
                </div>
                <div className="SignUpLogoText">
                  <p className="SignUpLogoText">Sign up with</p>
                  <p className="SignUpLogoText">Google</p>
                </div>
              </div>
              <div className="bg-light border signUpWithDivRight">
                <div className="signUpLogoDiv">
                  <img className="signUpLogo" src="img/facebook.png" alt="" />
                </div>
                <div className="SignUpLogoText">
                  <p className="SignUpLogoText">Sign up with</p>
                  <p className="SignUpLogoText">Facebook</p>
                </div>
              </div>
            </div>

            <br />
            <p className="p_or">- OR -</p>

            <form class="validation-form" novalidate>
              <div class="row signUpRow">
                <div class="col-md-6 mb-3">
                  {/* <Form.Text muted className="formText">
                    성명
                  </Form.Text> */}
                  <label for="name"></label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="이름"
                    required
                  />
                  <div class="invalid-feedback">이름을 입력해주세요.</div>
                </div>
                <div class="col-md-6 mb-3">
                  {/* <Form.Text muted className="formText">
                    닉네임
                  </Form.Text> */}
                  <label for="nickname"></label>
                  <input
                    type="text"
                    class="form-control"
                    id="nickname"
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
                  class="form-control"
                  id="email"
                  placeholder="your@email.com"
                  required
                />
                <div class="invalid-feedback">이메일을 입력해주세요.</div>
              </div>

              <div class="mb-3 signUpRow">
                <Form.Text muted className="formText">
                  생년월일
                </Form.Text>
                <label for="address"></label>
                <input
                  type="date"
                  class="form-control"
                  id="address"
                  placeholder="서울특별시 강남구"
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
                  class="form-control"
                  id="password1"
                  placeholder="비밀번호"
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
                  class="form-control"
                  id="password2"
                  placeholder="비밀번호 확인"
                  required
                />
                <div class="invalid-feedback">
                  비밀번호를 다시 한 번 입력해주세요.
                </div>
              </div>

              <br />

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
              <div class="mb-4 signUpBtnDiv">
                <button
                  class="btn btn-primary btn-sm btn-block signUpBtn"
                  type="submit"
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
