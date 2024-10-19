import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const[file,setFile]=useState(null);
    const[photos,setPhotos]=useState([]);
    const[loading,setLoading]=useState(null);
    const[error,setError]=useState(null);

useEffect(()=>{
    const fetchPhotos=async()=>{
        try{
            const response=axios.get('`http://localhost:5000/network/user')
            setPhotos(response.data)
            setLoading(false)
        }catch(error){
            setError('Error fetching !')
        }
    }
    fetchPhotos();
},[])


  return (
    <div>UserProfile</div>
  )
}

export default UserProfile