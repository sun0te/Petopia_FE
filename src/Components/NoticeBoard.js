import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardList from "./CardList";
import SearchBarcm from "./SearchBarcm";
import Button from "react-bootstrap/Button";

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
  margin-bottom: 5px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

function NoticeBoard() {
  const [session, setSession] = useState("admin"); //버튼 보이게 하기 위해 작성 추후 삭제
  //const session = sessionStorage.getItem("id"); 로그인 id 받아올 때 쓰면 됨

  return (
    <NoticeContainer>
      <BoardWrapper>
        <TitleSearchWrap>
          <Title>공지사항</Title>
          <SearchBarcm />
        </TitleSearchWrap>
        <CardList />
        {session === "admin" && (
          <Button className="mt-2" variant="primary" size="sm">
            글쓰기
          </Button>
        )}
      </BoardWrapper>
    </NoticeContainer>
  );
}

export default NoticeBoard;
