import React, { useState } from "react";
import MyInquiryAdminWrite from "./MyInquiryAdminWrite";
import MyInquiryAdminUpdate from "./MyInquiryAdminUpdate";
import { FaAngleLeft } from "react-icons/fa";

const MyInquiryAdminDetail = ({
  inquiryAdminList,
  inquiryAdminData,
  setInquiryAdminData,
  setInquiryAdminAction,
  getInquiryListAll,
}) => {
  const [inquiryadmincheck, setInquiryadmincheck] = useState(0);

  return (
    <>
      <div className="inquiryHeader">
        <div
          className="inquiryAdminBack-left"
          onClick={() => {
            setInquiryAdminAction(0);
          }}
        >
          <FaAngleLeft className="inquiryBack-icon" />
        </div>
        <h4>1:1문의 관리</h4>
      </div>
      <hr className="inquiryhr1" />
      <div className="inquiryDetail1">
        <div className="inquiryDetail2">
          <b className="inquiryMainTitle">{inquiryAdminData.title}</b>
          <br />
          <b className="inquiryMainDate">
            {new Date(inquiryAdminData.uploadDate).toISOString().split("T")[0]}
          </b>
          <div className="inquiryadminusername">
            <b>작성자 : {inquiryAdminData.username}</b>
          </div>
          <div className="inquiryadminDetailContent">
            {inquiryAdminData.content}
          </div>
        </div>
      </div>
      <br />
      <hr className="inquiryhr1" />
      {/* 답변내용 */}
      {inquiryAdminData.answer_status === "ANSWERED" &&
      inquiryadmincheck === 0 ? (
        <>
          <div className="inquiryDetail1">
            <div className="detailSpace">
              <b className="inquiryAdminAnswerTitle">답변</b>
            </div>
            <div className="inquiryAdminDetailContent1">
              {inquiryAdminData.answerContent}
            </div>
          </div>
          <div className="inquiryWriteBox">
            <button
              className="inquiryBtn"
              onClick={() => {
                setInquiryadmincheck(1);
              }}
            >
              수정
            </button>
          </div>
        </>
      ) : null}
      <br />
      {inquiryAdminData.answer_status === "PENDING" &&
      inquiryadmincheck === 0 ? (
        <>
          <MyInquiryAdminWrite
            inquiryAdminData={inquiryAdminData}
            setInquiryAdminAction={setInquiryAdminAction}
            getInquiryListAll={getInquiryListAll}
          />
        </>
      ) : null}

      {inquiryadmincheck === 1 ? (
        <>
          <MyInquiryAdminUpdate
            inquiryAdminData={inquiryAdminData}
            setInquiryAdminAction={setInquiryAdminAction}
          />
          <div className="inquiryWriteBox">
            <button
              className="inquiryBtn"
              onClick={() => {
                setInquiryAdminAction(0);
              }}
            >
              저장
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MyInquiryAdminDetail;
