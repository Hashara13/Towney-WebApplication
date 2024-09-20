import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ProFicImage from "../assets/images/logos/pro.jpg";
function FindCrew() {
  const [producers, setProducers] = useState([]);
  const [fileterProducers, setfileterProducers] = useState([]);
  const [searchText, setSearchTexts] = useState("");

  useEffect(() => {
    const viewProducers = () => {
      axios
        .get("http://localhost:5000/network")
        .then((result) => {
          setProducers(result.data);
          setfileterProducers(result.data);
        })
        .catch((err) => {
          console.error("Error fetching producers:", err);
          alert("Failed to fetch producers. Check console for details.");
        });
    };
    viewProducers();
  }, []);

  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setSearchTexts(searchInput);

    if (searchInput === "") {
      setfileterProducers(producers);
    } else {
      const filteredInput = producers.filter(
        (producer) =>
          producer.name.toLowerCase().includes(searchInput) ||
          producer.state.toLowerCase().includes(searchInput)
        // producer.rates.toString().toLowerCase().includes(searchInput)
      );

      setfileterProducers(filteredInput);
    }
  };

  return (
    <div className="flex-1">
      <div className="flex justify-center mt-3 mb-4">
        <input
          type="text"
          placeholder="Search crew members"
          value={searchText}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      {fileterProducers.map((producer, name, index, availability) => (
        <div
          className="ml-2 flex w-1/2 bg-white align-items-center shadow mt-6 rounded-lg p-2"
          key={producer._id || index}
        >
          <img
            src={ProFicImage}
            alt="Profile Pic
"
            className="w-16 object-cover h-16 rounded-xl"
          />
          <div className="flex flex-col justify-center w-full px-2 py-1">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h2 className="text-sm font-medium">{producer.name}</h2>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 hover:text-blue-400 cursor-pointer"
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
            </div>
            <div className="flex pt-2 text-sm text-gray-400">
              <div className="flex items-center mr-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="font-normal mt-3">
                  Available: {producer.availability}
                </p>
              </div>
              <div className="flex items-center font-medium text-gray-900">
                Hire
                <span className="ml-3 text-gray-400 text-sm font-normal">
                  {" "}
                  $1900/wk
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FindCrew;
