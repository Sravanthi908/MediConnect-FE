import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import SetLocation from './pages/SetLocation';
import NearbyHospitals from './pages/NearbyHospitals';
import HospitalDetail from './pages/HospitalDetail';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/set-location" element={<SetLocation />} />
        <Route path="/hospitals" element={<NearbyHospitals />} />
        <Route path="/hospital/:id" element={<HospitalDetail />} />
        <Route path="/book/:id" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
