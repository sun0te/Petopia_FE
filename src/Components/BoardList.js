import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardList from "./CardList";
import SearchBarcm from "./SearchBarcm";
import { BsWindowDock } from "react-icons/bs";

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
  flex-direction: column;
`;

function BoardList() {
  return (
    <NoticeContainer>
      <BoardWrapper>
        <SearchBarcm />
        <CardList />
      </BoardWrapper>
    </NoticeContainer>
  );
}

export default BoardList;
