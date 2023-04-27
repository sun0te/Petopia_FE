import React, { useEffect, useState } from "react";
import "../Styles/AccompanyingList.css";
import { useNavigate } from "react-router-dom";

const AccompanyingList = ({ list }) => {
  const [리뷰이미지, set리뷰이미지] = useState(["/카페1.jpg"]);

  // 별점 테스트
  const stars = () => {
    const star = [];
    for (var i = 0; i < 5; i++) {
      star.push(<b key={i}>⭐</b>);
    }
    return star;
  };

  return (
    <div className="listcontainer">
      <div className="listimage">
        <img className="imgtest" src={리뷰이미지} alt="1"></img>
      </div>
      <div className="listcontent">
        <b>{list.지역}</b>
        <br />
        <b>{list.시설명}</b>
        <br />
        <b>{list.카테고리}</b>
        <div>{stars()}</div>
      </div>
    </div>
  );
};

export default AccompanyingList;
