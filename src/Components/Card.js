import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const BoardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    box-sizing: border-box;
    width: 100%;
  }
  .cardti {
    display: flex;
    align-items: center;
    vertical-align: middle;
  }
`;

const BoardCard = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #c9c1c1;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.img`
  width: 90px;
  height: 85px;
  margin-right: 10px;
  flex-shrink: 0;
  margin-bottom: 0;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const CardTitle = styled.div`
  margin: 0;
`;

const CardComments = styled.div`
  margin-left: 4px;
  font-size: 14px;
  color: #999;
  line-height: 21px;
`;

const CardInfoContainer = styled.div`
  margin-top: 3px;
`;

const CardInfo = styled.p`
  font-size: 12px;
  display: flex;
  margin: 0;
  &:not(:first-child) {
    display:inline-block;
    vertical-align:top; 
  &:last-child:before {
     display:inline-block;
     width: 1px;
     height: 11px;
     margin:0 6px;
     background: black;
     vertical-align: -1px;
    content:'';
  }
`;

const CardDate = styled.p`
  margin-top: 10px;
  text-align: right;
  font-size: 12px;
  margin: 0 10px;
`;

const Card = () => {
  const [lists, setlists] = useState([
    {
      id: 1,
      title: "이번 주 인기 글",
      content: "테스트입니다.",
      date: "2023-04-25",
      author: "홍길동",
      views: 200,
      comments: 37,
      thumbnailUrl: "https://via.placeholder.com/150",
      recommends: 70,
    },
  ]);

  useEffect(() => {
    axios
      .get("/lists")
      .then((response) => {
        setlists(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BoardBox>
      {lists.map((notice) => (
        <Link className="linkstyle" to="/" key={notice.id}>
          <BoardCard>
            <Thumbnail src={notice.thumbnailUrl} alt={notice.title} />
            <ContentContainer>
              <div className="cardti">
                <CardTitle>{notice.title}</CardTitle>
                <CardComments>({notice.comments})</CardComments>
              </div>
              <CardInfoContainer>
                <CardInfo>작성자 {notice.author}</CardInfo>
                <CardInfo>조회수 {notice.views}</CardInfo>
                <CardInfo>추천 수 {notice.recommends}</CardInfo>
              </CardInfoContainer>
              <CardDate>{notice.date}</CardDate>
            </ContentContainer>
          </BoardCard>
        </Link>
      ))}
    </BoardBox>
  );
};

export default Card;
