import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import axios from "axios";

const MyInquiryAdminUpdate = ({
  inquiryAdminData,
  setInquiryAdminAction,
  getInquiryListAll,
  setInquiryAdminData,
  setInquiryadmincheck,
}) => {
  const contentRef = useRef();

  const [inquiryAdminAlert, setInquiryAdminAlert] = useState(0);

  const inquiryAdminUpdate = () => {
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      contentRef.current.focus();
      setInquiryAdminAlert(1);
      return false;
    }
    axios
      .post("/inquiryUpdateAnswer", {
        id: inquiryAdminData.id,
        answerContent: contentRef.current.value,
      })
      .then((res) => {
        getInquiryListAll();
        setInquiryAdminData(res.data);
        setInquiryadmincheck(0);
        setInquiryAdminAction(1);
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
              placeholder="문의 내용을 입력하세요"
              className="contentForm"
              defaultValue={inquiryAdminData.answerContent}
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
              inquiryAdminUpdate();
            }}
          >
            수정
          </button>
        </div>
      </div>
    </>
  );
};

export default MyInquiryAdminUpdate;
