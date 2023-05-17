import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa";

const MyInquiryDetail = ({
  inquirydata,
  setInquiryAction,
  inquirydb,
  inquirydbtest,
}) => {
  //문의 삭제
  const inquiryDelete = () => {
    axios
      .post("/inquirydelete", {
        id: inquirydata.id,
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
          className="inquiryBack-left"
          onClick={() => {
            setInquiryAction(0);
          }}
        >
          <FaAngleLeft className="inquiryBack-icon" />
        </div>
        <h4>1:1문의</h4>
      </div>
      <hr className="inquiryhr1" />
      <div className="inquiryDetail1">
        <div className="inquiryDetail2">
          <b className="inquiryMainTitle">{inquirydata.title}</b>
          <br />
          <b className="inquiryMainDate">
            {new Date(inquirydata.uploadDate).toISOString().split("T")[0]}
          </b>
          <br />
          <br />
          <b className="inquiryMainTitle">문의내용</b>
          <div className="inquiryDetailContent">{inquirydata.content}</div>
        </div>
      </div>
      <br />
      <hr className="inquiryhr1" />
      {inquirydata.answer_status === "ANSWERED" ? (
        <>
          <div className="inquiryDetail1">
            <div className="detailSpace">
              <b className="inquiryAnswerTitle">펫토피아 답변</b>
            </div>
            <div className="inquiryDetailContent1">
              {inquirydata.answerContent}
            </div>
          </div>
        </>
      ) : null}
      <br />
      <div className="inquiryWriteBox">
        {inquirydata.answer_status === "PENDING" ? (
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
