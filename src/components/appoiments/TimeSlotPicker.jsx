// src/components/appointments/TimeSlotPicker.jsx
import React from 'react';

const TimeSlotPicker = ({ selectedTime, onTimeSelect, selectedDate }) => {
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00'
  ];

  return (
    <div className="time-slot-picker">
      {timeSlots.map(time => (
        <button
          key={time}
          type="button"
          className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
          onClick={() => onTimeSelect(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSlotPicker;