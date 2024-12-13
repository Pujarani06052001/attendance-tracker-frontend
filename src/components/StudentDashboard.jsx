import React, { useEffect, useState } from "react";
import "./StudentDashboard.css";
import { FaTable, FaChartBar } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const StudentDashboard = () => {
  const [studentClasses, setStudentClasses] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Dummy student data (should be replaced with actual data from an API)
  const dummyClasses = [
    { id: 1, className: "Mathematics 101", instructor: "Dr. Smith", schedule: "Mon/Wed/Fri 10:00-11:30" },
    { id: 2, className: "Physics 101", instructor: "Prof. Johnson", schedule: "Tue/Thu 9:00-10:30" },
    { id: 3, className: "Computer Science 101", instructor: "Dr. Davis", schedule: "Mon/Wed/Fri 13:00-14:30" },
  ];

  // Dummy attendance data
  const dummyAttendanceRecords = [
    { id: 1, date: "2024-11-01", present: true },
    { id: 2, date: "2024-11-02", present: false },
    { id: 3, date: "2024-11-03", present: true },
    { id: 4, date: "2024-11-04", present: true },
    { id: 5, date: "2024-11-05", present: false },
    { id: 6, date: "2024-11-06", present: true },
  ];

  // Simulate the login process
  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true); // User is logged in
      setStudentClasses(dummyClasses); // Fetch classes after login
      setAttendanceData(dummyAttendanceRecords); // Fetch attendance data after login
      setLoading(false);
    }, 1000);
  };

  // Generate chart data for attendance overview
  const chartData = {
    labels: attendanceData.map((record) => new Date(record.date).toLocaleDateString()),
    datasets: [
      {
        label: "Present",
        data: attendanceData.map((record) => (record.present ? 1 : 0)),
        backgroundColor: "#003366", // Dark Blue (attendance present)
      },
      {
        label: "Absent",
        data: attendanceData.map((record) => (record.present ? 0 : 1)),
        backgroundColor: "#f44336", // Red (attendance absent)
      },
    ],
  };

  const pieChartData = {
    labels: ['Classes Attended', 'Classes Missed'],
    datasets: [
      {
        data: [
          attendanceData.filter((record) => record.present).length,
          attendanceData.filter((record) => !record.present).length,
        ],
        backgroundColor: ['#003366', '#b0c4de'], // Dark Blue and Light Blue
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
        text: "Your Attendance Overview",
        font: {
          size: 20,
          family: "Arial, sans-serif",
        },
      },
    },
  };

  return (
    <div className="student-dashboard">
      <header className="header">
        <h1>📊 Student Dashboard</h1>
      </header>

      <div className="container">
        <aside className="sidebar">
          <ul>
            <li><FaTable /> Enrolled Classes</li>
            <li><FaChartBar /> Attendance Analytics</li>
          </ul>
        </aside>

        <main className="main-content">
          {!isLoggedIn ? (
            <div className="login-container">
              <button onClick={login} className="login-button">Login</button>
              {loading && <p>Logging in...</p>}
            </div>
          ) : (
            <>
              <section className="enrolled-classes">
                <h2>Your Enrolled Classes</h2>
                <div className="class-list">
                  {studentClasses.length === 0 ? (
                    <p>No classes found</p>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th>Class</th>
                          <th>Instructor</th>
                          <th>Schedule</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentClasses.map((classItem) => (
                          <tr key={classItem.id}>
                            <td>{classItem.className}</td>
                            <td>{classItem.instructor}</td>
                            <td>{classItem.schedule}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </section>

              <section className="attendance">
                <h2 style={{ color: "#003366" }}>Your Attendance</h2>
                <div className="attendance-cards">
                  <div className="card" style={{ backgroundColor: "#003366" }}>
                    🎓 <span>Total Classes: {attendanceData.length}</span>
                  </div>
                  <div className="card" style={{ backgroundColor: "#003366" }}>
                    ✅ <span>Classes Attended: {attendanceData.filter((record) => record.present).length}</span>
                  </div>
                  <div className="card" style={{ backgroundColor: "#003366" }}>
                    ❌ <span>Classes Missed: {attendanceData.filter((record) => !record.present).length}</span>
                  </div>
                </div>
              </section>

              <section className="attendance-charts">
                <h2 style={{ color: "#003366" }}>Your Attendance Analytics</h2>
                <div className="chart-container">
                  <Bar data={chartData} options={chartOptions} />
                </div>
                <div className="pie-chart-container">
                  <h3 style={{ color: "#003366" }}>Attendance Breakdown (Pie Chart)</h3>
                  <Pie data={pieChartData} />
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
