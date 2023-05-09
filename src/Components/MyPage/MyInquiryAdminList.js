import React from "react";

const MyInquiryAdminList = ({
  inquiryAdmintest,
  setInquiryAdmintest2,
  setInquiryAdminAction,
}) => {
  return (
    <>
      <div className="inquiryHeader">
        <h4>1:1문의 관리</h4>
      </div>
      <div className="inquiryadminbox">
        <div className="inquiryadminbox1">
          <b>전체 문의</b>
          <br />
          <b>20</b>
        </div>
        <div className="inquiryadminbox2">
          <b>답변 대기</b>
          <br />
          <b>13</b>
        </div>
        <div className="inquiryadminbox3">
          <b>답변 완료</b>
          <br />
          <b>7</b>
        </div>
      </div>
      <hr className="inquiryhr1" />
      {inquiryAdmintest.length !== 0 ? (
        inquiryAdmintest.map((a, i) => (
          <div
            className="inquiryMain"
            onClick={() => {
              setInquiryAdmintest2(a);
              setInquiryAdminAction(2);
              // MyInquiryDetail 이동 or 해당 리스트를 제목,내용으로 변경
            }}
          >
            <div className="inquiryMain1">
              <b className="inquiryMainTitle">{a.title}</b>
              <br />
              {a.answer === 0 ? (
                <div className="inquiryadminStatusWait">답변 대기</div>
              ) : (
                <div className="inquiryadminStatusComplete">답변 완료</div>
              )}
              <b className="inquiryMainDate">{a.createDate}</b>
            </div>
            <hr className="inquiryhr2" />
          </div>
        ))
      ) : (
        <div className="inquiryNone">문의내역이 없습니다.</div>
      )}
    </>
  );
};

export default MyInquiryAdminList;
