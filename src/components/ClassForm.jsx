import React, { useState, useEffect } from 'react';
import './ClassForm.css';

const ClassForm = ({ onAddClass, onUpdateClass, currentClass, setCurrentClass }) => {
  const [formData, setFormData] = useState({ name: '', description: '', time: '', teacherId: '', students: [] });

  useEffect(() => {
    if (currentClass) {
      setFormData(currentClass);
    } else {
      setFormData({ name: '', description: '', time: '', teacherId: '', students: [] });
    }
  }, [currentClass]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentClass) {
      onUpdateClass(formData);
    } else {
      onAddClass(formData);
    }
    setFormData({ name: '', description: '', time: '', teacherId: '', students: [] });
    setCurrentClass(null);
  };

  return (
    <form className="class-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Class Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input type="text" name="time" placeholder="Class Time" value={formData.time} onChange={handleChange} required />
      <input type="text" name="teacherId" placeholder="Teacher ID" value={formData.teacherId} onChange={handleChange} required />
      <button type="submit">{currentClass ? 'Update Class' : 'Add Class'}</button>
      {currentClass && <button type="button" onClick={() => setCurrentClass(null)}>Cancel</button>}
    </form>
  );
};

export default ClassForm;
