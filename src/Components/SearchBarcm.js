import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { Form } from "react-bootstrap";

const SearchBar = styled(Form.Control)`
  width: 214px;
  height: 25px;
  padding: 5px 30px 5px 10px;
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

  const handleSearch = (event) => {
    // 검색 기능 추후 작성
    console.log("검색어: ", event.target.value);
  };

  return (
    <>
      {search.map((search) => (
        <div style={{ position: "relative" }}>
          <BsSearch
            style={{
              position: "absolute",
              left: "88%",
              top: "50%",
              transform: "translateY(-58%)",
              fontSize: "18px",
              color: "#6c757d",
              cursor: "pointer", 
            }}
            onClick={handleSearch}
          />
          <SearchBar
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={handleSearch} // 검색어 입력 시 검색 로직 호출
          />
        </div>
      ))}
    </>
  );
};

export default SearchBarcm;