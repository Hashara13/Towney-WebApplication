import React from 'react'

const FindWorks = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen">
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Find Your Perfect Crew
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl">
          Connect with top talent in the industry and bring your projects to life.
        </p>
        <div className="mt-10 max-w-lg mx-auto">
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search crew members"
              value={searchText}
              onChange={handleSearch}
              className="flex-grow px-6 py-4 text-gray-700 focus:outline-none"
            />
            <button className="bg-purple-500 text-white px-6 py-4 hover:bg-purple-600 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fileterProducers.map((producer, index) => (
          <div
            key={producer._id || index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
              <img
          src={ProFicImage}
          alt={`${producer.name}'s profile`}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
                <div>
                  <Link to={`/profile/${producer._id}`} className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                    {producer.name}
                  </Link>
                  <p className="flex-start text-sm text-purple-600 font-medium">{producer.performRole}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="flex items-center bg-yellow-100 rounded-full px-3 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium text-yellow-700">4.5</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">({Math.floor(Math.random() * 50) + 10} reviews)</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-gray-600">
                  Available: <span className="text-green-600">{producer.availability}</span>
                </p>
                <p className="text-lg font-bold text-gray-900">$1,900<span className="text-sm font-normal text-gray-500">/wk</span></p>
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Hire Now
                </button>
                <button className="text-gray-400 hover:text-purple-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Ready to Build Your Dream Team?
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          Join our network and connect with top professionals in the industry.
        </p>
        <Link to="/create">

        <button className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  </div>
);
}  
export default FindWorks