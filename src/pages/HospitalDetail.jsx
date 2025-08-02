import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../api/axios';

function HospitalDetail() {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    axios.get(`hospital/${id}/`)
      .then(res => setHospital(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!hospital) return <p>Loading...</p>;

  return (
    <div>
      <h2>{hospital.name}</h2>
      <p>{hospital.address}</p>
      <p>{hospital.description}</p>
      <Link to={`/book/${hospital.id}`}>Book Appointment</Link>
    </div>
  );
}

export default HospitalDetail;
