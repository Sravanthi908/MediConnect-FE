// src/components/appointments/CalendarView.jsx
import React from 'react';

const CalendarView = ({ selectedDate, onDateChange }) => {
  const handleDateChange = (e) => {
    onDateChange(new Date(e.target.value));
  };

  return (
    <div className="calendar-view">
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={handleDateChange}
        min={new Date().toISOString().split('T')[0]}
      />
    </div>
  );
};

export default CalendarView;