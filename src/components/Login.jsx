import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link to="/SignUp">Sign Up here</Link>
      </p>
    </div>
  );
};

export default Login;
