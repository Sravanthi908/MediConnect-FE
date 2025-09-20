// src/components/appointments/BookingForm.jsx
import React, { useState } from "react";
import Button from "../ui/Button"; // Default export

const BookingForm = ({ doctor, onBooking }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) {
      alert("Please select both date and time");
      return;
    }
    // Pass the booking info to parent
    onBooking({ doctor, date, time });
    alert(`Appointment booked with ${doctor.name} on ${date} at ${time}`);
    // Clear form
    setDate("");
    setTime("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow-md rounded-lg max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Doctor</label>
        <input
          type="text"
          value={doctor.name}
          disabled
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <Button type="submit">Book Appointment</Button>
    </form>
  );
};

export default BookingForm;
