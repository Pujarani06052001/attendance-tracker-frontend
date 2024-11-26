import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { FaTable, FaChartBar, FaList, FaPlus, FaCog } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await fetch("https://attendance-tracker-woad.vercel.app/attendance/all");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAttendanceData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, []);

  // Generate chart data dynamically
  const chartData = {
    labels: attendanceData.map((record) => new Date(record.date).toLocaleDateString()),
    datasets: [
      {
        label: "Present",
        data: attendanceData.map((record) => record.presentStudents.length),
        backgroundColor: "#4caf50",
      },
      {
        label: "Absent",
        data: attendanceData.map((record) => record.absentStudents.length),
        backgroundColor: "#f44336",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly Attendance Overview",
      },
    },
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>📊 Attendance Tracker Dashboard</h1>
      </header>

      <div className="container">
        <aside className="sidebar">
          <ul>
           
            <li>
              <Link to="/Dashboard">
                <FaChartBar /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/ClassForm">
                <FaPlus /> Add Class
              </Link>
            </li>
            <li>
              <Link to="/ClassManager">
                <FaCog /> Class Manager
              </Link>
            </li>
          </ul>
        </aside>

        <main className="main-content">
          {loading && <p>Loading data...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <>
              <section className="stats">
                <h2>Overview</h2>
                <div className="cards">
                  <div className="card">🧑‍🎓 <span>Total Classes: {attendanceData.length}</span></div>
                  <div className="card">✅ <span>Total Present: {attendanceData.reduce((acc, record) => acc + record.presentStudents.length, 0)}</span></div>
                  <div className="card">❌ <span>Total Absent: {attendanceData.reduce((acc, record) => acc + record.absentStudents.length, 0)}</span></div>
                </div>
              </section>

              <section className="table">
                <h2>Attendance Table</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Class Name</th>
                      <th>Date</th>
                      <th>Present Students</th>
                      <th>Absent Students</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((record) => (
                      <tr key={record.date}>
                        <td>{record.className || "Class Not Found"}</td>
                        <td>{new Date(record.date).toLocaleDateString()}</td>
                        <td>{record.presentStudents.length}</td>
                        <td>{record.absentStudents.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <section className="chart">
                <h2>Weekly Attendance Analysis</h2>
                <div className="chart-container">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
