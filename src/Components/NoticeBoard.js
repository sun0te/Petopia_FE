import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardList from "./CardList";
import SearchBarcm from "./SearchBarcm";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NoticeContainer = styled.div`
  padding: 0 15px;
  max-height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 10px;
  flex-direction: column;
`;

const TitleSearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const Search = styled.div`
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-top: 0;
  margin-left: 20px;
  align-items: left;
  margin-bottom: 20px;
`;

function NoticeBoard() {
  const [session, setSession] = useState("admin"); //버튼 보이게 하기 위해 작성 추후 admin 삭제
  //const session = sessionStorage.getItem("id"); 로그인 id 받아올 때 쓰면 됨

  return (
    <NoticeContainer>
      <BoardWrapper>
        <TitleSearchWrap>
          <Title>공지사항</Title>
          <Search>
            <SearchBarcm />
          </Search>
        </TitleSearchWrap>
        <CardList />
        <Link to="/write">
          {session === "admin" && (
            <Button className="mt-2" variant="primary" size="sm">
              글쓰기
            </Button>
          )}
        </Link>
      </BoardWrapper>
    </NoticeContainer>
  );
}

export default NoticeBoard;
