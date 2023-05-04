import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BsTrash3 } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MyInquiryWrite = ({ inquirytest, setInquirytest, setInquiryAction }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const inputRef = useRef(null);

  const handleFileInputChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleRemoveImage = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const handleUploadClick = () => {
    console.log(selectedFiles);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div className="inquiryHeader">
        <div
          className="inquiryBack"
          onClick={() => {
            if (window.confirm("뒤로가시겠습니까?")) {
              setInquiryAction(0);
            } else {
              return;
            }
          }}
        >
          <b className="inquiryBackArrow">&lt;</b>
        </div>
        <h4>1:1문의</h4>
      </div>
      <div className="writeForm">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              className="writeTitle"
              type="email"
              placeholder="제목"
            />
          </Form.Group>
          <Form.Group className="mb-3 writeFormContent">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="문의 내용을 입력하세요"
              className="contentForm"
              style={{ resize: "none" }}
            />
          </Form.Group>
        </Form>
      </div>
      {/* <div>
        <div>
          <div className="uploadBtn">
            <Button
              variant="outline-secondary"
              className=""
              onClick={handleClick}
            >
              <img className="uploadBtnImg" src="img/uploading.png" alt="" />
            </Button>
          </div>

          <input
            className="uploadInput"
            type="file"
            multiple
            onChange={handleFileInputChange}
            ref={inputRef}
          />
        </div>
        <div className="uploadImgDiv">
          <ListGroup>
            {selectedFiles.map((file, index) => (
              <ListGroup.Item className="listGroupItem">
                <div key={index}>
                  <img
                    className="uploadImg"
                    src={URL.createObjectURL(file)}
                    alt={`${file.name}`}
                  />
                  <p className="imgTitle">{file.name}</p>
                  <div className="imgDeleteBtnDiv">
                    <button
                      className="imgDeleteBtn"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <BsTrash3 />
                    </button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div> */}
      {/* <br /> <br /> <br /> */}
      <div className="inquiryWriteBox">
        <button
          className="inquiryBtn"
          onClick={() => {
            if (window.confirm("작성하시겠습니까?")) {
              // 저장 코드 들어감
              setInquiryAction(0);
            } else {
              return;
            }
          }}
        >
          작성완료
        </button>
        {/* <button
          className="inquiryBtn2"
          onClick={() => {
            if (window.confirm("취소하시겠습니까?")) {
              setInquiryAction(0);
            } else {
              return;
            }
          }}
        >
          취소
        </button> */}
      </div>
    </>
  );
};

export default MyInquiryWrite;
