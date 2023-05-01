import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // 추가
import "../Styles/Header.css";

const Header = ({ page }) => {
  return (
    <header>
      <div className="headerBtns">
        <Link to="/login">
          <Button variant="primary" className="mr-2">
            로그인
          </Button>
        </Link>

        <Link to="/register">
          <Button variant="outline-primary">회원가입</Button>
        </Link>
      </div>
      <div className="headerContainer">
        <div className="headerCategoryConteiner">
          {/* 카테고리 */}
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userboard">
                커뮤니티
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/routetrip">
                여행추천
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notice">
                공지사항
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usermypage">
                마이페이지
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
