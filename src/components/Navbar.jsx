import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const isLoggedIn = !!localStorage.getItem('token'); 
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Attendance Tracker</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/ClassList">Class List</Link>
            </li>
            <li>
              <Link to="/ClassForm">Add Class</Link>
            </li>
            <li>
              <Link to="/ClassManager">Class Manager</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
