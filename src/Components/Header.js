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
        <div className="nav-tabs">
          <div className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              HOME
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/userboard">
              커뮤니티
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/routetrip">
              여행추천
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/notice">
              공지사항
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/usermypage">
              마이페이지
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
