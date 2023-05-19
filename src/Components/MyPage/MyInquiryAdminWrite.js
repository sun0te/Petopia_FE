import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import axios from "axios";

const MyInquiryAdminWrite = ({
  inquiryAdminData,
  setInquiryAdminAction,
  getInquiryListAll,
}) => {
  const contentRef = useRef();

  const [inquiryAdminAlert, setInquiryAdminAlert] = useState(0);

  const inquiryAdminWrite = () => {
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      contentRef.current.focus();
      setInquiryAdminAlert(1);
      return false;
    }
    axios
      .post("/inquiryanswer", {
        id: inquiryAdminData.id,
        answer_status: "ANSWERED",
        answerContent: contentRef.current.value,
      })
      .then((res) => {
        setInquiryAdminAction(0);
        getInquiryListAll();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const inquiryAdminContentChange = () => {
    if (
      contentRef.current.value !== "" ||
      contentRef.current.value !== undefined
    ) {
      setInquiryAdminAlert(0);
    }
  };

  return (
    <>
      <div className="writeForm">
        <Form>
          <Form.Group className="mb-3 writeFormContent">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="답변 내용을 입력하세요"
              className="contentForm"
              style={{ resize: "none" }}
              ref={contentRef}
              onChange={() => {
                inquiryAdminContentChange();
              }}
            />
          </Form.Group>
          {inquiryAdminAlert === 1 ? (
            <div className="inquiryWriteAlert">내용을 입력하세요.</div>
          ) : (
            <div className="inquiryWriteAlert">&nbsp;</div>
          )}
        </Form>
        <div className="inquiryWriteBox">
          <button
            className="inquiryBtn"
            onClick={() => {
              inquiryAdminWrite();
              // setInquiryAdminAction(0);
            }}
          >
            저장
          </button>
        </div>
      </div>
    </>
  );
};

export default MyInquiryAdminWrite;
