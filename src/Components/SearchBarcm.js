import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchBar = styled.input`
  width: 214px;
  height: 25px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #dee2e7;
  border-radius: 20px;
`;

const SearchBarcm = () => {
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
    <>
      {search.map((search) => (
        <SearchBar type="text" placeholder="검색어를 입력하세요" />
      ))}
    </>
  );
};

export default SearchBarcm;
