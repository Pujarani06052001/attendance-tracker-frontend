import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ClassDetails.css";

const ClassDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { record } = location.state || {};

  const closeModal = () => {
    navigate(-1); // Navigates to the previous page
  };

  // Helper function to extract names
  const getStudentNames = (students) => {
    return students.map(student => student.name).join(", ") || "None";
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h1>Class Details</h1>
        {record ? (
          <>
            <p><strong>Class Name:</strong> {record.className || "N/A"}</p>
            <p><strong>Date:</strong> {new Date(record.date).toLocaleDateString()}</p>
            <p>
              <strong>Present Students ({record.presentStudents.length}):</strong> 
            </p>
            <p>
              <strong>Absent Students ({record.absentStudents.length}):</strong> 
            </p>
          </>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default ClassDetails;
