import "../Styles/Login.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const FindEmail = () => {
  const name = useRef("");
  const birthdate = useRef("");
  const password1 = useRef("");
  const [mode, setMode] = useState(0);

  const findEmail = (event) => {
    event.preventDefault();
    setMode(1);
  };

  const clickFindEmail = () => {
    setMode(1);
  };

  const renderView = () => {
    if (mode === 0) {
      return (
        <>
          <div className="">
            <form
              className="validation-form "
              id="submitForm"
              onSubmit={(event) => findEmail(event)}
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
              <div className="mb-3 signUpRow">
                <label htmlFor="password"></label>
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
              <div className="p_find">
                <Link
                  to="/findaccountpassword"
                  style={{ textDecoration: "none" }}
                >
                  <p className="p_idpw" onClick={clickFindEmail}>
                    비밀번호 찾기
                  </p>
                </Link>
              </div>
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
          </div>
        </>
      );
    } else if (mode === 1) {
      /* mode 1  --------------------------------------------------------------------*/
      return (
        <>
          <div>
            <p className="findEmailP">ad***@admin.com</p>
          </div>

          <div className="findPwDiv">
            <Link to="/findaccountpassword" style={{ textDecoration: "none" }}>
              <p className="p_idpw" onClick={clickFindEmail}>
                비밀번호 찾기
              </p>
            </Link>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container loginComponent">
        <div className="input-form-backgroud row">
          <div className="input-form col-md-12 mx-auto signUpForm">
            <h4 className="mb-3 signUpText">이메일 찾기</h4>
            {renderView()}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindEmail;
