import React, { useEffect, useState } from "react";
import MyInquiryAdminList from "./MyInquiryAdminList";
import MyInquiryAdminDetail from "./MyInquiryAdminDetail";
import "../../Styles/MyInquiryAdmin.css";
import HeaderAdmin from "../HeaderAdmin.js";
import Footer from "../Footer.js";
import BgLeft from "../BgLeft.js";
import axios from "axios";

const MyInquiryAdmin = () => {
  const [inquiryAdminAction, setInquiryAdminAction] = useState(0);
  const [inquiryAdminList, setInquiryAdminList] = useState([]);
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
      {/* <BgLeft />
      <main className="admin-main">
        <HeaderAdmin />
        <section className="admin-page"> */}
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
      {/* </section>
        <Footer />
      </main> */}
    </>
  );
};

export default MyInquiryAdmin;
