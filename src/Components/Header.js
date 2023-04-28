import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Styles/Header.css";

const Header = ({ page }) => {
  return (
    <header>
      <div className="headerBtns">
        <Button variant="primary" className="mr-2">
          로그인
        </Button>
        <Button variant="outline-primary">회원가입</Button>
      </div>
      <div className="headerCategoryConteiner">
        {/* 카테고리 */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/userboard">
              커뮤니티
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/routetrip">
              여행추천
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/notice">
              공지사항
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/usermypage">
              마이페이지
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
