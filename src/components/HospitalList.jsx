import React from "react";

export default function HospitalList({ hospitals }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {hospitals.map((hospital) => (
        <div
          key={hospital.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            margin: "10px",
            padding: "10px",
            width: "250px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2>{hospital.name}</h2>
          <p>Doctors: {hospital.availableDoctors}</p>
          <p>{hospital.description}</p>
          <img
            src={hospital.img}
            alt={hospital.name}
            width="100%"
            style={{ borderRadius: "5px" }}
          />
        </div>
      ))}
    </div>
  );
}
