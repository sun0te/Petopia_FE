import React from "react";
import BoardList from "../BoardList.js";
import Button from "react-bootstrap/Button";

const RegionBoardList = () => {
  const toRegionWrite = () => {
    window.location.href = "/Write";
  };
  return (
    <>
      <BoardList />
      <Button type="button" class="btn btn-primary" onClick={toRegionWrite}>
        글쓰기
      </Button>
    </>
  );
};

export default RegionBoardList;
