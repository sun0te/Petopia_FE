import React, { useEffect, useState, useCallback } from "react";
import HeaderAdmin from "../Components/HeaderAdmin.js";
import Footer from "../Components/Footer.js";
import BgAdmin from "../Components/BgAdmin.js";
import "../Styles/AdminUserReport.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import AdminUserReportBoard from "../Components/Admin/AdminUserReportBoard.js";
import AdminUserReportReview from "../Components/Admin/AdminUserReportReview.js";

const AdminUserReportBE = () => {
  let progressReportsData = 0;
  let completeReportsData = 0;
  const [reports, setReports] = useState([]);
  const [what, setWhat] = useState(0);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleReportProcessing = (reportid) => {
    axios
      .post("/report/reportprogress", {
        id: reportid,
        processingStatus: "PROGRESS_COMPLETE",
      })
      .then((res) => {
        setSelectedReport(null);
        forceUpdate();
        window.location.reload();
      });
  };

  const [totalReports, setTotalReports] = useState(null);
  const [progressReports, setProgressReports] = useState(null);
  const [completeReports, setCompleteReports] = useState(null);

  const [reportSelect, setReportSelect] = useState(0); // 0 : 게시판 , 1 : 리뷰

  useEffect(() => {
    axios
      .get("/report/boardreportlist", {
        params: { num: reportSelect },
      })
      .then((res) => {
        setReports(res.data);
        setTotalReports(res.data.length);

        res.data.map((data) => {
          if (data.processingStatus === "PROCEEDING") progressReportsData++;
          else if (data.processingStatus === "PROGRESS_COMPLETE")
            completeReportsData++;
        });
        setProgressReports(progressReportsData);
        setCompleteReports(completeReportsData);
      });
  }, [
    completeReportsData,
    progressReportsData,
    setSelectedReport,
    reportSelect,
  ]);

  return (
    <>
      <BgAdmin />

      <main className="admin-main">
        <HeaderAdmin />
        <section className="admin-page">
          {reportSelect === 0 ? (
            <AdminUserReportBoard
              totalReports={totalReports}
              progressReports={progressReports}
              completeReports={completeReports}
              setReportSelect={setReportSelect}
              reports={reports}
              setSelectedReport={setSelectedReport}
              selectedReport={selectedReport}
              handleReportProcessing={handleReportProcessing}
            />
          ) : (
            <AdminUserReportReview
              totalReports={totalReports}
              progressReports={progressReports}
              completeReports={completeReports}
              setReportSelect={setReportSelect}
              reports={reports}
              setSelectedReport={setSelectedReport}
              selectedReport={selectedReport}
              handleReportProcessing={handleReportProcessing}
            />
          )}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AdminUserReportBE;
