import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgAdmin from "../Components/BgAdmin.js";
import "../Styles/AdminStatistics.css";

const AdminStatistics = () => {
  const data = [
    { name: "A", pv: 12, uv: 10 },
    { name: "B", pv: 19, uv: 8 },
    { name: "C", pv: 3, uv: 15 },
    { name: "D", pv: 5, uv: 5 },
    { name: "E", pv: 2, uv: 12 },
  ];

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <BgAdmin />

      <main className="admin-main">
        <Header />
        <section className="admin-statistics-container">
          <div className="statistics-title">
            <h3>통계 정보</h3>
          </div>
          <hr className="hr-line" />
          <div className="statistics-container">
            <div className="statistics-item">
              <h2>방문자 수</h2>
              <BarChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AdminStatistics;
