import React, { useState } from "react";

const AddClass = ({ addNewClass }) => {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [numStudents, setNumStudents] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClass = {
      name,
      startTime,
      numStudents,
    };
    addNewClass(newClass);
    setName("");
    setStartTime("");
    setNumStudents("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Class Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter class name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Time
          </label>
          <input
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter start time"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Students
          </label>
          <input
            type="number"
            value={numStudents}
            onChange={(e) => setNumStudents(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter number of students"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
