import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import CustomToggle from '../specific/CustomToggle';
import logo from "../../assets/images/logos/1-removebg-preview.png";

export default function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/welcome");
    }).catch((error) => {
      console.error("Sign out error", error);
    });
  };

  return (
    <nav className="bg-white shadow-md p-3 pb-2 flex justify-between items-center w-full">
      <ul className="flex space-x-6 items-center">
        <li>
          <Link className="nav-link" to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </li>
        <li>
          <Link
            to="/network"
            className={`text-gray-700 hover:text-purple-500 ${activeItem === "find-crew" ? "text-purple-500" : ""}`}
            onClick={() => handleItemClick("find-crew")}
          >
            Find Crew
          </Link>
        </li>
        <li>
          <a
            href="#find-project"
            className={`text-gray-700 hover:text-purple-500 ${activeItem === "find-project" ? "text-purple-500" : ""}`}
            onClick={() => handleItemClick("find-project")}
          >
            Find Work
          </a>
        </li>
        <li>
          <a
            href="#make-group"
            className={`text-gray-700 hover:text-purple-500 ${activeItem === "make-group" ? "text-purple-500" : ""}`}
            onClick={() => handleItemClick("make-group")}
          >
            Talents Groups
          </a>
        </li>
        <li>
          <Link
            to="/create"
            className={`text-gray-700 hover:text-purple-500 ${activeItem === "portfolio" ? "text-purple-500" : ""}`}
            onClick={() => handleItemClick("portfolio")}
          >
            Join Us
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-2">
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

        {user ? (
          <div className="flex items-center pl-2 relative">
            <span className="mr-4 text-gray-700">{user.displayName || user.email}</span>
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown" />
              <Dropdown.Menu className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                <Dropdown.Item href="#/profile">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="#/settings">
                  <FontAwesomeIcon icon={faGears} className="mr-2" />
                  Settings
                </Dropdown.Item>
                <Dropdown.Item href="/welcome" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <>
            <Link className="nav-link" to="/login">
              <button className="bg-white text-gray-900 px-4 py-2 rounded-md">
                Login
              </button>
            </Link>
            <Link className="nav-link" to="/register">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
