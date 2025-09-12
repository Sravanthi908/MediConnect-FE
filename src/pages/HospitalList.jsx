import React, { useState } from "react";
import data from "../data"; // ✅ make sure file exists

export default function HospitalList() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data.map((hospital) => (
        <div
          key={hospital.id}
          className="relative border rounded-2xl shadow-md overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredId(hospital.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Image */}
          <img
            src={hospital.img}
            alt={hospital.name}
            className="w-full h-48 object-cover"
          />

          {/* Name */}
          <div className="p-3 font-semibold text-lg text-center">
            {hospital.name}
          </div>

          {/* Hover Details */}
          {hoveredId === hospital.id && (
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center p-4 transition duration-300">
              <h2 className="text-xl font-bold">{hospital.name}</h2>
              <p>{hospital.location}</p>
              <p className="text-sm italic">{hospital.speciality}</p>
              <button className="mt-3 px-4 py-2 bg-green-500 rounded-lg">
                Book Appointment
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
