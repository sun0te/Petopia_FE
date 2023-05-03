import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import UserRegion from "../Pages/UserRegion";
import "../Styles/Main.css";
import { Route, Routes } from "react-router-dom";
import BgLeft from "../Components/BgLeft.js";

const UserBoard = () => {
  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section>
          <div>
            <Routes>
              <Route path="userboard/userregion" element={<UserRegion />} />
            </Routes>
            <div>지역별 커뮤니티 게시판</div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default UserBoard;
