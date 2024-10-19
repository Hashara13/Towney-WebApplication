import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const[file,setFile]=useState(null);
    const[photos,setPhotos]=useState([]);
    const[loading,setLoading]=useState(null);
    const[error,setError]=useState(null);




  return (
    <div>UserProfile</div>
  )
}

export default UserProfile