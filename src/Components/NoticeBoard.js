import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardList from "./CardList";
import SearchBarcm from "./SearchBarcm";

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 20px;
  flex-direction: column;
`;

const TitleSearchWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 25px;
  margin: 0;
  text-align: center;
`;

function NoticeBoard () {
  return (
    <NoticeContainer>
        <BoardWrapper>
          <TitleSearchWrap>
            <Title>공지사항</Title>
            <SearchBarcm />
          </TitleSearchWrap>
          <CardList />
          <button >글쓰기</button>
        </BoardWrapper>
      
    </NoticeContainer>
  );
};

export default NoticeBoard;
