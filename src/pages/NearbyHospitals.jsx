import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

function NearbyHospitals() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get('nearby-hospitals/')
      .then(res => setHospitals(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Nearby Hospitals</h2>
      {hospitals.map(hospital => (
        <div key={hospital.id}>
          <h3>{hospital.name}</h3>
          <p>{hospital.address}</p>
          <Link to={`/hospital/${hospital.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default NearbyHospitals;
