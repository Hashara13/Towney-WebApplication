import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SideBar from "../specific/SideBar";

const NewScriptPost = () => {
  const navigate = useNavigate();
  const [scriptData, setScriptData] = useState({
    title: '',
    description: '',
    genre: '',
    scriptFile: '',
    budget: '',
    location: '',
    productionStartDate: '',
    productionEndDate: '',
    crewPositions: [{ role: '', description: '' }]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScriptData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCrewPositionChange = (index, field, value) => {
    const updatedCrewPositions = [...scriptData.crewPositions];
    updatedCrewPositions[index][field] = value;
    setScriptData(prevData => ({
      ...prevData,
      crewPositions: updatedCrewPositions
    }));
  };

  const addCrewPosition = () => {
    setScriptData(prevData => ({
      ...prevData,
      crewPositions: [...prevData.crewPositions, { role: '', description: '' }]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/script/new', scriptData);
      console.log('Script posted successfully:', response.data);
      navigate('/scripts'); // Redirect to scripts list page
    } catch (error) {
      console.error('Error posting script:', error);
      alert('Failed to post script. Please try again.');
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-6">Post New Script</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={scriptData.title}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={scriptData.description}
              onChange={handleInputChange}
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>

          <div>
            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={scriptData.genre}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="scriptFile" className="block text-sm font-medium text-gray-700">Script File URL</label>
            <input
              type="text"
              id="scriptFile"
              name="scriptFile"
              value={scriptData.scriptFile}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={scriptData.budget}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={scriptData.location}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="productionStartDate" className="block text-sm font-medium text-gray-700">Production Start Date</label>
            <input
              type="date"
              id="productionStartDate"
              name="productionStartDate"
              value={scriptData.productionStartDate}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="productionEndDate" className="block text-sm font-medium text-gray-700">Production End Date</label>
            <input
              type="date"
              id="productionEndDate"
              name="productionEndDate"
              value={scriptData.productionEndDate}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Crew Positions</label>
            {scriptData.crewPositions.map((position, index) => (
              <div key={index} className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="Role"
                  value={position.role}
                  onChange={(e) => handleCrewPositionChange(index, 'role', e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={position.description}
                  onChange={(e) => handleCrewPositionChange(index, 'description', e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addCrewPosition}
              className="mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Crew Position
            </button>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/scripts')}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Post Script
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewScriptPost;