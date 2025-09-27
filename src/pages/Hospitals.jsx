import React, { useState, useEffect } from 'react';
import { authService } from '../services/authService';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setLoading(true);
        const data = await authService.getHospitals();
        setHospitals(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  if (loading) return <div>Loading hospitals...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="hospitals-container">
      <h2>Hospitals</h2>
      {hospitals.length === 0 ? (
        <p>No hospitals found</p>
      ) : (
        <ul className="hospitals-list">
          {hospitals.map(hospital => (
            <li key={hospital.id} className="hospital-item">
              <h3>{hospital.name}</h3>
              <p>{hospital.address}</p>
              <p>{hospital.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Hospitals;