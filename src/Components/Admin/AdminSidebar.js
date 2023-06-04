import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import styled from "styled-components";
import { FaUser, FaFlag, FaInfoCircle, FaChartBar } from "react-icons/fa";
import MyInquiryAdmin from "../MyPage/MyInquiryAdmin";
import AdminUserList from "../../Pages/AdminUserList";
import AdminStatistics from "../../Pages/AdminStatistics";
import AdminUserReportBE from "../../Pages/AdminUserReportBE";

const AdmimSlideContainer = styled.div`
  display: flex;
  position: relative;
`;

const AdminSide = styled.div`
  width: ${({ expanded }) => (expanded ? "240px" : "0px")};
  transition: width 0.3s ease;
  overflow: hidden;
  background-color: #fff;
  border-right: ${({ expanded }) => (expanded ? "1px solid #ccc" : "none")};
  height: ${({ expanded }) => (expanded ? "100vh" : "auto")};
`;

const AdminContent = styled.div`
  flex: 1;
`;

const AdminToggleButton = styled.button`
  position: absolute;
  top: 0px;
  left: ${({ expanded }) => (expanded ? "240px" : "0px")};
  transition: left 0.3s ease;
  z-index: 999;
`;

const AdminSidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("/management");

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelectCategory = (itemId) => {
    setSelectedCategory(itemId);
  };

  let content;
  if (selectedCategory === "/management") {
    content = (
      <>
        <section className="admin-page">
          <AdminUserList />
        </section>
      </>
    );
  } else if (selectedCategory === "/report") {
    content = (
      <>
        <section className="admin-page">
          <AdminUserReportBE />
        </section>
      </>
    );
  } else if (selectedCategory === "/inquiry") {
    content = (
      <>
        <section className="admin-page">
          <MyInquiryAdmin />
        </section>
      </>
    );
  } else if (selectedCategory === "/statistics") {
    content = (
      <>
        <section className="admin-page">
          <AdminStatistics />
        </section>
      </>
    );
  }

  return (
    <>
      <AdmimSlideContainer>
        <AdminSide expanded={expanded}>
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({ itemId }) => {
              handleSelectCategory(itemId);
              // maybe push to the route
            }}
            items={[
              {
                title: "회원 관리",
                itemId: "/management",
                // elemBefore: () => <Icon name="users" />,
                elemBefore: () => (
                  <>
                    <div className="user-section-icon-side">
                      <FaUser className="user-info-icon" />
                    </div>
                  </>
                ),
              },
              {
                title: "신고 관리",
                itemId: "/report",
                elemBefore: () => (
                  <div className="user-section-icon-side">
                    <FaFlag className="user-info-icon" />
                  </div>
                ),
              },
              {
                title: "문의 관리",
                itemId: "/inquiry",
                elemBefore: () => (
                  <div className="user-section-icon-side">
                    <FaInfoCircle className="user-info-icon" />
                  </div>
                ),
              },
              {
                title: "통계",
                itemId: "/statistics",
                elemBefore: () => (
                  <div className="user-section-icon-side">
                    <FaChartBar className="user-info-icon" />
                  </div>
                ),
              },
            ]}
          />
        </AdminSide>
        <AdminContent>{content}</AdminContent>
        <AdminToggleButton expanded={expanded} onClick={handleToggle}>
          {expanded ? "<" : ">"}
        </AdminToggleButton>
      </AdmimSlideContainer>
    </>
  );
};

export default AdminSidebar;
