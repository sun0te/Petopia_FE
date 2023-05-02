import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Main.css";
import "../../Styles/UserRegion.css";
import UserRegionBoard from "../../Pages/UserRegionBoard";

const RegionLocationSelect = () => {
  const moveRegion = useNavigate();
  const [regionClick, setRegionClick] = useState();
  //const [prevClick, setPrevClick] = useState();

  const GetClick = (e) => {
    setRegionClick(e.target.id);
    console.log(e.target.id);
    moveRegion("/userregionboard");
  };

  return (
    <>
      <div className="local_title">지역별 모임 게시판</div>
      <div className="wrapper1">
        <UserRegionBoard className="content" id="서울" onClick={GetClick}>
          <div className="locationTag">서울</div>
          <div className="content_title">서울 지역 모임 게시판 입니다.</div>
        </UserRegionBoard>
        <UserRegionBoard className="content" id="경기 북부" onClick={GetClick}>
          <div className="locationTag">경기(북)</div>
          <div className="content_title">경기 북부지역 모임 게시판 입니다.</div>
        </UserRegionBoard>
        <UserRegionBoard className="content" id="경기 남부" onClick={GetClick}>
          <div className="locationTag">경기(남)</div>
          <div className="content_title">경기 남부지역 모임 게시판 입니다.</div>
        </UserRegionBoard>
      </div>
    </>
  );
};

export default RegionLocationSelect;
