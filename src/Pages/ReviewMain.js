import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/ReviewMain.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import StarRating from "../Components/StarRating.js";
import MapReviewList from "./MapReviewList.js";
import MapReviewWrite from "../Components/MapReviewWrite.js";
import { FaAngleRight } from "react-icons/fa";

const ReviewMain = () => {
  const { id } = useParams();
  const [placedata, setPlacedata] = useState({});
  const [reviewlocation, setReviewlocation] = useState({
    // 랜더링시 좌표보다 지도가 먼저 랜더링되어 지도 깨짐현상 방지
    lat: 37.498004414546934,
    lng: 127.02770621963765,
  });
  const [placehomepage, setPlacehomepage] = useState("");
  const [homepageCheck, setHomepageCheck] = useState("");

  // DB로부터 받아온 리뷰 데이터 저장 useState
  const [reviewList, setReviewList] = useState([]);

  const [ratingScore, setRatingScore] = useState(0); // 리뷰 별점 계산값

  const getPlace = () => {
    axios
      .get("/getplace", {
        params: { id: id },
      })
      .then((res) => {
        // console.log("데이터 = >", res.data);
        const { data } = res;
        setPlacedata(data);
        setReviewlocation({
          lat: data.lat,
          lng: data.lng,
        });
        setPlacehomepage(res.data.homepage);
        if (res.data.homepage.includes(",")) {
          // db에서 데이터 불러올 때 홈페이지가 여러개인 경우 첫번째 링크만 자르는 작업
          const arraytest = res.data.homepage.split(",");
          setHomepageCheck(arraytest[0]);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getPlaceReview = () => {
    axios
      .get("/mapReviewList", {
        params: { id: id },
      })
      .then((res) => {
        const { data } = res;
        setReviewList(data);
        const reviewRatingList = []; // 리뷰 점수
        for (var i = 0; i < data.length; i++) {
          reviewRatingList.push(data[i].rating);
        }
        if (reviewRatingList.length !== 0) {
          // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 별점 계산 코드 시작 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
          var j = 0;
          for (var i = 0; i < reviewRatingList.length; i++) {
            j += reviewRatingList[i];
          }
          j = Math.round((j / reviewRatingList.length) * 10) / 10;
          setRatingScore(j);
          // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 별점 계산 코드 끝 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        } else {
          setRatingScore(0);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const [reviewAction, setReviewAction] = useState(0); // 0 : 업체상세 , 1 : 리뷰 리스트 , 2 : 리뷰 작성

  useEffect(() => {
    getPlace();
    getPlaceReview();
  }, []);

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section>
          {reviewAction === 0 ? (
            <Map // 지도를 표시할 Container
              center={{
                // 지도의 중심좌표
                lat: reviewlocation.lat,
                lng: reviewlocation.lng,
              }}
              style={{
                // 지도의 크기
                width: "360px",
                height: "350px",
              }}
              level={3} // 지도의 확대 레벨
            >
              <MapMarker // 마커를 생성합니다
                position={{
                  // 마커가 표시될 위치입니다
                  lat: placedata.lat,
                  lng: placedata.lng,
                }}
              />
            </Map>
          ) : null}
          {reviewAction === 0 ? (
            <>
              <div className="reviewMainTitle">
                <span>{placedata.facility_name}</span>
              </div>
              <div className="reviewMainRating">
                <StarRating ratingScore={ratingScore} />
                {reviewList.length !== 0 ? (
                  <b className="reviewMainRatingScore">({ratingScore})</b>
                ) : (
                  <b className="reviewMainRatingScore">(0)</b>
                )}

                {/* ㅡㅡㅡ 수정 예정 ㅡㅡㅡ */}
                <span
                  className="reviewMainCounting"
                  onClick={() => {
                    // navigate(-1); // 리뷰페이지로 이동
                    setReviewAction(1);
                  }}
                >
                  리뷰 {reviewList.length}개
                  <FaAngleRight className="reviewList-icon" />
                </span>
                {/* ㅡㅡㅡ 수정 예정 ㅡㅡㅡ */}
              </div>
            </>
          ) : null}

          {reviewAction === 0 ? (
            <>
              <div className="reviewButtonBox">
                <button
                  className="reviewButtonBox1"
                  onClick={() => {
                    setReviewAction(1);
                  }}
                >
                  리뷰 {reviewList.length}
                </button>
                &nbsp;
                <button
                  className="reviewButtonBox1"
                  onClick={() => {
                    setReviewAction(2);
                  }}
                >
                  리뷰 작성
                </button>
              </div>
              <hr style={{ height: "3px", backgroundColor: "lightgray" }} />
            </>
          ) : null}

          {reviewAction === 0 ? (
            <>
              <div className="reviewMainList">
                <div className="reviewMainListBox">
                  <span className="reviewMainListTitle">반려동물</span>
                  <br />
                  <span className="">{placedata.animal_size_info}</span>
                </div>
                <div className="reviewMainListBox">
                  <span className="reviewMainListTitle">허용공간</span>
                  <br />
                  <span className="">{placedata.indoor_facility_info}</span>
                  <br />
                  <span className="">{placedata.outdoor_facility_info}</span>
                </div>
                <div className="reviewMainListBox">
                  <span className="reviewMainListTitle">특이사항</span>
                  <br />
                  <span className="">{placedata.pet_restriction_info}</span>
                </div>
              </div>
              <hr style={{ height: "3px", backgroundColor: "lightgray" }} />
              <div className="reviewMainInfo">
                <table border={0} className="reviewMainInfoTa">
                  <thead>
                    <tr>
                      <th width={"100px"}>영업정보</th>
                      <td>&nbsp;</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width={"100px"}>상호명</td>
                      <td>{placedata.facility_name}</td>
                    </tr>
                    <tr>
                      <td width={"100px"}>주소</td>
                      <td>{placedata.lot_address}</td>
                    </tr>
                    <tr>
                      <td width={"100px"}>전화번호</td>
                      <td>{placedata.phone_number}</td>
                    </tr>
                    <tr>
                      <td width={"100px"}>홈페이지</td>
                      {placehomepage.includes(",") === true ? ( // 홈페이지가 여러개일 경우 첫번째 링크만 가져옴
                        homepageCheck.includes("http") === true ? (
                          <td>
                            <a
                              href={homepageCheck}
                              target="blank"
                              className="reviewMainInfoLink"
                            >
                              바로가기
                            </a>
                          </td>
                        ) : (
                          <td>
                            <a
                              href={"http://" + homepageCheck}
                              target="blank"
                              className="reviewMainInfoLink"
                            >
                              바로가기
                            </a>
                          </td>
                        )
                      ) : placedata.homepage !== "정보없음" ? ( // 홈페이지가 하나일 경우
                        placehomepage.includes("http") === true ? ( // http가 붙어 있는지 확인
                          <td>
                            <a
                              href={placedata.homepage}
                              target="blank"
                              className="reviewMainInfoLink"
                            >
                              바로가기
                            </a>
                          </td>
                        ) : (
                          // http가 붙어있지 않으면 붙임
                          <td>
                            <a
                              href={"http://" + placedata.homepage}
                              target="blank"
                              className="reviewMainInfoLink"
                            >
                              바로가기
                            </a>
                          </td>
                        )
                      ) : (
                        <td>{placedata.homepage}</td>
                      )}
                    </tr>
                    <tr>
                      <td width={"100px"}>영업시간</td>
                      <td>{placedata.operation_time}</td>
                    </tr>
                    <tr>
                      <td width={"100px"}>휴무일</td>
                      <td>{placedata.holiday}</td>
                    </tr>
                    <tr>
                      <td width={"100px"}>주차여부</td>
                      <td>{placedata.parking_info}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : reviewAction === 1 ? (
            <MapReviewList
              setReviewAction={setReviewAction}
              placedata={placedata}
              reviewList={reviewList}
              ratingScore={ratingScore}
            />
          ) : reviewAction === 2 ? (
            <MapReviewWrite
              setReviewAction={setReviewAction}
              placedata={placedata}
              getPlaceReview={getPlaceReview}
            />
          ) : null}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ReviewMain;
