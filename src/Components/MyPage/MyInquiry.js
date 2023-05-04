import React, { useState } from "react";
import "../../Styles/MyInquiry.css";

const MyInquiry = () => {
  const [inquirytest, setInquirytest] = useState([
    {
      title: "제목1",
      date: "2023-05-02",
      answer: 0,
    },
    {
      title: "제목2",
      date: "2023-05-03",
      answer: 0,
    },
    {
      title: "제목3",
      date: "2023-05-04",
      answer: 1,
    },
  ]);

  return (
    <>
      <div className="inquiryHeader">
        <h4>1:1문의</h4>
      </div>
      <hr className="inquiryhr1" />
      {inquirytest.map((a, i) => (
        <div
          className="inquiryMain"
          onClick={() => {
            // MyInquiryDetail 이동 or 해당 리스트를 제목,내용으로 변경
          }}
        >
          <div className="test9">
            <b className="test10">{a.title}</b>
            <br />
            {a.answer === 0 ? (
              <div className="inquiryStatus">처리중</div>
            ) : (
              <div className="inquiryStatus">답변완료</div>
            )}
            <b className="test11">{a.date}</b>
          </div>
          <hr className="inquiryhr2" />
        </div>
      ))}
      <div className="inquiryBox">
        <button
          className="inquiryBtn"
          onClick={() => {
            // MyInquiryWrite 이동
          }}
        >
          문의하기
        </button>
      </div>
    </>
  );
};

export default MyInquiry;
