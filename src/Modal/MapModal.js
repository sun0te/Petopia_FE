import React, { useState } from "react";

const Modal1 = ({ open, close, city, setCity, county, setCounty }) => {
  const [view, setView] = useState(0); // 지역선택 useState , view=0 city_name 리스트 view=1 county_name 리스트
  const [citycheck1, setCitycheck1] = useState(""); // 지역선택 로직을 위한 ustState1
  const [citycheck2, setCitycheck2] = useState([]); // 지역선택 로직을 위한 ustState2

  // 각 county_name에 해당하는 county_name 목록
  const seoul = [
    // 서울
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];

  const gyeonggi = [
    // 경기
    "가평군",
    "고양시 덕양구",
    "고양시 일산동구",
    "고양시 일산서구",
    "과천시",
    "광명시",
    "광주시",
    "구리시",
    "군포시",
    "김포시",
    "남양주시",
    "동두천시",
    "부천시",
    "성남시 분당구",
    "성남시 수정구",
    "성남시 중원구",
    "수원시 권선구",
    "수원시 영통구",
    "수원시 장안구",
    "수원시 팔달구",
    "시흥시",
    "안산시 단원구",
    "안산시 상록구",
    "안성시",
    "안양시 동안구",
    "안양시 만안구",
    "양주시",
    "양평군",
    "여주시",
    "연천군",
    "오산시",
    "용인시 기흥구",
    "용인시 수지구",
    "용인시 처인구",
    "의왕시",
    "의정부시",
    "이천시",
    "파주시",
    "평택시",
    "포천시",
    "하남시",
    "화성시",
  ];

  const gangwondo = [
    // 강원도
    "강릉시",
    "고성군",
    "동해시",
    "삼척시",
    "속초시",
    "양구군",
    "양양군",
    "영월군",
    "원주시",
    "인제군",
    "정선군",
    "철원군",
    "춘천시",
    "태백시",
    "평창군",
    "홍천군",
    "화천군",
    "황성군",
  ];

  const chungbuk = [
    // 충북
    "괴산군",
    "단양군",
    "보은군",
    "영동군",
    "옥천군",
    "음성군",
    "제천시",
    "증평군",
    "진천군",
    "청주시 상당구",
    "청주시 서원구",
    "청주시 청원구",
    "청주시 흥덕구",
    "충주시",
  ];

  const chungnam = [
    // 충남
    "계룡시",
    "공주시",
    "금산군",
    "논산시",
    "당진시",
    "보령시",
    "부여군",
    "서산시",
    "서천군",
    "아산시",
    "예산군",
    "천안시 동남구",
    "천안시 서북구",
    "청양군",
    "태안군",
    "홍성군",
  ];

  const gyeongbuk = [
    // 경북
    "경산시",
    "경주시",
    "고령군",
    "구미시",
    "군위군",
    "김천시",
    "문경시",
    "봉화군",
    "상주시",
    "성주군",
    "안동시",
    "영덕군",
    "영양군",
    "영주시",
    "영천시",
    "예천군",
    "울릉군",
    "울진군",
    "의성군",
    "청도군",
    "칠곡군",
    "포항시 남구",
    "포항시 북구",
  ];

  const gyeongnam = [
    // 경남
    "거제시",
    "거창군",
    "고성군",
    "김해시",
    "남해군",
    "밀양시",
    "사천시",
    "산청군",
    "양산시",
    "의령군",
    "진주시",
    "창녕군",
    "창원시 마산합포구",
    "창원시 마산회원구",
    "창원시 성산구",
    "창원시 의창구",
    "창원시 진해구",
    "통영시",
    "하동군",
    "함안군",
    "함양군",
  ];

  const jeonbuk = [
    // 전북
    "고창군",
    "군산시",
    "김제시",
    "남원시",
    "무주군",
    "부안군",
    "순창군",
    "완주군",
    "익산시",
    "임실군",
    "장수군",
    "전주시 덕진구",
    "전주시 완산구",
    "정읍시",
    "진안군",
  ];

  const jeonnam = [
    // 전남
    "강진군",
    "고흥군",
    "곡성군",
    "광양시",
    "구례군",
    "나주시",
    "담양군",
    "목포시",
    "무안군",
    "보성군",
    "순천시",
    "신안군",
    "여수시",
    "영광군",
    "영암군",
    "완도군",
    "장성군",
    "장흥군",
    "진도군",
    "함평군",
    "해남군",
    "화순군",
  ];

  const daegu = [
    // 대구
    "남구",
    "달서구",
    "달성군",
    "동구",
    "북구",
    "서구",
    "수성구",
    "중구",
  ];

  const busan = [
    // 부산
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구",
  ];

  // 울산
  const ulsan = ["남구", "동구", "북구", "울주군", "중구"];

  // 대전
  const daejeon = ["대덕구", "동구", "서구", "유성구", "중구"];

  // 광주
  const gwangju = ["광산구", "남구", "동구", "북구", "서구"];

  // 인천
  const incheon = [
    "강화군",
    "계양구",
    "남동구",
    "동구",
    "미추홀구",
    "부평구",
    "서구",
    "연수구",
    "옹진군",
    "중구",
  ];

  // 제주
  const jeju = ["서귀포시", "제주시"];

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal mapmodal" : "mapmodal"}>
      {open ? (
        <div className="mapModalContainer">
          <div className="mapModalHeader">
            <b>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;지역선택</b>
            <button
              className="mapModalBtn1"
              onClick={() => {
                setView(0); // city_name을 선택하고 나가기 후 지역선택하면 county_name 부터 나오는 현상 해결
                close();
              }}
            >
              &times;
            </button>
          </div>
          <div className="mapModalMain">
            {view === 0 && (
              <ul className="mapModalList">
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("서울특별시");
                    setCitycheck2(seoul);
                  }}
                >
                  서울특별시
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("경기도");
                    setCitycheck2(gyeonggi);
                  }}
                >
                  경기도
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("강원도");
                    setCitycheck2(gangwondo);
                  }}
                >
                  강원도
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("충청북도");
                    setCitycheck2(chungbuk);
                  }}
                >
                  충청북도
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("충청남도");
                    setCitycheck2(chungnam);
                  }}
                >
                  충청남도
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("경상북도");
                    setCitycheck2(gyeongbuk);
                  }}
                >
                  경상북도
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("경상남도");
                    setCitycheck2(gyeongnam);
                  }}
                >
                  경상남도
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("전라북도");
                    setCitycheck2(jeonbuk);
                  }}
                >
                  전라북도
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("전라남도");
                    setCitycheck2(jeonnam);
                  }}
                >
                  전라남도
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("광주광역시");
                    setCitycheck2(gwangju);
                  }}
                >
                  광주광역시
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("대구광역시");
                    setCitycheck2(daegu);
                  }}
                >
                  대구광역시
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("대전광역시");
                    setCitycheck2(daejeon);
                  }}
                >
                  대전광역시
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("부산광역시");
                    setCitycheck2(busan);
                  }}
                >
                  부산광역시
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("울산광역시");
                    setCitycheck2(ulsan);
                  }}
                >
                  울산광역시
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("인천광역시");
                    setCitycheck2(incheon);
                  }}
                >
                  인천광역시
                </li>
                <li
                  onClick={() => {
                    setView(1);
                    setCitycheck1("제주특별자치도");
                    setCitycheck2(jeju);
                  }}
                >
                  제주특별자치도
                </li>
                <li
                  onClick={() => {
                    setCity("세종특별자치시");
                    setCounty("");
                    close();
                  }}
                >
                  세종특별자치시
                </li>
              </ul>
            )}
            {view === 1 && (
              <ul className="mapModalList">
                {citycheck2.map((a, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setView(0);
                      setCity(citycheck1);
                      setCounty(a);
                      close();
                    }}
                  >
                    {citycheck2[i]}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mapModalFooter">
            <button
              className="mapModalBtn2"
              onClick={() => {
                setView(0);
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

export default Modal1;
