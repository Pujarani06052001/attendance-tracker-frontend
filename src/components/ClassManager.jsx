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
      const response = await axios.get('http://localhost:7000/class/all', {
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
      await axios.post('http://localhost:7000/class/add', newClass, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchClasses(); 
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  const updateClass = async (updatedClass) => {
    try {
      await axios.put(`http://localhost:7000/class/update/${updatedClass._id}`, updatedClass, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchClasses(); 
      setCurrentClass(null); 
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const deleteClass = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/class/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchClasses(); 
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

  return (
    <div className="class-manager">
      <ClassForm
        onAddClass={addClass}
        onUpdateClass={updateClass}
        currentClass={currentClass}
        setCurrentClass={setCurrentClass}
      />
      {loading ? (
        <p>Loading classes...</p>
      ) : (
        <ClassList classes={classes} onEdit={setCurrentClass} onDelete={deleteClass} />
      )}
    </div>
  );
};

export default ClassManager;
