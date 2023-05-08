import React from "react";

import BoardList from "../BoardList.js";

import Button from "react-bootstrap/Button";

const FreeBoardList = () => {
  const toFreeWrite = () => {
    window.location.href = "/Write";
  };
  return (
    <>
      <BoardList />
      <div class="div_boardwrite_btn">
        <Button
          type="button"
          class="btn btn-primary boardwrite_btn"
          onClick={toFreeWrite}
        >
          글쓰기
        </Button>
      </div>
    </>
  );
};

export default FreeBoardList;
