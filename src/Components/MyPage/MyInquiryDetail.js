import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyInquiryDetail = ({
  inquirytest2,
  setInquiryAction,
  inquirydb,
  inquirydbtest,
}) => {
  //문의 삭제
  const inquiryDelete = () => {
    axios
      .post("/inquirydelete", {
        id: inquirytest2.id,
      })
      .then((res) => {
        inquirydbtest();
        setInquiryAction(0);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <div className="inquiryHeader">
        <div
          className="inquiryBack"
          onClick={() => {
            setInquiryAction(0);
          }}
        >
          <b className="inquiryBackArrow">&lt;</b>
        </div>
        <h4>1:1문의</h4>
      </div>
      <hr className="inquiryhr1" />
      <div className="inquiryDetail1">
        <div className="inquiryDetail2">
          <b className="inquiryMainTitle">{inquirytest2.title}</b>
          <br />
          <b className="inquiryMainDate">{inquirytest2.createDate}</b>
          <br />
          <br />
          <b className="inquiryMainTitle">문의내용</b>
          <div className="inquiryDetailContent">{inquirytest2.content}</div>
        </div>
      </div>
      <br />
      <hr className="inquiryhr1" />
      {inquirytest2.answer === 1 ? (
        <>
          <div className="inquiryDetail1">
            <div className="detailSpace">
              <b className="inquiryAnswerTitle">펫토피아 답변</b>
            </div>
            <div className="inquiryDetailContent1">
              {inquirytest2.answerContent}
            </div>
          </div>
        </>
      ) : null}
      <br />
      <div className="inquiryWriteBox">
        {inquirytest2.answer === 0 ? (
          <>
            <button
              className="inquiryBtn"
              onClick={() => {
                setInquiryAction(3);
              }}
            >
              수정
            </button>
            <button
              className="inquiryBtn2"
              onClick={() => {
                if (window.confirm("삭제하시겠습니까?")) {
                  // 삭제 코드
                  inquiryDelete();
                  setInquiryAction(0);
                }
              }}
            >
              삭제
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default MyInquiryDetail;
