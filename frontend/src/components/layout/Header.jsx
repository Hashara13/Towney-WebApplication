import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/logos/1-removebg-preview.png";

export default function Header() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-white shadow-md p-4 pb-2 flex justify-between items-center">
      <ul className="flex space-x-80 items-left ml-[-20px]">
        <ul className="flex space-x-6 items-center justify-flex-start">
          {" "}
          <li>
            <a href="#find-work">
              <img src={logo} alt="Logo" className="h-10 pl--10" />
            </a>
          </li>
          <li>
            <a
              href="#find-work"
              className={`text-gray-700 hover:text-purple-500 ${
                activeItem === "find-work" ? "text-purple-500" : ""
              }`}
              onClick={() => handleItemClick("find-work")}
            >
              Find Work
            </a>
          </li>
          <li>
            <a
              href="#find-project"
              className={`text-gray-700 hover:text-purple-500 ${
                activeItem === "find-project" ? "text-purple-500" : ""
              }`}
              onClick={() => handleItemClick("find-project")}
            >
              Find Crew
            </a>
          </li>
          <li>
            <a
              href="#make-group"
              className={`text-gray-700 hover:text-purple-500 ${
                activeItem === "make-group" ? "text-purple-500" : ""
              }`}
              onClick={() => handleItemClick("make-group")}
            >
              Make Group
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`text-gray-700 hover:text-purple-500 ${
                activeItem === "about" ? "text-purple-500" : ""
              }`}
              onClick={() => handleItemClick("about")}
            >
              About
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-2 mr-10">
          {" "}
          <form className="flex">
            <input
              className="px-4 py-2 border border-gray-300 rounded-l-md"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-r-md"
              type="submit"
            >
              Search
            </button>
          </form>
          <button className="bg-white-500 text-gray px-4 py-2 rounded-md">
            Login
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
            Signup
          </button>
          <div className="flex items-center pl-5">
          <FaUserCircle className="text-gray-500 hover:text-gray-900 text-4xl" />
        </div>
        </div>
      </ul>
    </nav>
  );
}
