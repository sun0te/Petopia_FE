import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import "../Styles/ReportModal.css";
import "../Styles/RecomendStyle.css";

const ReportModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal reportmodal" : "reportmodal"}>
      {open ? (
        <div className="reportModalSectionDiv">
          <div className="reportModalHeaderDiv">
            {header}
            <button className="reportModalCloseBtn" onClick={close}>
              &times;
            </button>
          </div>
          <div className="reportModalMainDiv">{props.children}</div>
          <div className="reportModalFooterDiv">
            {/* <button className="reportModalCloseBtn" onClick={close}>
              close
            </button> */}
            <Button
              className="btm-sm reportBtn"
              variant="outline-danger"
              style={{ padding: "4px 0px 3px 0px" }}
              onClick={close}
            >
              신고
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReportModal;
