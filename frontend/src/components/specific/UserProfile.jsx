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

const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };


  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Photo Upload</h1>
    <form onSubmit={handleUpload} className="mb-4">
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        className="mb-2"
      />
      <button
        type="submit"
        disabled={!file || loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo._id} className="border p-2">
          <img
            src={`http://localhost:5000/${photo.path}`}
            alt={photo.filename}
            className="w-full h-40 object-cover"
          />
          <p className="mt-2 text-sm">{photo.filename}</p>
        </div>
      ))}
    </div>
  </div>  )
}

export default UserProfile