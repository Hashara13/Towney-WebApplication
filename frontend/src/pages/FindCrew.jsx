import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function FindCrew(producer) {
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
          producer.state.toLowerCase().includes(searchInput) ||
          producer.performRole.toString().toLowerCase().includes(searchInput)
      );

      setfileterProducers(filteredInput);
    }
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Find the Perfect Crew
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 max-w-2xl mx-auto text-xl"
          >
            Connect with top talent in the industry and bring your projects to life.
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 max-w-lg mx-auto"
          >
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <input
                type="text"
                placeholder="Search crew members"
                value={searchText}
                onChange={handleSearch}
                className="flex-grow px-6 py-4 text-gray-700 focus:outline-none"
              />
              <button className="bg-purple-500 text-white px-6 py-4 hover:bg-purple-600 transition-colors">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {fileterProducers.map((producer, index) => (
            <motion.div
              key={producer._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={`https://picsum.photos/seed/${producer._id || index}/200/200`}
                    alt={`${producer.name}'s profile`}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-500"
                  />
                  <div>
                    <Link to={`/profile/${producer._id}`} className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                      {producer.name}
                    </Link>
                    <p className="text-sm text-purple-600 font-medium">{producer.performRole}</p>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-yellow-100 rounded-full px-3 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium text-yellow-700">4.5</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({Math.floor(Math.random() * 50) + 10} reviews)</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-600">
                    Available: <span className="text-green-600">{producer.availability}</span>
                  </p>
                  <p className="text-lg font-bold text-gray-900">$1,900<span className="text-sm font-normal text-gray-500">/wk</span></p>
                </div>
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Hire Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Join our network and connect with top professionals in the industry.
          </p>
          <Link to="/create">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

