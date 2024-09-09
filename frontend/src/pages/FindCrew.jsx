import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FindCrew() {

  const[pd,setPd]=useState([
  ])
  useEffect(()=>{
    axios.get('http://localhost:3000')
    .then(result=>setPd(result.data))
    .catch(err=>console.log(err))

  },[])
  return (
    <div>
      <h1>Crew</h1>
    </div>
  )
}

export default FindCrew
