import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const AdminUserReportReview = ({
  totalReports,
  progressReports,
  completeReports,
  setReportSelect,
  reports,
  setSelectedReport,
  selectedReport,
  handleReportProcessing,
}) => {
  return (
    <>
      <div className="userlist-title">
        <h3>신고 관리</h3>
      </div>
      <div className="hr-line-container">
        <hr className="hr-line" />
      </div>
      <div className="report-category">
        <div className="report-category-item">
          전체 신고 <span className="category-count">{totalReports}</span>
        </div>
        <div className="report-category-item">
          신고 대기 <span className="category-count">{progressReports}</span>
        </div>
        <div className="report-category-item">
          처리 완료 <span className="category-count">{completeReports}</span>
        </div>
      </div>
      <div className="separationArea" />
      <div className="userlist-title">
        <p>신고 리스트</p>
      </div>

      <div className="report-select-container">
        <Form.Select
          className="report-select"
          aria-label="Default select example"
          size="sm"
          onChange={(e) => {
            setReportSelect(e.target.value);
          }}
        >
          <option value="0">게시판</option>
          <option value="1">리뷰</option>
        </Form.Select>
      </div>
      <div className="report-table-container">
        <table className="admin-user-report-table">
          <thead className="admin-table-title">
            <tr>
              <th className="admin-user-report-item-title">제목</th>
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
                      //console.log(`Report ${report.id} clicked`);
                    }}
                  >
                    {
                      report.review === null ? (
                        report.post.category === "TRAVEL" ? (
                          <div>
                            <Link
                              to={`/recomend_best?id=${report.id}`}
                              key={report.id}
                              state={{ boardid: report.post.id }}
                            >
                              {report.post.title}
                            </Link>
                          </div>
                        ) : (
                          <>{report.post.title}</>
                        )
                      ) : null // 리뷰 관련 추가
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
                      <br />
                      <div className="report-modal-board">
                        <div className="report-tilte">
                          <b>게시글 제목</b>
                        </div>
                        {selectedReport.review === null
                          ? selectedReport.post.title
                          : null}
                        <div className="report-tilte">
                          <br />
                          <b>게시글 내용</b>
                        </div>
                        {selectedReport.review === null
                          ? selectedReport.post.content
                          : null}
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
                          <b>게시글 제목</b>
                        </div>
                        {selectedReport.review === null
                          ? selectedReport.post.title
                          : null}

                        <div className="report-tilte">
                          <br />
                          <b>게시글 내용</b>
                        </div>
                        {selectedReport.review === null
                          ? selectedReport.post.content
                          : null}
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
