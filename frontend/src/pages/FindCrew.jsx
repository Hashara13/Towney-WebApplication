import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate } from "react-router-dom";
function FindCrew() {

  const[producers,setProducers]=useState([
  ])
  useEffect(()=>{
    const viewProducers=()=>{
      axios.get('http://localhost:5000/network')
      .then(result=>setProducers(result.data))
      .catch(err=>console.log(err))
    }
    viewProducers();

  },[])
  return (
    <div className="flex-1">
{
producers.map((producer, name,index,availability)=>(


<div className="ml-2 flex w-1/2 bg-white shadow mt-6 rounded-lg p-2" key={index}>
      <img 
        src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80" 
        alt="Just a flower" 
        className="w-16 object-cover h-16 rounded-xl"
      />
      <div className="flex flex-col justify-center w-full px-2 py-1">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-sm font-medium">{producer.name}</h2>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-blue-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </div>
        <div className="flex pt-2 text-sm text-gray-400">
          <div className="flex items-center mr-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="font-normal">{producer.availability}</p>
          </div>
          <div className="flex items-center font-medium text-gray-900">
            $1800
            <span className="text-gray-400 text-sm font-normal"> /wk</span>
          </div>
        </div>
      </div>
    </div>
 ))}
      
    </div>

  )
}

export default FindCrew
