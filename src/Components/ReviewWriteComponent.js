import React, { useState, useRef } from "react";
import RatingSection from "./RatingSection";
import Form from "react-bootstrap/Form";
import "../Styles/Review.css";
import BoardWrite from "./BoardWrite";
import styled from "styled-components";

const ReviewWriteComponent = () => {
  const [selectedOption, setSelectedOption] = useState(""); // 상태 초기값은 빈 문자열로 설정

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedOption === selectedValue ? "" : selectedValue); // 선택된 값을 상태에 저장
  };

  //const [reviewType, setReviewType] = useState("");

  // ratingIndex = 받을 평점
  const [ratingIndex, setRatingIndex] = useState(0);

  const reportReasonContent = useRef();

  const [costType, setCostType] = useState("0");

  const [compareOption, setCompareOption] = useState("0");

  const handleConpareOptionChange = (e) => {
    setCompareOption(e.target.value); // 선택된 값을 상태에 저장
  };

  const clickCostType = (e) => {
    setCostType(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <p className="reviewRatingP">리뷰 작성</p>
      <div className="signUpForm reviewWriteForm">
        <p className="reviewTd">리뷰 종류</p>
        <div className=" reviewWriteCheckBoxDiv">
          <div className="mb-3">
            <Form>
              <Form.Check
                inline
                label="병원"
                type="checkbox"
                name="checkgroup1"
                id="checkBox1"
                value="1"
                checked={selectedOption === "1"} // 첫 번째 옵션이 선택되었을 때 checked 값은 true
                onChange={handleOptionChange}
              />
              <Form.Check
                inline
                label="음식점/카페"
                type="checkbox"
                name="checkgroup2"
                id="checkBox2"
                value="2"
                checked={selectedOption === "2"} //
                onChange={handleOptionChange}
              />
              <Form.Check
                inline
                label="숙박"
                type="checkbox"
                name="checkgroup3"
                id="checkBox3"
                value="3"
                checked={selectedOption === "3"} //
                onChange={handleOptionChange}
              />
              <Form.Check
                inline
                label="기타"
                type="checkbox"
                name="checkgroup4"
                id="checkBox4"
                value="4"
                checked={selectedOption === "4"} //
                onChange={handleOptionChange}
              />
            </Form>
          </div>
        </div>
        <p className="reviewTd">리뷰 점수</p>
        <div className="reviewRatingComponent">
          <RatingSection
            ratingIndex={ratingIndex}
            setRatingIndex={setRatingIndex}
          />
        </div>
        <div>
          {/* <Form.Select aria-label="신고 사유" size="sm" onChange={clickCostType}>
            <option value="0" disabled>
              진료 항목
            </option>
            <option value="1" onClick={(e) => clickCostType(e)}>
              수술비
            </option>
            <option value="2" onClick={(e) => clickCostType(e)}>
              기타
            </option>
            <option value="3" onClick={(e) => clickCostType(e)}>
              부적절한 작성자 닉네임
            </option>
            <option value="4" onClick={(e) => clickCostType(e)}>
              직접 입력
            </option>
          </Form.Select> */}
          {selectedOption === "1" ? (
            <div>
              <table className="reviewWriteTable">
                <tr>
                  <td className="reviewTd">진료비</td>
                  <td>
                    <Form.Control
                      className="writeTitle reportReasonWrite reviewCostInputFormControl"
                      type="number"
                      placeholder="(원)"
                      name="reportReasonContent"
                      ref={reportReasonContent}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="reviewTd">수술비</td>
                  <td>
                    <Form.Control
                      className="writeTitle reportReasonWrite reviewCostInputFormControl"
                      type="number"
                      placeholder="(원)"
                      name="reportReasonContent"
                      ref={reportReasonContent}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="reviewTd">총 비용</td>
                  <td>
                    <Form.Control
                      className="writeTitle reportReasonWrite reviewCostInputFormControl"
                      type="number"
                      placeholder="&nbsp;* 필수 입력 &nbsp;(원)"
                      name="reportReasonContent"
                      ref={reportReasonContent}
                      required
                    />
                  </td>
                </tr>
              </table>
            </div>
          ) : (
            <div>
              <table className="reviewWriteTable">
                <tr>
                  <td className="reviewTd">총 비용</td>
                  <td>
                    <div>
                      <Form.Control
                        className="writeTitle reportReasonWrite reviewCostInputFormControl"
                        type="number"
                        placeholder="&nbsp;* 필수 입력 &nbsp;(원)"
                        name="reportReasonContent"
                        ref={reportReasonContent}
                        required
                      />
                    </div>
                  </td>
                </tr>
              </table>
              <div className="whiteSpace"></div>
            </div>
          )}
        </div>
        <Form className="mb-3 reviewWriteRadioBoxDiv">
          <div className="">
            <p className="reviewWriteRadioBoxP reviewTd">가격 대비</p>
            <div>
              <Form.Check
                inline
                label="저렴한 편이에요"
                type="radio"
                name="radiogroup1"
                id="radioBox1"
                value="1"
                checked={compareOption === "1"} // 첫 번째 옵션이 선택되었을 때 checked 값은 true
                onChange={handleConpareOptionChange}
                className="reviewWriteCompareOptionForm"
              />
              <Form.Check
                inline
                label="보통이에요"
                type="radio"
                name="radiogroup2"
                id="radioBox2"
                value="2"
                checked={compareOption === "2"} //
                onChange={handleConpareOptionChange}
                className="reviewWriteCompareOptionForm"
              />
              <Form.Check
                inline
                label="비싼 편이에요"
                type="radio"
                name="radiogroup3"
                id="radioBox3"
                value="3"
                checked={compareOption === "3"} //
                onChange={handleConpareOptionChange}
                className="reviewWriteCompareOptionForm"
              />
            </div>
          </div>
        </Form>
      </div>

      <div className="whiteSpace"></div>
      <div className="boardWriteDiv">
        <BoardWrite />
      </div>
    </>
  );
};
export default ReviewWriteComponent;
