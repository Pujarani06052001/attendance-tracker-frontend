import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaList, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-xl font-bold mb-8">Class Dashboard</h2>
      <ul>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
          <Link to="/">
            <FaList className="mr-3" />
            <span>Class List</span>
          </Link>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
          <Link to="/add-class">
            <FaPlus className="mr-3" />
            <span>Add Class</span>
          </Link>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
          <Link to="/class-manager">
            <FaCog className="mr-3" />
            <span>Class Manager</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
