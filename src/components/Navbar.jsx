import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">My Website</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Signup">Signup Page</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
