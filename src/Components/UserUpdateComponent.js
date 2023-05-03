import "../Styles/Login.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserUpdateComponent = () => {
  const name = useRef("");
  const nickname = useRef("");
  const password1 = useRef("");
  const password2 = useRef("");

  const regCheck = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

  const navigate = useNavigate();

  const clickUserUpdate = (event) => {
    if (
      regCheck.test(name.current.value) ||
      regCheck.test(nickname.current.value) ||
      regCheck.test(password1.current.value) ||
      regCheck.test(password2.current.value)
    ) {
      event.preventDefault();
      alert("특수문자는 포함될 수 없습니다.");
    } else if (password1.current.value !== password2.current.value) {
      event.preventDefault();
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      alert("회원 정보를 수정하였습니다.");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="container">
        <div className="input-form-backgroud row">
          <div className="input-form col-md-12 mx-auto signUpForm">
            <h4 className="mb-3 signUpText">회원 정보 수정</h4>

            <form
              className="validation-form is-invalid"
              id="submitForm"
              onSubmit={(event) => clickUserUpdate(event)}
            >
              <div className="signUpRow">
                <div className="col-md-5 mb-3 signUpName">
                  {/* <Form.Text muted className="formText">
                    성명
                  </Form.Text> */}
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    className="form-control signUpFormInput"
                    id="name"
                    name="name"
                    ref={name}
                    placeholder="이름"
                    maxLength="10"
                    required
                  />
                  <div className="invalid-feedback">이름을 입력해주세요.</div>
                </div>
                <div className="col-md-6 mb-3 signUpNickname">
                  {/* <Form.Text muted className="formText">
                    닉네임
                  </Form.Text> */}
                  <label htmlFor="nickname"></label>
                  <input
                    type="text"
                    className="form-control signUpFormInput"
                    id="nickname"
                    name="nickname"
                    ref={nickname}
                    placeholder="닉네임"
                    maxLength="10"
                    required
                  />
                  <div className="invalid-feedback">닉네임을 입력해주세요.</div>
                </div>
              </div>

              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  비밀번호
                </Form.Text> */}
                <label htmlFor="address"></label>
                <input
                  type="password"
                  className="form-control signUpFormInput"
                  id="password1"
                  name="password1"
                  placeholder="비밀번호"
                  ref={password1}
                  maxLength="20"
                  required
                />
                <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>

              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  비밀번호 확인
                </Form.Text> */}
                <label htmlFor="password"></label>
                <input
                  type="password"
                  className="form-control signUpFormInput"
                  id="password2"
                  placeholder="비밀번호 확인"
                  name="password2"
                  ref={password2}
                  maxLength="20"
                  required
                />
                <div className="invalid-feedback">
                  비밀번호를 다시 한 번 입력해주세요.
                </div>
              </div>

              <br />
              <div className="mb-4 signUpBtnDiv">
                <button
                  className="btn btn-primary btn-sm btn-block signUpBtn findBtn"
                  type="submit"
                >
                  수정
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserUpdateComponent;
