import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa";

const MyInquiryWrite = ({ setInquiryAction, inquirydbtest }) => {
  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡdb 연동 테스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  const titleRef = useRef();
  const contentRef = useRef();

  const [inquiryalert, setInquiryalert] = useState(0);

  const inquirydbwrite = () => {
    if (titleRef.current.value === "" || titleRef.current.value === undefined) {
      setInquiryalert(1);
      titleRef.current.focus();
      return false;
    } else if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      setInquiryalert(2);
      contentRef.current.focus();
      return false;
    }
    axios
      .post("/inquirywrite", {
        title: titleRef.current.value,
        content: contentRef.current.value,
        answer_status: "PENDING",
        username: sessionStorage.getItem("email"),
      })
      .then((res) => {
        inquirydbtest();
        setInquiryAction(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡdb 연동 테스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  const inquiryEnter = () => {
    if (titleRef.current.value !== "") {
      contentRef.current.focus();
    } else {
      setInquiryalert(1);
    }
  };

  const inquiryTitleChange = () => {
    if (titleRef.current.value !== "" || titleRef.current.value !== undefined) {
      setInquiryalert(0);
    }
  };

  const inquiryContentChange = () => {
    if (
      contentRef.current.value !== "" ||
      contentRef.current.value !== undefined
    ) {
      setInquiryalert(0);
    }
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
      <div className="writeFormInquiry">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              className="writeTitle"
              type="text"
              placeholder="제목"
              ref={titleRef}
              onChange={() => {
                inquiryTitleChange();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  inquiryEnter();
                }
              }}
            />
          </Form.Group>
          {inquiryalert === 1 ? (
            <div className="inquiryWriteAlert">제목을 입력하세요.</div>
          ) : (
            <div className="inquiryWriteAlert">&nbsp;</div>
          )}
          <Form.Group className="mb-3 writeFormContent">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="문의 내용을 입력하세요"
              className="contentForm"
              ref={contentRef}
              style={{ resize: "none" }}
              onChange={() => {
                inquiryContentChange();
              }}
            />
          </Form.Group>
          {inquiryalert === 2 ? (
            <div className="inquiryWriteAlert">내용을 입력하세요.</div>
          ) : (
            <div className="inquiryWriteAlert">&nbsp;</div>
          )}
        </Form>
      </div>
      <div className="inquiryWriteBox">
        <button
          className="inquiryBtn"
          onClick={() => {
            // 저장 코드 들어감
            inquirydbwrite();
          }}
        >
          작성완료
        </button>
      </div>
    </>
  );
};

export default MyInquiryWrite;
