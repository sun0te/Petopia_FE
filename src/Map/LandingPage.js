import React, { useState } from "react";
import Kakao from "./Kakao";
import { useNavigate } from "react-router-dom";
import "./Kakao.css";

const LandingPage = () => {
  let navigate = useNavigate();

  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          돌아가기
        </button>
      </form>
      <Kakao searchPlace={Place} />
    </>
  );
};

export default LandingPage;
