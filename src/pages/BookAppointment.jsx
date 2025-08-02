import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

function BookAppointment() {
  const { id } = useParams();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('book-appointment/', {
        hospital_id: id,
        date,
        time,
      });
      alert('Appointment booked successfully');
    } catch (error) {
      alert('Failed to book appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookAppointment;
