import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Component() {
  const [groups, setGroups] = useState([]);
  const [filterGroups, setFilterGroups] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const viewGroups = async () => {
      try {
        const response = await axios.get("http://localhost:5000/view/group");
        setGroups(response.data);
        setFilterGroups(response.data);
      } catch (err) {
        console.error("Error fetching groups:", err);
        setError("Failed to fetch groups. Please try again later.");
      }
    };
    viewGroups();
  }, []);

  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setSearchText(searchInput);

    if (searchInput === "") {
      setFilterGroups(groups);
    } else {
      const filteredInput = groups.filter((group) => {
        const groupName = group.groupName?.toLowerCase() || '';
        const location = group.location?.toLowerCase() || '';
        const cost = group.cost?.toLowerCase() || '';
        const members = Array.isArray(group.members)
          ? group.members.join(' ').toLowerCase()
          : (typeof group.members === 'string' ? group.members.toLowerCase() : '');

        return (
          groupName.includes(searchInput) ||
          location.includes(searchInput) ||
          cost.includes(searchInput) ||
          members.includes(searchInput)
        );
      });
      setFilterGroups(filteredInput);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Collaborate with Expert Teams
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-2xl">
            Join with industry-leading professionals to achieve success.
          </p>
          <div className="mt-10 max-w-lg mx-auto">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <input
                type="text"
                placeholder="Search talented groups"
                value={searchText}
                onChange={handleSearch}
                className="flex-grow px-6 py-4 text-gray-700 focus:outline-none"
              />
              <button className="bg-purple-500 text-white px-6 py-4 hover:bg-purple-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterGroups.map((group, index) => (
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
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-yellow-100 rounded-full px-3 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium text-yellow-700">4.5</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({Math.floor(Math.random() * 50) + 10} reviews)
                  </span>
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
                    Hire Now
                  </button>
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
}