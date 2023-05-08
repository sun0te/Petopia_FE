import React from "react";

const MyInquiryWrite = () => {
  return (
    <>
      <div className="inquiryHeader">
        <h4>1:1문의</h4>
      </div>
      <hr className="inquiryhr1" />
      <div>
        <form>
          <div className="inquiryWriteContainer">
            <h6>제목</h6>
            <input
              className="inquiryWriteInput"
              type="text"
              size={38}
              placeholder=""
            />
            <br />
            <br />
            <h6>내용</h6>
            <textarea
              className="inquiryWriteTextArea"
              rows={10}
              cols={40}
            ></textarea>
          </div>
        </form>
        <div className="inquiryWriteBox">
          <button
            className="inquiryBtn"
            onClick={() => {
              // 저장 후 MyInquiry 이동
            }}
          >
            작성완료
          </button>
          <button
            className="inquiryBtn2"
            onClick={() => {
              // window.confirm 후 MyInquiry 이동
            }}
          >
            취소
          </button>
        </div>
      </div>
    </>
  );
};

export default MyInquiryWrite;
