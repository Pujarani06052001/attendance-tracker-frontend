import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ClassDetails.css";

const ClassDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { record } = location.state || {};

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  // Helper function to extract names
  const getStudentNames = (students) => {
    return students && students.length > 0
      ? students.map((student) => student.name).join(", ")
      : "None";
  };

  return (
    <div className="class-details">
      <h1>Class Details</h1>
      {record ? (
        <div className="details-container">
          <p><strong>Class Name:</strong> {record.className || "N/A"}</p>
          <p><strong>Date:</strong> {record.date ? new Date(record.date).toLocaleDateString() : "N/A"}</p>
          <p>
            <strong>Present Students ({record.presentStudents?.length || 0}):</strong>{" "}
            {getStudentNames(record.presentStudents)}
          </p>
          <p>
            <strong>Absent Students ({record.absentStudents?.length || 0}):</strong>{" "}
            {getStudentNames(record.absentStudents)}
          </p>
        </div>
      ) : (
        <p>No data available</p>
      )}
      <button className="back-button" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default ClassDetails;
