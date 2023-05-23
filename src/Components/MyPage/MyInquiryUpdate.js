import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa";

const MyInquiryUpdate = ({
  inquirydata,
  setInquiryAction,
  inquirydblist,
  setInquirydata,
}) => {
  const titleRef = useRef();
  const contentRef = useRef();

  // 문의 수정
  const inquiryUpdate = () => {
    if (titleRef.current.value === "" || titleRef.current.value === undefined) {
      setInquiryalert1(1);
      titleRef.current.focus();
      return false;
    } else if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      setInquiryalert1(2);
      contentRef.current.focus();
      return false;
    }

    axios
      .post("/inquiryupdate", {
        id: inquirydata.id,
        title: titleRef.current.value,
        content: contentRef.current.value,
        answer_status: inquirydata.answer_status,
        // username: inquirydata.username,
        username: sessionStorage.getItem("email"),
      })
      .then((res) => {
        inquirydblist();
        setInquirydata(res.data);
        setInquiryAction(2);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const [inquiryalert1, setInquiryalert1] = useState(0);

  const inquiryEnter = () => {
    if (titleRef.current.value !== "") {
      contentRef.current.focus();
    } else {
      setInquiryalert1(1);
    }
  };

  const inquiryTitleChange = () => {
    if (titleRef.current.value !== "" || titleRef.current.value !== undefined) {
      setInquiryalert1(0);
    }
  };

  const inquiryContentChange = () => {
    if (
      contentRef.current.value !== "" ||
      contentRef.current.value !== undefined
    ) {
      setInquiryalert1(0);
    }
  };

  return (
    <>
      <div className="inquiryHeader">
        {/* 뒤로가기 */}
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
      {/* 문의 수정 */}
      <div className="writeFormInquiry">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              className="writeTitle"
              type="text"
              placeholder="제목"
              ref={titleRef}
              defaultValue={inquirydata.title}
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
          {inquiryalert1 === 1 ? (
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
              defaultValue={inquirydata.content}
              style={{ resize: "none" }}
              onChange={() => {
                inquiryContentChange();
              }}
            />
          </Form.Group>
          {inquiryalert1 === 2 ? (
            <div className="inquiryWriteAlert">내용을 입력하세요.</div>
          ) : (
            <div className="inquiryWriteAlert">&nbsp;</div>
          )}
        </Form>
      </div>
      <div className="inquiryUpdateBox">
        <button
          className="inquiryBtn"
          onClick={() => {
            if (window.confirm("수정하시겠습니까?")) {
              inquiryUpdate();
            } else {
              return;
            }
          }}
        >
          수정
        </button>
      </div>
    </>
  );
};

export default MyInquiryUpdate;
