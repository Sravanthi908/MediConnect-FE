// src/pages/NearbyHospitals.jsx
import { Link } from 'react-router-dom';
import hospitals from '../data/hospitals'; // Note: Capital 'H'

function NearbyHospitals() {
  return (
    <div className="container">
      <h1>Nearby Hospitals</h1>
      <div className="hospital-list">
        {hospitals.map(hospital => (
          <div key={hospital.id} className="hospital-card">
            <img src={hospital.image} alt={hospital.name} />
            <h2>{hospital.name}</h2>
            <p>{hospital.address}</p>
            <p>{hospital.phone}</p>
            <Link to={`/hospital/${hospital.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearbyHospitals;