import React from 'react';
import './ClassList.css';

const ClassList = ({ classes, onEdit, onDelete }) => {
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
                <h3>{classItem.name}</h3>
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
