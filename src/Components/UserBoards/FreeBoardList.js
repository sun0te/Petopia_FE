import React from "react";

import BoardList from "../BoardList.js";
import "../../Styles/Main.css";
import Button from "react-bootstrap/Button";

const FreeBoardList = () => {
  const toFreeWrite = () => {
    window.location.href = "/Write";
  };
  return (
    <>
      <BoardList />
      <Button type="button" class="btn btn-primary" onClick={toFreeWrite}>
        글쓰기
      </Button>
    </>
  );
};

export default FreeBoardList;
