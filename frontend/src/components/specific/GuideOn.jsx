import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
const GuideOn = () => {
  return (

    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="flex flex-col items-center w-full md:flex-row md:w-1/2" >
    <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
      <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"></button>
      <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
      <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
      <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
    </div>

    <div className="max-w-lg md:mx-12 md:order-2 text-center md:text-left">
      <h1 className="text-3xl font-medium tracking-wide text-gray-800 md:text-4xl">Join us and be a part of cinematic magic</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">As the creative visionary, you’ll orchestrate the entire production process, from guiding actors to framing each shot, ensuring the story unfolds beautifully on screen while maintaining the film’s artistic integrity.</p>
      <div className="mt-6">
        <a href="#" className="block px-5 py-3 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Download from App Store</a>
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center w-full h-96 md:w-1/2">
    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo"/>
  </div>
</div>

  )
}

export default GuideOn