import "../Styles/Login.css";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const FindPassword = () => {
  const name = useRef("");
  const email = useRef("");
  const birthdate = useRef("");
  const [mode, setMode] = useState(0);
  const [inputEmail, setInputEmail] = useState("");

  const findPassword = (event) => {
    event.preventDefault();
    setInputEmail(email.current.value);
    setMode(1);
  };

  const renderView = () => {
    if (mode === 0) {
      return (
        <form
          className="validation-form"
          id="submitForm"
          onSubmit={(event) => findPassword(event)}
        >
          <div className="signUpRow">
            <div className="col-md-6 mb-3 signUpName">
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
          </div>

          <div className="mb-3 signUpRow">
            {/* <Form.Text muted className="formText">
                  이메일
                </Form.Text> */}
            <label htmlFor="email"></label>
            <input
              type="email"
              className="form-control signUpFormInput"
              id="email"
              name="email"
              placeholder="이메일"
              ref={email}
              maxLength="40"
              required
            />
            <div className="invalid-feedback">이메일을 입력해주세요.</div>
          </div>

          <div className="mb-3 signUpRow">
            <label htmlFor="address"></label>
            <input
              type="date"
              className="form-control signUpFormInput signUpFormInputDate"
              id="birth"
              name="email"
              placeholder="생년월일"
              data-placeholder="생년월일"
              ref={birthdate}
              required
            />
            <div className="invalid-feedback">생년월일을 입력해주세요.</div>
          </div>
          <Link to="/findaccountemail" style={{ textDecoration: "none" }}>
            <p className="p_idpw">이메일 찾기</p>
          </Link>
          <br />

          <div className="mb-4 signUpBtnDiv">
            <button
              className="btn btn-primary btn-sm btn-block signUpBtn findBtn"
              type="submit"
            >
              찾기
            </button>
          </div>
        </form>
      );
    } else if (mode === 1) {
      /* mode 1  --------------------------------------------------------------------*/
      return (
        <>
          <div className="findPasswordDiv">
            <p className="findPasswordP">{inputEmail}</p>

            <div className="sendVerificationBtn">
              <Button
                className="btn-sm"
                variant="outline-secondary"
                style={{
                  fontSize: "0.5rem",
                  width: "82px",
                  padding: "-20px",
                  margin: "0px",
                }}
              >
                인증메일 전송
                {/* 회원 정보 수정 링크 첨부한 메일 발송 */}
              </Button>
            </div>
          </div>

          <div className="findPwDiv">
            <Link to="/findaccountemail" style={{ textDecoration: "none" }}>
              <p className="p_idpw">이메일 찾기</p>
            </Link>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="input-form-backgroud row">
          <div className="input-form col-md-12 mx-auto signUpForm">
            <h4 className="mb-3 signUpText">비밀번호 찾기</h4>
            {renderView()}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindPassword;
