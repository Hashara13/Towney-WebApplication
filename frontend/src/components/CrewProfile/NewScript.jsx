import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
import SideBar from '../specific/SideBar';
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

  const removeCrewPosition = (index) => {
    setScriptData(prevData => ({
      ...prevData,
      crewPositions: prevData.crewPositions.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulating API call
      console.log('Script data submitted:', scriptData);
      navigate('/scripts');
    } catch (error) {
      console.error('Error posting script:', error);
      alert('Failed to post script. Please try again.');
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 bg-white-200 py-3 px-10 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-3 mt-3">Post New Script</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-sm rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={scriptData.title}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              value={scriptData.description}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="scriptFile" className="block text-sm font-medium text-gray-700">Script File URL</label>
              <input
                type="text"
                id="scriptFile"
                name="scriptFile"
                value={scriptData.scriptFile}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Desired Budget</label>
              <input
                type="number"
                id="budget"
                name="budget"
                value={scriptData.budget}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="productionStartDate" className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                id="productionStartDate"
                name="productionStartDate"
                value={scriptData.productionStartDate}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="productionEndDate" className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                id="productionEndDate"
                name="productionEndDate"
                value={scriptData.productionEndDate}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Crew Positions</label>
            {scriptData.crewPositions.map((position, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={position.role}
                  onChange={(e) => handleCrewPositionChange(index, 'role', e.target.value)}
                  placeholder="Required Talent"
                  className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input
                  type="text"
                  value={position.description}
                  onChange={(e) => handleCrewPositionChange(index, 'description', e.target.value)}
                  placeholder="Description"
                  className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => removeCrewPosition(index)}
                  className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addCrewPosition}
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="h-4 w-4 mr-1" /> Add Crew Position
            </button>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/scripts')}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Post Script
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default NewScriptPost;