import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';  // ✅ use axiosInstance

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('book-appointment/', {
        hospital_id: id,
        date,
        time,
      });
      alert('✅ Appointment booked successfully');
      navigate('/appointments'); // redirect to "My Appointments" page
    } catch (error) {
      console.error(error);
      alert('❌ Failed to book appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
      <h2>Book Appointment</h2>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
        style={{ padding: "0.5rem" }}
      />
      <input
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
        required
        style={{ padding: "0.5rem" }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          padding: "0.75rem",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Book
      </button>
    </form>
  );
}

export default BookAppointment;
