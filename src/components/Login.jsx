import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post('/user/login', {
        email,
        password,

      });

      localStorage.setItem('token', response.data.token);
      setSuccessMessage('Login successful!'); 
      setTimeout(() => {
        setSuccessMessage(''); 
        navigate('/'); 
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <div className="success-popup">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link to="/signup">Sign Up here</Link>
      </p>
    </div>
  );
};

export default Login;
