import React, { useState, useEffect } from 'react';
import ClassForm from './ClassForm';
import ClassList from './ClassList';
import axios from 'axios';
import './ClassManager.css';

const ClassManager = () => {
  const [classes, setClasses] = useState([]);
  const [currentClass, setCurrentClass] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('/class/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setLoading(false);
    }
  };

  const addClass = async (newClass) => {
    try {
      await axios.post('/class/add', newClass, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchClasses();
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  const updateClass = async (updatedClass) => {
    try {
      await axios.put(`/class/update/${updatedClass._id}`, updatedClass, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchClasses();
      setCurrentClass(null); // Reset current class after updating
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const deleteClass = async (id) => {
    try {
      await axios.delete(`/class/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchClasses();
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

  return (
    <>
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
    </>
  );
};

export default ClassManager;
