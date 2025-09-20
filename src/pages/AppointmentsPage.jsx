// src/pages/AppointmentsPage.jsx
import React from "react";
import Sidebar from "../components/layout/Sidebar"; // Default export
import DoctorCard from "../components/doctors/DoctorCard"; // Default export

const AppointmentsPage = () => {
  // Example data for appointments/doctors
  const appointments = [
    {
      id: 1,
      doctor: { name: "Dr. Smith", specialty: "Cardiologist", hospital: "City Hospital" },
      date: "2025-09-25",
      time: "10:00 AM",
    },
    {
      id: 2,
      doctor: { name: "Dr. Jane", specialty: "Dermatologist", hospital: "Sunrise Clinic" },
      date: "2025-09-26",
      time: "02:00 PM",
    },
    {
      id: 3,
      doctor: { name: "Dr. Lee", specialty: "Pediatrician", hospital: "Metro Clinic" },
      date: "2025-09-27",
      time: "11:00 AM",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Your Appointments</h1>
        <div className="grid grid-cols-3 gap-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="appointment-card p-4 bg-white rounded-lg shadow-md"
            >
              <DoctorCard doctor={appointment.doctor} />
              <p className="mt-2 text-gray-600">
                Date: {appointment.date} <br />
                Time: {appointment.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
