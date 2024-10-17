import React, { useState } from "react";
import CreateProfile from "../specific/CreateProfile";
import SideBar from "../specific/SideBar";
import axios from "axios";
import { Link,  } from "react-router-dom";

const NewGroup = () => {
  
    const [dailyR, setDailyR] = useState("");
    const [hourlyR, setHourlyR] = useState("");
    const [overR, setOverR] = useState("");
    const [accom, setAccom] = useState("");
    const [travel, setTravel] = useState("");
    const [comm, setCommm] = useState("");
  
    const handleNext = (e) => {
      e.preventDefault();
  
      // if (!dailyR || !hourlyR || !overR || !accom || !travel || !comm) {
      //   alert("Please fill in all fields");
      //   return;
      // }
  
      const newRate = {
        dailyR,
        overR,
        hourlyR,
        accom,
        travel,
        comm,
      };
  
      axios
        .post("http://localhost:5000/create/rates", newRate)
        .then((result) => {
          console.log(result);
          alert("Rates added done !");
          // navigate("/summary");
        })
        .catch((err) => {
          console.error("There was an error!", err);
          alert("Rates added unsuccesfull !");
        });
    };
  
    return (
      <div className="flex">
        <SideBar />
        <div className="flex-1 bg-white-200 py-3 px-10 min-h-screen">
          {" "}
          <div className="bg-white p-10 md:w-2/4 lg:w-1/2 mx-auto">
            <form action="POST">
              <div className="flex items-center mb-5">
                <label
                  htmlFor="name"
                  className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
                >
                  Daily Rate
                </label>
                <input
                  type="text"
                  onChange={(e) => setDailyR(e.target.value)}
                  id="dailyR"
                  name="dailyR"
                  placeholder="Enter Daily Rate"
                  className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>
  
              <div className="flex items-center mb-5">
                <label
                  htmlFor="number"
                  className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
                >
                  Hourly Rate
                </label>
                <input
                  type="text"
                  onChange={(e) => setHourlyR(e.target.value)}
                  id="hourlyR"
                  name="hourlyR"
                  placeholder="Enter Hourly Rate"
                  className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>
  
              <div className="flex items-center mb-5">
                <label
                  htmlFor="date"
                  className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
                >
                  Overtime Rate
                </label>
                <input
                  type="text"
                  onChange={(e) => setOverR(e.target.value)}
                  id="overR"
                  name="overR"
                  placeholder="Enter Overtime Rate"
                  className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>
  
              <div className="flex items-center mb-5">
                <label
                  htmlFor="month"
                  className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
                >
                  Accommodation Expenses{" "}
                </label>
                <input
                  type="text"
                  onChange={(e) => setAccom(e.target.value)}
                  id="accom"
                  name="accom"
                  placeholder="Your Accommodation Expenses "
                  className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>
  
              <div className="flex items-center mb-5">
                <label
                  htmlFor="select"
                  className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
                >
                  Willingness to Travel
                </label>
                <select
                  id="travel"
                  onChange={(e) => setTravel(e.target.value)}
                  name="travel"
                  value={travel}
                  className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
                >
                   <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
                </select>
              </div>
              <div className="flex items-center mb-5">
                <label
                  htmlFor="month"
                  className="inline-block w-90 mr-6 text-right font-bold text-gray-600"
                >
                  Additional Comments or Conditions{" "}
                </label>
                <input
                  type="text"
                  onChange={(e) => setCommm(e.target.value)}
                  id="comm"
                  name="comm"
                  placeholder="Comments or Conditions "
                  className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
                />
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
                <Link to="/network">
                  <button
                    class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    onClick={handleNext}
                  >
                    Create
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
export default NewGroup