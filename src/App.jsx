import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ClassList from "./components/ClassList";
import ClassManager from "./components/ClassManager";
import ClassForm from "./components/ClassForm";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { FaChartBar, FaPlus, FaCog } from "react-icons/fa";
import { Link } from 'react-router-dom';

import "./components/Dashboard.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="layout" style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="/Dashboard">
                <span className="emoji">📊</span> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/ClassForm">
                <span className="emoji">➕</span> Add Class
              </Link>
            </li>
            <li>
              <Link to="/ClassManager">
                <span className="emoji">⚙️</span> Class Manager
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="main-content" style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ClassList" element={<ClassList />} />
            <Route path="/ClassForm" element={<ClassForm />} />
            <Route path="/ClassManager" element={<ClassManager />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
