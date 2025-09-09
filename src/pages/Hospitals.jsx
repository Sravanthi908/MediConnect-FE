import { useEffect, useState } from "react";

function Hospitals() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hospitals/")
      .then((res) => res.json())
      .then((data) => setHospitals(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Hospitals</h1>
      <ul>
        {hospitals.map((h) => (
          <li key={h.id}>
            <img src={h.img} alt={h.name} width="100" />
            <h3>{h.name}</h3>
            <p>{h.description}</p>
            <strong>Doctors Available: {h.availableDoctors}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hospitals;
