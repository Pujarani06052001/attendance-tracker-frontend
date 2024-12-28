import React from "react";
import { useNavigate } from "react-router-dom";
import "./ClassList.css";

const ClassList = ({ classes, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleClassClick = (classItem) => {
    navigate("/class-details", { state: { record: classItem } });
  };

  return (
    <div className="class-list">
      <h2>Classes</h2>
      {classes.length === 0 ? (
        <p>No classes available.</p>
      ) : (
        <ul>
          {classes.map((classItem) => (
            <li key={classItem._id}>
              <div>
                <h3
                  className="clickable-class-name"
                  onClick={() => handleClassClick(classItem)}
                >
                  {classItem.name}
                </h3>
                <p>{classItem.description}</p>
                <p>Time: {classItem.time}</p>
                <button onClick={() => onEdit(classItem)}>Edit</button>
                <button onClick={() => onDelete(classItem._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassList;
