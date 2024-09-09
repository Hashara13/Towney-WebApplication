import React, { useState } from "react";
import CreateProfile from "../specific/CreateProfile";
import axios from 'axios'
import { Link } from 'react-router-dom';

const NewProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [availability, setAvailability] = useState("");
  const [time, setTime] = useState("");
  const [state, setState] = useState("");


  const handleNext = (e) => {
    e.preventDefault();

    const newProfile = {
      name,
      age,
      birthdate,
      availability,
      time,
      state
    };

    axios.post('http://localhost:3001/create/new', newProfile)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error('There was an error!',err);
      });
  };
return (


    <div className="flex">
      <CreateProfile />
      <div className="flex-1 bg-white-200 py-3 px-10 min-h-screen">
        {" "}
        <div className="bg-white p-10 md:w-2/4 lg:w-1/2 mx-auto">
          <form action="POST">
            <div className="flex items-center mb-5">
              <label
                htmlFor="name"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Display Name
              </label>
              <input
                type="text"
                onChange={(e)=>setName(e.target.value)}
                id="name"
                name="name"
                placeholder="Name"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                          text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                htmlFor="number"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Age
              </label>
              <input
                type="number"
                onChange={(e)=>setAge(e.target.value)}

                id="age"
                name="age"
                placeholder="Enter Age"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                          text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                htmlFor="date"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                BirthDate
              </label>
              <input
                type="date"
                onChange={(e)=>setBirthDate(e.target.value)}

                id="birthDate"
                name="birthDate"
                placeholder="birthDate"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                          text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                htmlFor="month"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Working Availability
              </label>
              <input
                type="month"
                onChange={(e)=>setAvailability(e.target.value)}

                id="avilability"
                name="avilability"
                placeholder="avilability"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                          text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                htmlFor="time"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Time
              </label>
              <input
                type="time"
                onChange={(e)=>setTime(e.target.value)}

                id="time"
                name="time"
                placeholder="Time"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                          text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                htmlFor="select"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                State
              </label>
              <select
                id="select"
                onChange={(e)=>setState(e.target.value)}

                name="state"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                          text-gray-600 placeholder-gray-400 outline-none"
              >
                <option>Western</option>
                <option>Central</option>
                <option>Southern</option>
                <option>Sabaragamuwa</option>
                <option>North Western</option>
                <option>North Central</option>
                <option>Uva</option>
                <option>Eastern</option>
                <option>Northern</option>
              </select>
            </div>

            <div class="pt-2 flex items-center space-x-4">
              <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg
                  class="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>{" "}
                Discard
              </button>
              <Link to='/network'>
              <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              onClick={handleNext}
              >
                Next
              </button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProfile;
