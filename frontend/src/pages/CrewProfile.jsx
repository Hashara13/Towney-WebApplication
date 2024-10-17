import React, { useEffect, useState } from "react";
import axios from "axios";
import ProFicImage from "../assets/images/logos/pro.jpg";

const CrewProfile = ({ id }) => {
  const [crewProfile, setCrewProfile] = useState(null);
  const [crewRates, setCrewRates] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get(`http://localhost:5000/network/get/${id}`);
        const ratesResponse = await axios.get(`http://localhost:5000/network/rates/${id}`);
        
        setCrewProfile(profileResponse.data);
        setCrewRates(ratesResponse.data.rate);
      } catch (error) {
        console.error(`Error fetching data for ID ${id}:`, error);
      }
    };
    
    fetchData();
  }, [id]);

  if (!crewProfile || !crewRates) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-200 mt-[-50px]">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-purple-400">
              <div className="image overflow-hidden">
                <img className="h-auto w-full mx-auto" src={ProFicImage} alt="Film Crew" />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{crewProfile.name}</h1>
              <h3 className="text-purple-600 font-sm text-semibold leading-6">{crewProfile.performRole}</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Experience spanning over 10 years in the film industry, working on multiple local and international productions.
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">{crewProfile.availability}</span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Age</span>
                  <span className="ml-auto">{crewProfile.age}</span>
                </li>
                <li className="flex items-center py-3">
                  <span>Phone</span>
                  <span className="ml-auto">+94 70255155</span>
                </li>
                <li className="flex items-center py-3">
                  <span>Email</span>
                  <a href={`mailto:${crewProfile.email}`} className="ml-auto">
                    {crewProfile.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm ">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{crewProfile.firstName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">{crewProfile.lastName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{crewProfile.gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Current Address</div>
                    <div className="px-4 py-2">{crewProfile.address}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">{crewProfile.birthday}</div>
                  </div>
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button>
            </div>

            <div className="bg-white p-3 shadow-sm rounded-sm mt-4">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <span className="text-green-500">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v22m5-16H9a3 3 0 000 6h6a3 3 0 010 6H9" />
                  </svg>
                </span>
                <span className="tracking-wide">Pricing</span>
              </div>

              <ul className="list-inside space-y-2">
                <li>
                  <div className="text-teal-600">Basic</div>
                  <div className="text-gray-500 text-xs">${crewRates.basic}</div>
                </li>
                <li>
                  <div className="text-teal-600">Premium</div>
                  <div className="text-gray-500 text-xs">${crewRates.premium}</div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-3 shadow-sm rounded-sm mt-4">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <span className="text-green-500">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span className="tracking-wide">Experience</span>
              </div>
              <ul className="list-inside space-y-2">
                <li>
                  <div className="text-teal-600">Cinematographer at XYZ Films</div>
                  <div className="text-gray-500 text-xs">Jan 2015 - Present</div>
                </li>
                <li>
                  <div className="text-teal-600">Assistant Cinematographer at ABC Productions</div>
                  <div className="text-gray-500 text-xs">June 2012 - Dec 2014</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewProfile;
