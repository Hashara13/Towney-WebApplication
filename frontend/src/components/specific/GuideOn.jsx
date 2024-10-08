import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CoverImg from '../../assets/images/logos/camc.jpg'
const GuideOn = () => {
  return (
    <div
      className="container flex flex-col justify-center items-center h-screen px-6 py-4 mx-auto text-center space-y-6 md:py-10"
      style={{
        backgroundImage: `url(${CoverImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl text-center md:text-left text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Join us and be a part of cinematic magic
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          As the creative visionary, you’ll orchestrate the entire production process, from guiding actors to framing each shot, ensuring the story unfolds beautifully on screen while maintaining the film’s artistic integrity.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400"
          >
            Download from App Store
          </a>
        </div>
      </div>
    </div>
   
  
  );
};

export default GuideOn;
