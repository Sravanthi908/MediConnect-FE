
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE = "http://127.0.0.1:8000";

const HospitalDetail = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/hospitals/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch hospital (${res.status})`);
        return res.json();
      })
      .then(setHospital)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!hospital) return <p>Loading...</p>;

  let imageUrl = "/placeholder-hospital.jpg"; 
  if (hospital.image) {
    imageUrl = hospital.image.startsWith("http")
      ? hospital.image
      : `${API_BASE}${hospital.image}`;
  }

  const doctorText =
    hospital.doctor ||
    (hospital.doctors?.length ? hospital.doctors.map((d) => d.name).join(", ") : "Not listed");

  return (
    <div style={{ padding: 16, maxWidth: 800 }}>
      <img
        src={imageUrl}
        alt={hospital.name}
        style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 12 }}
      />
      <h2 style={{ fontSize: 28, marginTop: 12 }}>{hospital.name}</h2>

      <p style={{ marginTop: 8 }}>
        <strong>Doctor:</strong> {doctorText}
      </p>

      <p style={{ marginTop: 8, color: "#444" }}>
        {hospital.description || "No description provided."}
      </p>
    </div>
  );
};

export default HospitalDetail;
