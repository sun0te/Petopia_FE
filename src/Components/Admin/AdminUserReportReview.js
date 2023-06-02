import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminReportReviewDetail from "./AdminReportReviewDetail";

const AdminUserReportReview = ({
  reports,
  setSelectedReport,
  selectedReport,
  handleReportProcessing,
}) => {
  const [reviewImg, setReviewImg] = useState([]);

  const getReviewImg = (reviewId) => {
    axios
      .get("/mapReportImg", {
        params: { id: reviewId },
      })
      .then((res) => {
        const { data } = res;
        setReviewImg(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {}, [reviewImg]);

  return (
    <>
      <div className="report-table-container">
        <table className="admin-user-report-table">
          <thead className="admin-table-title">
            <tr>
              <th className="admin-user-report-item-title">업체명</th>
              <th className="admin-user-report-item-date">신고자</th>
              <th className="admin-user-report-item-date">날짜</th>
              <th className="admin-user-report-item-date">진행</th>
            </tr>
          </thead>
          <tbody>
            {reports.length !== 0 ? (
              reports.map((report) => (
                <tr
                  key={report.id}
                  onClick={() => {
                    setSelectedReport(report);
                  }}
                  className="admin-user-report-row"
                >
                  <td
                    className="admin-user-report-item-title"
                    onClick={() => {
                      // console.log("콘솔값", report.review.id);
                      getReviewImg(report.review.id);
                    }}
                  >
                    {
                      report.review === null ? null : (
                        <>{report.review.location.facility_name}</>
                      ) // 리뷰 관련 추가
                    }
                  </td>
                  <td className="admin-user-report-item-date">
                    {report.reporter.nickname}
                  </td>
                  <td className="admin-user-report-item-date">
                    {report.reportDate.replace("T", " ")}
                  </td>
                  <td className="admin-user-report-item-date">
                    <div
                      className={`admin-user-report-item-status ${
                        report.processingStatus === "PROCEEDING"
                          ? "admin-user-report-item-status-processing"
                          : ""
                      }`}
                    >
                      {report.processingStatus === "PROCEEDING"
                        ? "대기 중"
                        : "완료"}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="admin-user-report-none">
                  신고 내역이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
          {selectedReport && (
            <div className="modal-wrapper">
              <div className="modal-content admin-user-report-modal">
                <div className="modal-header">
                  <h2>신고 정보</h2>
                </div>
                <div className="modal-body">
                  {selectedReport.processingStatus === "PROGRESS_COMPLETE" ? (
                    <>
                      <b>처리완료</b>
                      <p>
                        {selectedReport.reason === "DISGUST" ? (
                          <>선정성, 정치관련, 혐오감</>
                        ) : selectedReport.reason === "ADVERTISEMENT" ? (
                          <>광고성, 도배, 허위정보</>
                        ) : selectedReport.reason ===
                          "INAPPROPRIATE_NICKNAME" ? (
                          <>부적절한 작성자 닉네임</>
                        ) : selectedReport.reason === "COPYRIGHT" ? (
                          <>저작권 위반</>
                        ) : selectedReport.reason === "OTHER" ? (
                          <>
                            기타 사유 :{" "}
                            {selectedReport.reason === "OTHER"
                              ? selectedReport.otherReason
                              : null}
                          </>
                        ) : null}
                      </p>
                      <div className="report-modal-board">
                        <div className="report-tilte">
                          <b>리뷰 내용</b>
                        </div>
                        <div className="report-review-content">
                          <AdminReportReviewDetail
                            setMyPageReviewAction={0}
                            reviewdata={selectedReport.review}
                            handleDelete={0}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <b>대기 중</b>
                      <p>
                        {selectedReport.reason === "DISGUST" ? (
                          <>선정성, 정치관련, 혐오감</>
                        ) : selectedReport.reason === "ADVERTISEMENT" ? (
                          <>광고성, 도배, 허위정보</>
                        ) : selectedReport.reason ===
                          "INAPPROPRIATE_NICKNAME" ? (
                          <>부적절한 작성자 닉네임</>
                        ) : selectedReport.reason === "COPYRIGHT" ? (
                          <>저작권 위반</>
                        ) : selectedReport.reason === "OTHER" ? (
                          <>
                            기타 사유 :{" "}
                            {selectedReport.reason === "OTHER"
                              ? selectedReport.otherReason
                              : null}
                          </>
                        ) : null}
                      </p>

                      <div className="report-modal-board">
                        <div className="report-tilte">
                          <b>리뷰 내용</b>
                        </div>
                        <div className="report-review-content">
                          <AdminReportReviewDetail
                            setMyPageReviewAction={0}
                            reviewdata={selectedReport.review}
                            handleDelete={0}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="modal-footer">
                  {selectedReport.processingStatus === "PROGRESS_COMPLETE" ? (
                    <>
                      <button onClick={() => setSelectedReport(null)}>
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          handleReportProcessing(selectedReport.id);
                        }}
                        style={{ backgroundColor: "red", color: "white" }}
                      >
                        신고 처리
                      </button>
                      <button onClick={() => setSelectedReport(null)}>
                        취소
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </table>
      </div>
    </>
  );
};

export default AdminUserReportReview;
