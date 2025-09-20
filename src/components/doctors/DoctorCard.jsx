// src/components/doctors/DoctorCard.jsx
import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card p-4 rounded-lg shadow-md bg-white">
      <img
        src={doctor.photo || "/default-doctor.png"}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{doctor.name}</h3>
      <p className="text-sm text-gray-600">{doctor.specialty}</p>
      <p className="text-sm text-gray-500">{doctor.hospital}</p>
    </div>
  );
};

export default DoctorCard;
