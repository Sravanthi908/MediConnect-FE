import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

function SetLocation() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('set-location/', { latitude, longitude });
      navigate('/hospitals');
    } catch (err) {
      alert('Failed to set location');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set Your Location</h2>
      <input placeholder="Latitude" value={latitude} onChange={e => setLatitude(e.target.value)} />
      <input placeholder="Longitude" value={longitude} onChange={e => setLongitude(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SetLocation;
