import React, { useState } from "react";

import "../../Styles/RegionModal.css";

const RegionModal = ({ open, close }) => {
  const [cityChk1, setCityChk1] = useState("");
  return (
    <div className={open ? "openRegion regionModal" : "regionModal"}>
      {open ? (
        <div className="regionModalContainer">
          <div className="regionModalHeader">
            <b>지역선택</b>
            <button
              className="regionModalBtn1"
              onClick={() => {
                close();
              }}
            >
              &times;
            </button>
          </div>
          <div className="regionModalMain">
            {/* 지역 리스트 */}
            <ul className="regionModalList">
              <li
                onClick={() => {
                  setCityChk1("서울");
                  close();
                }}
              >
                서울
              </li>
              <li
                onClick={() => {
                  setCityChk1("경기도(북)");
                  close();
                }}
              >
                경기도(북)
              </li>
              <li
                onClick={() => {
                  setCityChk1("경기도(남)");
                  close();
                }}
              >
                경기도(남)
              </li>
              <li
                onClick={() => {
                  setCityChk1("강원도");
                  close();
                }}
              >
                강원도
              </li>
              <li
                onClick={() => {
                  setCityChk1("충청북도");
                  close();
                }}
              >
                충청북도
              </li>
              <li
                onClick={() => {
                  setCityChk1("충청남도");
                  close();
                }}
              >
                충청남도
              </li>
              <li
                onClick={() => {
                  setCityChk1("경상북도");
                  close();
                }}
              >
                경상북도
              </li>
              <li
                onClick={() => {
                  setCityChk1("경상남도");
                  close();
                }}
              >
                경상남도
              </li>
              <li
                onClick={() => {
                  setCityChk1("전라북도");
                  close();
                }}
              >
                전라북도
              </li>
              <li
                onClick={() => {
                  setCityChk1("전라남도");
                  close();
                }}
              >
                전라남도
              </li>
              <li
                onClick={() => {
                  setCityChk1("광주");
                  close();
                }}
              >
                광주
              </li>
              <li
                onClick={() => {
                  setCityChk1("대구");
                  close();
                }}
              >
                대구
              </li>
              <li
                onClick={() => {
                  setCityChk1("대전");
                  close();
                }}
              >
                대전
              </li>
              <li
                onClick={() => {
                  setCityChk1("부산");
                  close();
                }}
              >
                부산
              </li>
              <li
                onClick={() => {
                  setCityChk1("울산");
                  close();
                }}
              >
                울산
              </li>
              <li
                onClick={() => {
                  setCityChk1("인천");
                  close();
                }}
              >
                인천
              </li>
              <li
                onClick={() => {
                  setCityChk1("제주");
                  close();
                }}
              >
                제주
              </li>
              <li
                onClick={() => {
                  setCityChk1("세종");
                  close();
                }}
              >
                세종
              </li>
            </ul>
          </div>
          <div className="regionModalFooter">
            <button
              className="regionModalBtn2"
              onClick={() => {
                close();
              }}
            >
              닫기
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RegionModal;
