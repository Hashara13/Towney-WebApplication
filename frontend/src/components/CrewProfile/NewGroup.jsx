import React, { useState, useEffect } from "react";
import CreateProfile from "../specific/CreateProfile";
import SideBar from "../specific/SideBar";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

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

  const AddMember = (e) => {
    e.preventDefault(); // Prevent form submission
    if (selectedMember && !groupMembers.some(m => m._id === selectedMember)) {
      const addtoList = members.find(m => m._id === selectedMember);
      setGroupMembers([...groupMembers, addtoList]);
      setSelectedMember('');
    }
  };

  const RemoveMember = (member_id) => {
    setGroupMembers(groupMembers.filter(m => m._id !== member_id));
  };

  const handleNext = (e) => {
    e.preventDefault();

    const newGroup = {
      groupName,
      desc,
      location,
      cost,
      members: groupMembers.map(member => member._id),
    };

    console.log("New group:", newGroup);

    // Uncomment this section when ready to submit to the backend
    // axios
    //   .post("http://localhost:5000/create/group", newGroup)
    //   .then((result) => {
    //     console.log(result);
    //     alert("Group added successfully!");
    //     // navigate("/summary");
    //   })
    //   .catch((err) => {
    //     console.error("There was an error!", err);
    //     alert("Group addition unsuccessful!");
    //   });
  };

  if (isLoading) {
    return <div>Loading members...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 bg-white-200 py-3 px-10 min-h-screen">
        <div className="bg-white p-10 md:w-2/4 lg:w-1/2 mx-auto">
          <form onSubmit={handleNext}>
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
                    {member.name} | {member.performRole}
                  </option>
                ))}
              </select>
              <button
                type="button" // Change to type="button"
                className="ml-10 bg-gray-600 flex justify-center items-center text-white px-3 py-2 rounded-md"
                onClick={AddMember}
              >
                Add
              </button>
            </div>
      <ul className="space-y-3">
        {groupMembers.map((member) => (
          <li 
            key={member._id} 
            className="flex items-center justify-between bg-gray-50 p-4 rounded-md transition duration-150 ease-in-out hover:bg-gray-100"
          >
            <div className="flex flex-col">
              <span className="text-lg font-medium text-gray-900">{member.name}</span>
              <span className="text-sm text-gray-500">{member.performRole}</span>
            </div>
            <button
              type="button"
              onClick={() => RemoveMember(member._id)}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full transition duration-150 ease-in-out"
              aria-label={`Remove ${member.name}`}
            >
              <span className="text-lg font-medium">×</span>
            </button>
          </li>
        ))}
      </ul>
      {groupMembers.length === 0 && (
        <p className="text-gray-500 text-center py-4">No group members yet.</p>
      )}

            <div className="pt-2 flex items-center space-x-4">
              <button type="button" className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>{" "}
                Discard
              </button>
              <button
                type="submit"
                className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewGroup;