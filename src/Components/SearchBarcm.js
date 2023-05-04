import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="검색할 내용을 입력하세요"
              className="me-1 w-75 searchBar"
              aria-label="Search"
              onChange={handleSearch}
            />
            <Button
              className="searchBtn"
              variant="outline-primary"
              size="sm"
              onClick={handleSearch}
            >
              검색
            </Button>
          </Form>
        </div>
      ))}
    </>
  );
};

export default SearchBarcm;
