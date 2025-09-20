// src/pages/DashboardPage.jsx
import React from "react";
import DoctorCard from "../components/doctors/DoctorCard";

const DashboardPage = () => {
  const doctors = [
    { name: "Dr. Smith", specialty: "Cardiologist", hospital: "City Hospital" },
    { name: "Dr. Jane", specialty: "Dermatologist", hospital: "Sunrise Clinic" },
    { name: "Dr. Lee", specialty: "Pediatrician", hospital: "Metro Clinic" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
  );
};

export default DashboardPage;
