import React from "react";

const AttendanceTable = () => {
  const attendanceData = [
    { id: 1, name: "John Doe", date: "2024-11-01", status: "Present" },
    { id: 2, name: "Jane Smith", date: "2024-11-01", status: "Absent" },
    { id: 3, name: "Alex Johnson", date: "2024-11-01", status: "Late" },
    { id: 4, name: "Emily Davis", date: "2024-11-01", status: "Present" },
  ];

  return (
    <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
      <table className="min-w-full text-sm text-gray-800">
        <thead className="bg-gray-200 text-xs uppercase font-semibold text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">Employee Name</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-lg ${
                    item.status === "Present"
                      ? "bg-green-500 text-white"
                      : item.status === "Absent"
                      ? "bg-red-500 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
