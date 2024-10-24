import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";

const ViewGroups = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const viewGroups = async () => {
      try {
        const response = await axios.get("http://localhost:5000/view/group");
        setGroups(response.data);
      } catch (err) {
        console.error("Error fetching groups:", err);
        setError("Failed to fetch groups. Please try again later.");
      }
    };
    viewGroups();
  }, []);

  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="ml-5 bg-gray-100 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <div
              key={group._id || index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div>
                    <p className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                      {group.groupName}
                    </p>
                  </div>
                </div>
          
                <div className="flex justify-between items-center mb-2">
                  <p className="text-lg font-bold text-gray-900">
                    {group.cost}
                    <span className="text-sm font-normal text-gray-500">
                      /wk
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
View Group                  </button>
                  <button className="text-gray-400 hover:text-purple-500 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewGroups;
