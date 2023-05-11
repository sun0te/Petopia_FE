import React, { useState } from "react";

const Modal1 = ({
  open,
  close,
  city,
  setCity,
  county,
  setCounty,
  location,
  setLocation,
  maplevel,
  setMaplevel,
}) => {
  const [view, setView] = useState(0); // 지역선택 useState , view=0 city_name 리스트 view=1 county_name 리스트
  const [citycheck1, setCitycheck1] = useState(""); // 지역선택 로직을 위한 ustState1
  const [citycheck2, setCitycheck2] = useState([]); // 지역선택 로직을 위한 ustState2

  // 각 county_name에 해당하는 county_name 목록
  const seoul = [
    // 서울
    { region: "강남구", lat: 37.4966645, lng: 127.0629804 },
    { region: "강동구", lat: 37.5504483, lng: 127.1470117 },
    { region: "강북구", lat: 37.6434801, lng: 127.0111839 },
    { region: "강서구", lat: 37.5612346, lng: 126.8228132 },
    { region: "관악구", lat: 37.4673709, lng: 126.9453359 },
    { region: "광진구", lat: 37.5467284, lng: 127.0857543 },
    { region: "구로구", lat: 37.4944134, lng: 126.8563336 },
    { region: "금천구", lat: 37.4605655, lng: 126.9008183 },
    { region: "노원구", lat: 37.6525076, lng: 127.075042 },
    { region: "도봉구", lat: 37.6691065, lng: 127.0323527 },
    { region: "동대문구", lat: 37.5819561, lng: 127.054846 },
    { region: "동작구", lat: 37.4988794, lng: 126.9516345 },
    { region: "마포구", lat: 37.5593115, lng: 126.9082589 },
    { region: "서대문구", lat: 37.5777796, lng: 126.9390623 },
    { region: "서초구", lat: 37.4732933, lng: 127.0312101 },
    { region: "성동구", lat: 37.5510171, lng: 127.0410394 },
    { region: "성북구", lat: 37.6056991, lng: 127.0175664 },
    { region: "송파구", lat: 37.5056205, lng: 127.1152992 },
    { region: "양천구", lat: 37.5247402, lng: 126.8553909 },
    { region: "영등포구", lat: 37.5223245, lng: 126.9101692 },
    { region: "은평구", lat: 37.6191784, lng: 126.9270142 },
    { region: "종로구", lat: 37.5949159, lng: 126.977339 },
    { region: "중구", lat: 37.5601443, lng: 126.9959649 },
    { region: "중랑구", lat: 37.5978139, lng: 127.0928927 },
  ];

  const gyeonggi = [
    // 경기
    { region: "가평군", lat: 37.8184719, lng: 127.4502156 },
    { region: "고양시 덕양구", lat: 37.6559043, lng: 126.8787022 },
    { region: "고양시 일산동구", lat: 37.6797757, lng: 126.7973282 },
    { region: "고양시 일산서구", lat: 37.6802517, lng: 126.727862 },
    { region: "과천시", lat: 37.4338294, lng: 127.0027656 },
    { region: "광명시", lat: 37.4451612, lng: 126.8646989 },
    { region: "광주시", lat: 37.4030854, lng: 127.3011624 },
    { region: "구리시", lat: 37.5990186, lng: 127.1313079 },
    { region: "군포시", lat: 37.3434691, lng: 126.9211003 },
    { region: "김포시", lat: 37.6818227, lng: 126.6265338 },
    { region: "남양주시", lat: 37.6625097, lng: 127.2436632 },
    { region: "동두천시", lat: 37.916543, lng: 127.0779171 },
    { region: "부천시", lat: 37.5042687, lng: 126.7886531 },
    { region: "성남시 분당구", lat: 37.3793356, lng: 127.1060411 },
    { region: "성남시 수정구", lat: 37.4352626, lng: 127.1041262 },
    { region: "성남시 중원구", lat: 37.4334306, lng: 127.1639052 },
    { region: "수원시 권선구", lat: 37.2605171, lng: 126.9797665 },
    { region: "수원시 영통구", lat: 37.2750488, lng: 127.0567165 },
    { region: "수원시 장안구", lat: 37.3140058, lng: 127.0034702 },
    { region: "수원시 팔달구", lat: 37.2774643, lng: 127.0162335 },
    { region: "시흥시", lat: 37.3864796, lng: 126.7841675 },
    { region: "안산시 단원구", lat: 37.3227276, lng: 126.7914059 },
    { region: "안산시 상록구", lat: 37.3159728, lng: 126.8707713 },
    { region: "안성시", lat: 37.035033, lng: 127.3027301 },
    { region: "안양시 동안구", lat: 37.4003896, lng: 126.9554961 },
    { region: "안양시 만안구", lat: 37.4041321, lng: 126.9113846 },
    { region: "양주시", lat: 37.8086632, lng: 127.001143 },
    { region: "양평군", lat: 37.5180465, lng: 127.5792445 },
    { region: "여주시", lat: 37.3024585, lng: 127.6157502 },
    { region: "연천군", lat: 38.0964416, lng: 127.0275846 },
    { region: "오산시", lat: 37.1632991, lng: 127.0513324 },
    { region: "용인시 기흥구", lat: 37.2674312, lng: 127.1213604 },
    { region: "용인시 수지구", lat: 37.3334612, lng: 127.0715186 },
    { region: "용인시 처인구", lat: 37.2033411, lng: 127.2529419 },
    { region: "의왕시", lat: 37.3624626, lng: 126.9896996 },
    { region: "의정부시", lat: 37.7361884, lng: 127.0684356 },
    { region: "이천시", lat: 37.2097769, lng: 127.4810494 },
    { region: "파주시", lat: 37.8544244, lng: 126.8115232 },
    { region: "평택시", lat: 37.0159677, lng: 126.9941853 },
    { region: "포천시", lat: 37.9697852, lng: 127.2502925 },
    { region: "하남시", lat: 37.5228824, lng: 127.2059921 },
    { region: "화성시", lat: 37.1616306, lng: 126.8654604 },
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
            <b>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;지역선택</b>
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
                      setCounty(a.region);
                      setLocation({
                        latitude: a.lat,
                        longitude: a.lng,
                      });
                      setMaplevel(5);
                      close();
                    }}
                  >
                    {citycheck2[i].region}
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
