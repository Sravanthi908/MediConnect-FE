import React, { useState, useEffect } from "react";
import "./Hospitals.css";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);

  // Example: fetch hospitals from backend API
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/hospitals/"); // 🔹 change URL to your Django backend
        const data = await response.json();
        setHospitals(data);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    };

    fetchHospitals();
  }, []);

  const handleViewDetails = (hospital) => {
    alert(`Viewing details for ${hospital.name}`);
    // 👉 You can navigate to a HospitalDetail page here
    // e.g., useNavigate(`/hospitals/${hospital.id}`)
  };

  const handleBookAppointment = (hospital) => {
    alert(`Booking appointment at ${hospital.name}`);
    // 👉 You can navigate to a BookAppointment page here
  };

  return (
    <div className="hospitals-container">
      <h2>Nearby Hospitals</h2>
      {hospitals.length === 0 ? (
        <p>No hospitals available.</p>
      ) : (
        hospitals.map((hospital) => (
          <div key={hospital.id} className="hospital-card">
            <div className="hospital-name">{hospital.name}</div>
            <div className="hospital-address">{hospital.address}</div>
            <div className="hospital-actions">
              <button
                className="view-btn"
                onClick={() => handleViewDetails(hospital)}
              >
                View Details
              </button>
              <button
                className="book-btn"
                onClick={() => handleBookAppointment(hospital)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Hospitals;
