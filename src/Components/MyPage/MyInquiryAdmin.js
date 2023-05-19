import React, { useEffect, useState } from "react";
import MyInquiryAdminList from "./MyInquiryAdminList";
import MyInquiryAdminWrite from "./MyInquiryAdminWrite";
import MyInquiryAdminDetail from "./MyInquiryAdminDetail";
import "../../Styles/MyInquiryAdmin.css";
import HeaderAdmin from "../HeaderAdmin.js";
import Footer from "../Footer.js";
import BgLeft from "../BgLeft.js";
import axios from "axios";

const MyInquiryAdmin = () => {
  const [inquiryAdminAction, setInquiryAdminAction] = useState(0);
  const [inquiryAdminList, setInquiryAdminList] = useState([
    // 테스트 문의 데이터 ( 관리자 문의 리스트는 전체를 가져와야함 )
    // {
    //   title: "제목1",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   createDate: "2023-05-02",
    //   answer: 0,
    //   answerContent: "",
    //   username: "test1",
    // },
    // {
    //   title: "제목2",
    //   content:
    //     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //   createDate: "2023-05-03",
    //   answer: 0,
    //   answerContent: "",
    //   username: "test2",
    // },
    // {
    //   title: "제목3",
    //   content:
    //     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //   createDate: "2023-05-04",
    //   answer: 1,
    //   answerContent:
    //     "펫토피아 XXX입니다. 펫토피아를 이용해주시는 고객님께 감사의 말씀드립니다.",
    //   username: "test3",
    // },
    // {
    //   title: "제목4",
    //   content:
    //     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //   createDate: "2023-05-04",
    //   answer: 0,
    //   answerContent: "",
    //   username: "test3",
    // },
  ]);
  const [inquiryAdminData, setInquiryAdminData] = useState({});

  const getInquiryListAll = () => {
    axios
      .get("/inquiryadminlist")
      .then((res) => {
        const { data } = res;
        setInquiryAdminList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getInquiryListAll();
  }, []);

  return (
    <>
      <BgLeft />

      <main className="admin-main">
        <HeaderAdmin />
        <section className="admin-page">
          <div className="admin-Inquiry-container">
            {inquiryAdminAction === 0 && ( // 문의 리스트
              <MyInquiryAdminList
                inquiryAdminList={inquiryAdminList}
                setInquiryAdminData={setInquiryAdminData}
                setInquiryAdminAction={setInquiryAdminAction}
              />
            )}
            {inquiryAdminAction === 1 && ( // 문의 상세내용
              <MyInquiryAdminDetail
                inquiryAdminList={inquiryAdminList}
                inquiryAdminData={inquiryAdminData}
                setInquiryAdminData={setInquiryAdminData}
                setInquiryAdminAction={setInquiryAdminAction}
                getInquiryListAll={getInquiryListAll}
              />
            )}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default MyInquiryAdmin;
