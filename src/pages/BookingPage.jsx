// src/pages/BookingPage.jsx
import React, { useState } from 'react';
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import DoctorCard from "../components/doctors/DoctorCard";
import BookingForm from "../components/appointments/BookingForm";
import { useDoctors } from "../hooks/useDoctors";
import Loader from "../components/ui/Loader";

const BookingPage = () => {
  const { doctors, loading } = useDoctors();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleBookingSuccess = () => {
    alert('Appointment booked successfully!');
    // Reset selection or redirect
    setSelectedDoctor(null);
  };

  if (loading) return <Loader />;

  return (
    <div className="booking-page">
      <Header />
      <div className="booking-container">
        <Sidebar />
        <main className="booking-content">
          <h1>Book an Appointment</h1>
          
          <div className="booking-layout">
            <div className="doctors-list">
              <h2>Select a Doctor</h2>
              <div className="doctors-grid">
                {doctors.map(doctor => (
                  <DoctorCard 
                    key={doctor.id}
                    doctor={doctor}
                    onSelect={() => setSelectedDoctor(doctor)}
                    isSelected={selectedDoctor?.id === doctor.id}
                  />
                ))}
              </div>
            </div>
            
            <div className="booking-form-container">
              {selectedDoctor ? (
                <>
                  <h2>Booking with Dr. {selectedDoctor.name}</h2>
                  <BookingForm 
                    doctorId={selectedDoctor.id}
                    onBookingSuccess={handleBookingSuccess}
                  />
                </>
              ) : (
                <div className="select-doctor-prompt">
                  <p>Please select a doctor to book an appointment</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookingPage;