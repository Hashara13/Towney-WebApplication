import React, { useState, useEffect } from "react";
import CreateProfile from "../specific/CreateProfile";
import SideBar from "../specific/SideBar";
import axios from "axios";
import { Link } from "react-router-dom";

const NewGroup = () => {
  const [groupName, setGroupname] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [cost, setCost] = useState("");
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupMembers, setGroupMembers] = useState([]);


  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/network");
        setMembers(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("An error occurred while fetching members.");
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleMemberChange = (e) => {
    setSelectedMember(e.target.value);
  };

  if (isLoading) {
    return <div>Loading members...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


const AddMember=async()=>{
  if(selectedMember && !groupMembers.same(m=>m._id===groupMembers)){
    const addtoList=members.find(m=>m._id===groupMembers)
    setSelectedMember([...groupMembers,addtoList])
    setGroupMembers('');
  }
}

const RemoveMember=async (member_id)=>{
  setGroupMembers(groupMembers.filter(m=>m._id!==member_id))
}

  const handleNext = (e) => {
    e.preventDefault();

    const newGroup = {
      groupName,
      desc,
      location,
      cost,
      members,
    };

    // axios
    //   .post("http://localhost:5000/create/rates", newRate)
    //   .then((result) => {
    //     console.log(result);
    //     alert("group added done !");
    //     // navigate("/summary");
    //   })
    //   .catch((err) => {
    //     console.error("There was an error!", err);
    //     alert("Group added unsuccesfull !");
    //   });
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
                Group Name
              </label>
              <input
                type="text"
                onChange={(e) => setGroupname(e.target.value)}
                id="groupName"
                name="groupName"
                placeholder="Enter Group Name "
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                htmlFor="number"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Add a Description
              </label>
              <input
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                id="desc"
                name="desc"
                placeholder="Description"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                htmlFor="date"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Available Location
              </label>
              <input
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                id="location"
                name="location"
                placeholder="Enter available location"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                htmlFor="month"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Charges for Group{" "}
              </label>
              <input
                type="text"
                onChange={(e) => setCost(e.target.value)}
                id="cost"
                name="cost"
                placeholder="Your cost Expenses "
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                                            text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                htmlFor="select"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Add Members
              </label>
              <select
                id="members"
                onChange={handleMemberChange}
                name="members"
                value={selectedMember}
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-purple-400 
                  text-gray-600 placeholder-gray-400 outline-none"
              >
                <option value="">Select</option>
                {members.map((member) => (
                  <option key={member._id} value={member._id}>
                    {member.name} |   {member.performRole}
                  </option>
                ))}
              </select>
              <button
                  class="ml-10 bg-gray-600 flex justify-center items-center text-white px-3 py-2 rounded-md "
                  onClick={AddMember}
                >
                  Add
                </button>
            </div>

            <div className="mb-5">
              <h3 className="font-bold text-gray-600 mb-2">Added Members:</h3>
              <ul>
                {groupMembers.map((member) => (
                  <li key={member._id} className="flex justify-between items-center mb-2">
                    <span>{member.name} | {member.performRole}</span>
                    <button
                      type="button"
                      onClick={() => RemoveMember(member._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md text-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
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

export default NewGroup;
