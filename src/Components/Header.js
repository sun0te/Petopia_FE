import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../Styles/Header.css";
import { FaUser, FaCog, FaAngleLeft } from "react-icons/fa";

const Header = ({ page }) => {
  const [scrollX, setScrollX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (navRef.current) {
      navRef.current.scrollLeft = scrollX;
    }
  }, [scrollX]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - navRef.current.offsetLeft);
    e.preventDefault(); // 카테고리 누르고 좌우 이동 시 미리보기 링크 생성 금지
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - navRef.current.offsetLeft;
    const walk = (x - startX) * 2.5; // 좌우 스크롤 속도
    setScrollX((prevScrollX) => prevScrollX - walk);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCategoryClick = () => {
    // 스크롤 위치 기록
    setScrollX(navRef.current.scrollLeft);
  };

  // 현재 카테고리 위치를 알아내기 위한 함수 추가
  const getActiveTabPosition = () => {
    const activeTab = navRef.current.querySelector(".active");
    if (!activeTab) return 0;
    return (
      activeTab.offsetLeft -
      (navRef.current.offsetWidth - activeTab.offsetWidth) / 2
    );
  };

  // 컴포넌트가 마운트되거나, 카테고리가 변경될 때 스크롤 위치를 갱신
  useEffect(() => {
    setScrollX(getActiveTabPosition());
  }, [page]);

  // 이전 페이지로 이동하는 함수
  const handleGoBack = () => {
    navigate(-1);
  };

  // 현재 경로의 카테고리가 여행추천인지 확인하는 함수
  const isRouteTripCategory = () => {
    return (
      location.pathname.startsWith("/routetrip") ||
      location.pathname.startsWith("/routetripwrite") ||
      location.pathname.startsWith("/recomend_best")
    );
  };

  return (
    <header>
      <div className="headerBtns">
        <div className="headerBtns-left" onClick={handleGoBack}>
          <FaAngleLeft className="user-info-icon" />
        </div>
        <div className="headerBtns-R">
          <NavLink to="/login">
            <div className="headerBtns-right">
              <FaUser className="user-info-icon" />
            </div>
          </NavLink>

          {sessionStorage.getItem("email") != null ? (
            <NavLink to="/usermypage">
              <div className="headerBtns-right">
                <FaCog className="user-info-icon" />
              </div>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <div className="headerBtns-right">
                <FaCog className="user-info-icon" />
              </div>
            </NavLink>
          )}
        </div>
      </div>
      <div
        className="headerCategoryConteiner"
        ref={navRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="nav-tabs">
          <NavLink
            exact
            to="/"
            className="nav-item"
            activeClassName="active"
            data-href="/"
            onClick={handleCategoryClick}
          >
            <div className="nav-link">
              <b>HOME</b>
            </div>
          </NavLink>
          <NavLink
            to="/userboard"
            className="nav-item"
            activeClassName="active"
            data-href="/userboard"
            onClick={handleCategoryClick}
          >
            <div className="nav-link">
              <b>커뮤니티</b>
            </div>
          </NavLink>
          <NavLink
            exact
            to="/routetrip"
            className={`nav-item ${isRouteTripCategory() ? "active" : ""}`}
            data-href="/routetrip"
            onClick={handleCategoryClick}
          >
            <div className="nav-link">
              <b>여행추천</b>
            </div>
          </NavLink>
          <NavLink
            to="/notice"
            className="nav-item"
            activeClassName="active"
            data-href="/notice"
            onClick={handleCategoryClick}
          >
            <div className="nav-link">
              <b>공지사항</b>
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
