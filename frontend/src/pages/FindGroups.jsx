import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const FindGroups = () => {
  const [groups, setGroups] = useState([]);
  const [fileterGroups, setfileterGroups] = useState([]);
  const [searchText, setSearchTexts] = useState("");

  useEffect(() => {
    const viewGroups = () => {
      axios
        .get("http://localhost:5000//view/group")
        .then((res) => {
          setGroups(res.data);
          setfileterGroups(res.data);
        })
        .catch((err) => {
          console.error("Error fetching producers:", err);
          alert("Failed to fetch producers. Check console for details.");
        });
    };
    viewGroups()
  },[]);

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Collaborate with Expert Teams{" "}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-2xl">
            Join with industry-leading professionals to achieve success.
          </p>
          <div className="mt-10 max-w-lg mx-auto">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <input
                type="text"
                placeholder="Search crew members"
                // value={searchText}
                // onChange={handleSearch}
                className="flex-grow px-6 py-4 text-gray-700 focus:outline-none"
              />
              <button className="bg-purple-500 text-white px-6 py-4 hover:bg-purple-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindGroups;
