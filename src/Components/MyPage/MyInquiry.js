import React, { useEffect } from "react";
import MyInquiryMain from "./MyInquiryMain";
import MyInquiryWrite from "./MyInquiryWrite";
import MyInquiryDetail from "./MyInquiryDetail";
import { useState } from "react";
import MyInquiryUpdate from "./MyInquiryUpdate";
import axios from "axios";
import Header from "../Header.js";
import Footer from "../Footer.js";
import BgLeft from "../BgLeft.js";
import "../../Styles/MyInquiry.css";

const MyInquiry = () => {
  const [inquiryAction, setInquiryAction] = useState(0);

  const [inquirydata, setInquirydata] = useState({});

  // DB ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 연동 테스트 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  const inquirylogin = () => {
    window.sessionStorage.setItem("id", "test");
  };

  const inquirylogout = () => {
    window.sessionStorage.clear();
  };

  // 문의 리스트 불러오기
  const [inquirydb, setInquirydb] = useState([]);

  useEffect(() => {
    inquirydbtest();
  }, []);

  const inquirydbtest = () => {
    axios
      .get("/inquirylist", {
        params: {
          // username: "test1", // 로그인 구현시 수정
          username: sessionStorage.getItem("email"),
        },
      })
      .then((res) => {
        const { data } = res;
        setInquirydb(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // DB ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 연동 테스트 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section>
          {inquiryAction === 0 && ( // 문의 리스트
            <MyInquiryMain
              setInquiryAction={setInquiryAction}
              setInquirydata={setInquirydata}
              inquirydb={inquirydb}
            />
          )}
          {inquiryAction === 1 && ( // 문의 작성
            <MyInquiryWrite
              inquirydbtest={inquirydbtest}
              setInquiryAction={setInquiryAction}
            />
          )}
          {inquiryAction === 2 && ( // 문의 상세내용
            <MyInquiryDetail
              inquirydata={inquirydata}
              setInquiryAction={setInquiryAction}
              inquirydb={inquirydb}
              inquirydbtest={inquirydbtest}
            />
          )}
          {inquiryAction === 3 && ( // 문의내용 수정
            <MyInquiryUpdate
              inquirydata={inquirydata}
              setInquiryAction={setInquiryAction}
              inquirydbtest={inquirydbtest}
              setInquirydata={setInquirydata}
            />
          )}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default MyInquiry;
