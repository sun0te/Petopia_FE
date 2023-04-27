import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 25px;
  margin: 0;
  margin-right: 80px;
`;

const SearchBar = styled.input`
  width: 214px;
  height: 25px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #dee2e7;
  border-radius: 20px;
`;

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const NoticeCard = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #c9c1c1;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  height: 70%;
  @media screen and (min-width: 768px) {
    flex: 1;
    margin: 10px;
    height: 200px;
    max-width: 400px;
  }
`;

const Thumbnail = styled.img`
  width: 130px;
  height: 83px;
  margin-right: 10px;
  margin-top: 4px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardTitle = styled.h4`
  margin: 0;
  margin-top: 5px;
  margin-left: 10px;
`;

const CardContent = styled.p`
  margin: 5px 10px;
  font-size: 13px;
`;

const CarDdate = styled.p`
  margin: 5px 10px;
  font-size: 12px;
  margin-top: 15px;
  font-color: ;
`;

const NoticeBoard = () => {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "테스트입니다",
      content: "테스트",
      date: "2023-04-25",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "테스트입니다2",
      content: "테스트",
      date: "2023-04-23",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "테스트입니다3",
      content: "테스트",
      date: "2023-04-20",
      thumbnailUrl: "https://via.placeholder.com/150",
    },

    {
      id: 4,
      title: "테스트입니다4",
      content: "테스트",
      date: "2023-04-20",
      thumbnailUrl: "https://via.placeholder.com/150",
    },

    {
      id: 5,
      title: "테스트입니다4",
      content: "테스트",
      date: "2023-04-20",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
  ]);

  useEffect(() => {
    axios
      .get("/notices")
      .then((response) => {
        setNotices(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <NoticeContainer>
      <TitleWrapper>
        <Title>공지사항</Title>
        <SearchBar type="text" placeholder="검색어를 입력하세요" />
      </TitleWrapper>
      <NoticeList>
        {notices.map((notice) => (
          <NoticeCard key={notice.id}>
            <Thumbnail src={notice.thumbnailUrl} alt={notice.title} />
            <ContentContainer>
              <CardTitle>{notice.title}</CardTitle>
              <CardContent>{notice.content}</CardContent>
              <CarDdate>{notice.date}</CarDdate>
            </ContentContainer>
          </NoticeCard>
        ))}
      </NoticeList>
    </NoticeContainer>
  );
};

export default NoticeBoard;
