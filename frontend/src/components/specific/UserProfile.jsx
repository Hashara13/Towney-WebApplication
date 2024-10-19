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

const handleUpload=async(e)=>{
    e.preventDefault();
    if(!file){
        alert("File dosen't exist !")
        return
    }
    const formData=new FormData();
    formData.append('photo',file)
    setLoading(true)
    setError(null)
    try{
        await axios.get('http://localhost:5000/create/upload', formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        setFile(null)
    }catch(error){
        setError(null)
    }finally{
        setLoading(false)
    }
}


  return (
    <div>UserProfile</div>
  )
}

export default UserProfile