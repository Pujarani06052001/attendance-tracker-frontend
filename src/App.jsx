import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ClassList from "./components/ClassList";
import ClassManager from "./components/ClassManager";
// import ClassForm from "./components/ClassForm";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { FaChartBar, FaPlus, FaCog } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ClassDetails from "./components/ClassDetails";

import "./App.css";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <AppContent toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
    </Router>
  );
}

function AppContent({ toggleSidebar, isSidebarVisible }) {
  const location = useLocation();  // Get the current route

  // Conditionally hide sidebar on home page
  const shouldHideSidebar = location.pathname === "/";

  return (
    <>
      <Navbar />
      <div className="layout" style={{ display: "flex" }}>
        {/* Sidebar */}
        {!shouldHideSidebar && isSidebarVisible && (
          <aside className="sidebar">
            <ul>
              <li>
                <Link to="/Dashboard">
                  <span className="emoji">📊</span> Dashboard
                </Link>
              </li>
              {/* <li>
                <Link to="/ClassForm">
                  <span className="emoji">➕</span> Add Class
                </Link>
              </li> */}
              <li>
                <Link to="/ClassManager">
                  <span className="emoji">⚙️</span> Class Manager
                </Link>
              </li>
            </ul>
          </aside>
        )}

        {/* Main Content Area */}
        <main
          className="main-content"
          style={{
            flex: 1,
            padding: "20px",
            marginLeft: !shouldHideSidebar && isSidebarVisible ? "" : "0", // Adjust main content margin based on sidebar visibility
          }}
        >
          {/* Toggle Button for Sidebar */}
          <button onClick={toggleSidebar} style={{ position: "absolute", top: "20px", left: "20px" }}>
            {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
          </button>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ClassList" element={<ClassList />} />
            {/* <Route path="/ClassForm" element={<ClassForm />} /> */}
            <Route path="/ClassManager" element={<ClassManager />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/class/:date" element={<ClassDetails />} />

          </Routes>
        </main>
      </div>
      <StudentDashboard/>
      <Footer />
    </>
  );
}

export default App;
