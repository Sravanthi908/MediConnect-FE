// src/components/appointments/BookingForm.jsx
import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { TimeSlotPicker } from './TimeSlotPicker';
import { CalendarView } from './CalendarView';

const BookingForm = ({ doctorId, onBookingSuccess }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Booking appointment:', {
        doctorId,
        date: selectedDate,
        time: selectedTime,
        reason
      });
      
      onBookingSuccess();
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book Appointment</h2>
      
      <div className="form-group">
        <label>Select Date</label>
        <CalendarView 
          selectedDate={selectedDate} 
          onDateChange={setSelectedDate} 
        />
      </div>

      <div className="form-group">
        <label>Select Time</label>
        <TimeSlotPicker 
          selectedTime={selectedTime} 
          onTimeSelect={setSelectedTime} 
          selectedDate={selectedDate}
        />
      </div>

      <div className="form-group">
        <label>Reason for Visit</label>
        <Input
          type="text"
          placeholder="Enter reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Booking...' : 'Book Appointment'}
      </Button>
    </form>
  );
};

export default BookingForm;