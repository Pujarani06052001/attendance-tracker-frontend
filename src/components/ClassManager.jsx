
import React, { useState, useEffect } from 'react';
import ClassForm from './ClassForm';
import ClassList from './ClassList';
import axios from 'axios';
import './ClassManager.css';

const ClassManager = () => {
  const [classes, setClasses] = useState([]);
  const [currentClass, setCurrentClass] = useState(null);
  const [loading, setLoading] = useState(true);

  // Retrieve the token from localStorage
  const token = localStorage.getItem('token');
  console.log('Token:', token); // Debugging

  // Check token expiration and handle logout
  const checkTokenExpiration = () => {
    if (token) {
      const base64Url = token.split('.')[1];
      const decodedValue = JSON.parse(atob(base64Url));
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      if (decodedValue.exp < currentTime) {
        console.warn('Token expired. Logging out...');
        localStorage.removeItem('token');
        window.location.href = '/login'; // Redirect to login page
      }
    }
  };

  useEffect(() => {
    checkTokenExpiration();
    fetchClasses();
  }, []);

  // Handle errors (401 Unauthorized or other errors)
  const handleError = (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - maybe the token is invalid or expired');
      localStorage.removeItem('token');
      window.location.href = '/login'; // Redirect to login
    } else {
      console.error('An error occurred:', error);
    }
  };

  // Fetch classes
  const fetchClasses = async () => {
    if (!token) {
      console.error('No token found, please log in.');
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get('/class/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClasses(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new class
  const addClass = async (newClass) => {
    if (!token) {
      console.error('No token found, please log in.');
      return;
    }
    try {
      await axios.post('/class/add', newClass, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchClasses();
    } catch (error) {
      handleError(error);
    }
  };

  // Update an existing class
  const updateClass = async (updatedClass) => {
    if (!token) {
      console.error('No token found, please log in.');
      return;
    }
    try {
      await axios.put(`/class/update/${updatedClass._id}`, updatedClass, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchClasses();
      setCurrentClass(null); // Reset current class after updating
    } catch (error) {
      handleError(error);
    }
  };
  

  // Delete a class
  const deleteClass = async (id) => {
    if (!token) {
      console.error('No token found, please log in.');
      return;
    }
    try {
      await axios.delete(`/class/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchClasses();
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="class-manager-container">
      <div className="intro-and-form">
        <div className="class-manager-text">
          <h4>Effortlessly Manage Attendance with Our Innovative System!</h4>
          <p>Simplify your process and focus on what matters with our powerful attendance solution.</p>
        </div>
        <div className="form-container">
          <ClassForm
            onAddClass={addClass}
            onUpdateClass={updateClass}
            currentClass={currentClass}
            setCurrentClass={setCurrentClass}
          />
        </div>
      </div>
      <div className="class-list-container">
        {loading ? (
          <p>Loading classes...</p>
        ) : (
          <ClassList classes={classes} onEdit={setCurrentClass} onDelete={deleteClass} />
        )}
      </div>
    </div>
  );
};

export default ClassManager;

