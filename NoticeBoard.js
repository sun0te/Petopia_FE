import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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

const NoticeBoard = () => {
  const [search, setsearch] = useState([
    {
      id: 5,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      author: "관리자2",
      views: 10,
      comments: 2,
      thumbnailUrl: "https://via.placeholder.com/150",
    },
  ]);

  useEffect(() => {
    axios
      .get("/search")
      .then((response) => {
        setsearch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <NoticeContainer>
      {search.map((search) => (
        <BoardWrapper>
          <TitleSearchWrap>
            <Title>공지사항</Title>
            <SearchBarcm />
          </TitleSearchWrap>
          <CardList />
          <button >글쓰기</button>
        </BoardWrapper>
      ))}
    </NoticeContainer>
  );
};

export default NoticeBoard;
