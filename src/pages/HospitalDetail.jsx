// pages/HospitalDetail.jsx
import { useParams, Link } from 'react-router-dom';
import hospitals from '../data/hospitals';

function HospitalDetail() {
  const { id } = useParams();
  const hospital = hospitals.find(h => h.id === parseInt(id));

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  return (
    <div className="container">
      <h1>{hospital.name}</h1>
      <img src={hospital.image} alt={hospital.name} />
      <p><strong>Address:</strong> {hospital.address}</p>
      <p><strong>Phone:</strong> {hospital.phone}</p>
      <h2>Doctors</h2>
      <div className="doctor-list">
        {hospital.doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Availability:</strong> {doctor.availability}</p>
            <Link to={`/book-appointment/${hospital.id}/${doctor.id}`}>
              <button>Book Appointment</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalDetail;