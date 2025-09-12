// src/pages/BookAppointment.jsx
import { useParams, useNavigate } from 'react-router-dom';
import hospitals from '../data/hospitals';
import { useState } from 'react';

function BookAppointment() {
  const { hospitalId, doctorId } = useParams();
  const hospital = hospitals.find(h => h.id === parseInt(hospitalId));
  const doctor = hospital?.doctors.find(d => d.id === parseInt(doctorId));
  const [isBooked, setIsBooked] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    patientName: '',
    contactNumber: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to backend
    console.log('Appointment booked:', {
      hospital: hospital.name,
      doctor: doctor.name,
      ...formData
    });
    setIsBooked(true);
    
    // Redirect after 3 seconds
    setTimeout(() => {
      navigate(`/hospital/${hospitalId}`);
    }, 3000);
  };

  if (!hospital || !doctor) {
    return <div>Hospital or Doctor not found</div>;
  }

  if (isBooked) {
    return (
      <div className="container success-container">
        <div className="success-icon">✓</div>
        <h1>Appointment Booked Successfully!</h1>
        <p>Your appointment with Dr. {doctor.name} at {hospital.name} has been confirmed.</p>
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Time:</strong> {formData.time}</p>
        <p>You will be redirected to the hospital details page shortly.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Book Appointment</h1>
      <h2>{hospital.name}</h2>
      <h3>Dr. {doctor.name} ({doctor.specialization})</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div>
          <label>Patient Name:</label>
          <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Reason for Visit:</label>
          <textarea name="reason" value={formData.reason} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;