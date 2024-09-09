import React, { useState } from "react";
import CreateProfile from "../specific/CreateProfile";

const NewProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [availability, setAvailability] = useState("");
  const [time, setTime] = useState("");
  const [state, setState] = useState("");
  // const router=

  // const handleNext=()=>{
  //     const newProfile=(
  //       name,
  //       age,
  //       birthdate,
  //       availability,
  //       time,
  //       state
  //     )
  
  //   try{

  //     }
  // }
return (


    <div className="flex">
      <CreateProfile />
      <div className="flex-1 bg-white-200 py-3 px-10 min-h-screen">
        {" "}
        <div className="bg-white p-10 md:w-2/4 lg:w-1/2 mx-auto">
          <form action="">
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

                id="number"
                name="number"
                placeholder="Number"
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

                id="date"
                name="date"
                placeholder="Date"
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

                id="month"
                name="month"
                placeholder="Month"
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

                name="select"
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
              <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              // onPress={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProfile;
