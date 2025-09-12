// src/pages/NearbyHospitals.jsx
import { Link } from 'react-router-dom';
import hospitals from '../data/hospitals';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function NearbyHospitals() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Nearby Hospitals</h1>
        <div className="user-info">
          <span>Welcome, {currentUser?.name || currentUser?.username}</span> {/* Changed to show username if name is not available */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
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