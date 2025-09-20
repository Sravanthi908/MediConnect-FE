// src/services/api.js

// Base API URL from environment variable
// Make sure your .env file has: VITE_API_URL=http://localhost:8000
export const BASE_URL = import.meta.env.VITE_API_URL;

// Helper function for GET requests
const get = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Helper function for POST requests
const post = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// API calls

// Get all doctors
export const fetchDoctors = async () => {
  return await get("/doctors/");
};

// Get all hospitals
export const fetchHospitals = async () => {
  return await get("/hospitals/");
};

// Book an appointment
export const bookAppointment = async (appointmentData) => {
  return await post("/appointments/", appointmentData);
};

// Get nearby hospitals (optional, e.g., with lat/lon)
export const fetchNearbyHospitals = async (lat, lon, radius = 50) => {
  return await get(`/hospitals/nearby?lat=${lat}&lon=${lon}&radius=${radius}`);
};
