import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";

const UserMypage = () => {
  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section>
          {/* 여기에 모바일 화면 
          개발하시면 됩니다*/}
          <p>마이페이지 입니다</p>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default UserMypage;
