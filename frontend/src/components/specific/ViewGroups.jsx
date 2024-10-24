import React, { useEffect, useState } from "react";
import axios from "axios";import SideBar from './SideBar'

const ViewGroups = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const viewGroups = async () => {
      try {
        const response = await axios.get("http://localhost:5000/view/group");
        setGroups(response.data);
      } catch (err) {
        console.error("Error fetching groups:", err);
        setError("Failed to fetch groups. Please try again later.");
      }
    };
    viewGroups();
  }, []);



  return (
    <div className="flex">
        <SideBar/>
ViewGroups</div>
  )
}

export default ViewGroups