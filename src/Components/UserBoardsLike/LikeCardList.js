import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const CardList = styled.div`
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

const LikeCard = styled.div`
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
  flex-shrink: 0;
  margin-bottom: 0;
  border-radius: 10px;
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

const LikeCardList = ({ interestList }) => {
  const toBoardDetail = () => {
    window.location.href = "/boarddetail";
  };
  const [lists, setlists] = useState([
    {
      id: 1,
      title: "귀여운 강아지",
      content: "이 아이는 정말 귀엽죠!",
      date: "2023-04-25",
      author: "홍길동",
      views: 200,
      comments: 37,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1562176546-95420556c872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      recommends: 70,
    },
    {
      id: 2,
      title: "귀여운 고양이",
      content: "이 아이도 정말 귀여워요!",
      date: "2023-04-28",
      author: "김철수",
      views: 150,
      comments: 20,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
      recommends: 50,
    },
    {
      id: 3,
      title: "귀여운 햄스터",
      content: "이 아이는 귀여움의 끝판왕!",
      date: "2023-04-30",
      author: "이영희",
      views: 100,
      comments: 15,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      recommends: 30,
    },
    {
      id: 4,
      title: "귀여운 여우",
      content: "이 아이도 정말 귀여워요!",
      date: "2023-05-02",
      author: "박철호",
      views: 80,
      comments: 10,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1506657047594-19a6c6a72bd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      recommends: 20,
    },
    {
      id: 5,
      title: "귀여운 앵무새",
      content: "이 아이도 정말 귀여워요!",
      date: "2023-05-05",
      author: "김민지",
      views: 70,
      comments: 8,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1604826010917-65cf53d6249b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      recommends: 15,
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("/lists")
  //     .then((response) => {
  //       setlists(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      {interestList.length !== 0 ? (
        <CardList>
          {interestList.map((community) => (
            <Link
              className="linkstyle"
              to={`/recomend_best?id=${community.id}`}
              state={{ boardid: community.id }}
              key={community.id}
            >
              <LikeCard
              // onClick={toBoardDetail}
              >
                <Thumbnail
                  src={
                    process.env.PUBLIC_URL +
                    "/uploadimgs/" +
                    community.thumbnailImage
                  }
                  alt={community.title}
                />
                <ContentContainer>
                  <div className="cardti">
                    <CardTitle
                      style={{
                        maxWidth: "170px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {community.title}
                    </CardTitle>
                    {/* 답글 수 */}
                    {/* <CardComments>({community.recommends})</CardComments> */}
                  </div>
                  <CardInfoContainer>
                    <CardInfo>작성자 {community.author.nickname}</CardInfo>
                    <CardInfo>조회수 {community.views}</CardInfo>
                    <CardInfo>추천 수 {community.recommends}</CardInfo>
                  </CardInfoContainer>
                  <CardDate>
                    {new Date(community.updatedAt).toISOString().split("T")[0]}
                  </CardDate>
                </ContentContainer>
              </LikeCard>
            </Link>
          ))}
        </CardList>
      ) : (
        <div className="inquiryNone">저정한 게시글이 없습니다.</div>
      )}
    </>
  );
};

export default LikeCardList;
