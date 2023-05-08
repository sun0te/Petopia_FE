import React from "react";
import MyInquiryMain from "./MyInquiryMain";
import MyInquiryWrite from "./MyInquiryWrite";
import MyInquiryDetail from "./MyInquiryDetail";
import { useState } from "react";
import MyInquiryUpdate from "./MyInquiryUpdate";
import axios from "axios";

const MyInquiry = () => {
  const [inquiryAction, setInquiryAction] = useState(0);
  const [inquirytest, setInquirytest] = useState([
    // 테스트 문의 데이터
    {
      title: "제목1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2023-05-02",
      answer: 0,
    },
    {
      title: "제목2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2023-05-03",
      answer: 0,
    },
    {
      title: "제목3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "2023-05-04",
      answer: 1,
      answerContent:
        "펫토피아 XXX입니다. 펫토피아를 이용해주시는 고객님께 감사의 말씀드립니다.",
    },
  ]);
  const [inquirytest2, setInquirytest2] = useState({});

  // DB ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 연동 테스트 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const [inquirydb, setInquirydb] = useState([]);
  const inquirydbtest = () => {
    axios
      .get("/inquirylist", {
        params: { username: "test" },
      })
      .then((res) => {
        // console.log("데이터 =>", res.data);
        const { data } = res.data;
        setInquirydb(data);
        console.log(inquirydb);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const inquirylogin = () => {
    window.sessionStorage.setItem("id", "test");
  };

  const inquirylogout = () => {
    window.sessionStorage.clear();
  };

  return (
    <>
      {inquiryAction === 0 && ( // 문의 리스트
        <MyInquiryMain
          inquirytest={inquirytest}
          setInquiryAction={setInquiryAction}
          setInquirytest2={setInquirytest2}
        />
      )}
      {inquiryAction === 1 && ( // 문의 작성
        <MyInquiryWrite
          inquirytest={inquirytest}
          setInquirytest={setInquirytest}
          setInquiryAction={setInquiryAction}
        />
      )}
      {inquiryAction === 2 && ( // 문의 상세내용
        <MyInquiryDetail
          inquirytest2={inquirytest2}
          setInquiryAction={setInquiryAction}
        />
      )}
      {inquiryAction === 3 && ( // 문의내용 수정
        <MyInquiryUpdate
          inquirytest2={inquirytest2}
          setInquiryAction={setInquiryAction}
        />
      )}
      <button
        onClick={() => {
          inquirydbtest();
        }}
      >
        테스트
      </button>
      <button
        onClick={() => {
          inquirylogin();
        }}
      >
        로그인테스트
      </button>
      <button
        onClick={() => {
          inquirylogout();
        }}
      >
        로그아웃
      </button>
    </>
  );
};

export default MyInquiry;
