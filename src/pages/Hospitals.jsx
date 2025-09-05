import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // ✅ Create 30 dummy hospitals
    const dummyHospitals = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `Hospital ${i + 1}`,
      address: "Hyderabad, India",
      phone: "+91 9876543210",
      image: "https://via.placeholder.com/300x150.png?text=Hospital",
      specialist: ["Cardiologist", "Neurologist", "Orthopedic", "Dermatologist"][
        i % 4
      ],
      doctorsAvailable: i % 2 === 0,
    }));
    setHospitals(dummyHospitals);
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Nearby Hospitals
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={hospital.image}
              alt={hospital.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ marginTop: "1rem" }}>{hospital.name}</h3>
            <p>
              <strong>Address:</strong> {hospital.address}
            </p>
            <p>
              <strong>Phone:</strong> {hospital.phone}
            </p>
            <p>
              <strong>Specialist:</strong> {hospital.specialist}
            </p>
            <p>
              <strong>Doctors Available:</strong>{" "}
              {hospital.doctorsAvailable ? (
                <span style={{ color: "green" }}>Yes ✅</span>
              ) : (
                <span style={{ color: "red" }}>No ❌</span>
              )}
            </p>

            <Link
              to={`/hospital/${hospital.id}`}
              style={{
                display: "inline-block",
                marginTop: "1rem",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
