import React from "react";
import BoardList from "../BoardList.js";
import Button from "react-bootstrap/Button";

import "../../Styles/UserBoard.css";

const RegionBoardList = () => {
  const toRegionWrite = () => {
    window.location.href = "/Write";
  };
  return (
    <>
      <BoardList />
      <div class="div_boardwrite_btn">
        <Button
          type="button"
          class="btn btn-primary boardwrite_btn"
          onClick={toRegionWrite}
        >
          글쓰기
        </Button>
      </div>
    </>
  );
};

export default RegionBoardList;
