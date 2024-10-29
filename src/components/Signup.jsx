import React from 'react';
import { Link } from 'react-router-dom'; 
import './SignUp.css'; 

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <select required>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to="/Login">Login here</Link>
      </p>
    </div>
  );
};

export default SignUp;
