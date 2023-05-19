import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
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
      {inquirydb.length !== 0 ? (
        inquirydb.map((a, i) => (
          <div
            className="inquiryMain"
            onClick={() => {
              setInquirydata(a);
              setInquiryAction(2);
              // MyInquiryDetail 이동 or 해당 리스트를 제목,내용으로 변경
            }}
          >
            <div className="inquiryMain1">
              <b className="inquiryMainTitle">{a.title}</b>
              <br />
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
      ) : (
        <div className="inquiryNone">문의내역이 없습니다.</div>
      )}

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
    </>
  );
};

export default MyInquiryMain;
