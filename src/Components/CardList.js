import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";


const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  .cardti {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-top: 5px;
    vertical-align: middle;
  }
`;

const NoticeCard = styled.div`
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
  width: 130px;
  height: 85px;
  margin-right: 10px;
  margin-top: 12px;
  flex-shrink: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  margin-top: 3px;
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
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  flex-direction: column;
`;

const CardInfo = styled.p`
  margin: 0 10px;
  font-size: 12px;
`;

const CarDdate = styled(CardInfo)`
  margin-top: 10px;
  text-align: right;
`;

const CardList = () => {
  const [lists, setlists] = useState([
    {
      id: 1,
      title: "테스트입니다.",
      content: "테스트입니다.",
      date: "2023-04-25",
      author: "홍길동",
      views: 10,
      comments: 3,
      thumbnailUrl: "https://via.placeholder.com/150",
      recommends: 10,
    },
    {
      id: 2,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      author: "홍길동",
      views: 10,
      comments: 2,
      thumbnailUrl: "https://via.placeholder.com/150",
      recommends: 10,
    },
    {
      id: 3,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      author: "admin",
      views: 10,
      comments: 5,
      thumbnailUrl: "https://via.placeholder.com/150",
      recommends: 10,
    },

    {
      id: 4,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      author: "관리자",
      views: 10,
      comments: 2,
      thumbnailUrl: "https://via.placeholder.com/150",
      recommends: 10,
    },

    {
      id: 5,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      author: "관리자2",
      views: 10,
      comments: 2000,
      thumbnailUrl: "https://via.placeholder.com/150",
      recommends: 10,
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
    <NoticeList>
      {lists.map((notice) => (
        <NoticeCard key={notice.id}>
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
            <CarDdate>{notice.date}</CarDdate>
          </ContentContainer>
        </NoticeCard>
      ))}
    </NoticeList>
  );
};

export default CardList;
