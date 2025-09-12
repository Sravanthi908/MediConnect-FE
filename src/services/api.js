// src/services/api.js
import { HOSPITALS } from "../data/hospitals.js";

export async function fetchNearbyHospitals() {
  return Promise.resolve(HOSPITALS);
}

export async function fetchHospitalById(id) {
  return Promise.resolve(HOSPITALS.find(h => h.id === id));
}

// ✅ Add this
export async function bookAppointment(hospitalId, doctorId, date, time) {
  // For now we mock the booking – later you can call your Django backend here
  return Promise.resolve({
    success: true,
    message: "Appointment booked successfully!",
    data: {
      hospitalId,
      doctorId,
      date,
      time,
    },
  });
}
