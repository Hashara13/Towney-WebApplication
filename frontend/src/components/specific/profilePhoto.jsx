import { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePhoto = (seed) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://api.dicebear.com/6.x/initials/svg?seed=${seed}`);
        setImageUrl(`data:image/svg+xml;utf8,${encodeURIComponent(response.data)}`);
      } catch (error) {
        console.error('Error fetching profile image:', error);
        setImageUrl('/placeholder.svg'); 
      }
    };

    fetchImage();
  }, [seed]);

  return imageUrl;
};

export default ProfilePhoto;