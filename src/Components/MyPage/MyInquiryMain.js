import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../Styles/MyInquiry.css";

const MyInquiryMain = ({
  setInquiryAction,
  setInquirydata,
  inquirydb,
  setMyPageAction,
}) => {
  return (
    <>
      <div className="inquiryHeader">
        {/* 뒤로가기 */}
        <div
          className="inquiryBack-left"
          onClick={() => {
            setMyPageAction(0);
          }}
        >
          <FaAngleLeft className="inquiryBack-icon" />
        </div>
        <h4>1:1문의</h4>
      </div>
      <hr className="inquiryhr1" />
      {/* 문의 리스트 */}
      {inquirydb.length !== 0 ? (
        inquirydb.map((a, i) => (
          <div
            className="inquiryMain"
            onClick={() => {
              setInquirydata(a);
              setInquiryAction(2);
            }}
          >
            <div className="inquiryMain1">
              <div className="inquiryTitleEllipsis">
                <b className="inquiryMainTitle">{a.title}</b>
              </div>
              {a.answer_status === "PENDING" ? (
                <div className="inquiryStatus">처리중</div>
              ) : (
                <div className="inquiryStatus">답변완료</div>
              )}
              <b className="inquiryMainDate">
                {new Date(a.uploadDate).toISOString().split("T")[0]}
              </b>
            </div>
            <hr className="inquiryhr2" />
          </div>
        ))
      ) : sessionStorage.getItem("email") != null ? (
        <div className="inquiryNone">문의내역이 없습니다.</div>
      ) : (
        <div className="inquiryNone">로그인을 해주세요.</div>
      )}

      {sessionStorage.getItem("email") != null ? (
        <div className="inquiryBox">
          <button
            className="inquiryBtn"
            onClick={() => {
              setInquiryAction(1);
            }}
          >
            문의하기
          </button>
        </div>
      ) : (
        // sessionStorage.getItem("email") == null 일 경우 로그인 이동 버튼 활성화
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <div className="inquiryBox">
            <button
              className="inquiryBtn"
              onClick={() => {
                setInquiryAction(1);
              }}
            >
              로그인
            </button>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default MyInquiryMain;
