// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NearbyHospitals from './pages/NearbyHospitals';
import Register from './pages/Register';
import Login from './pages/Login';
import HospitalDetail from './pages/HospitalDetail';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <NearbyHospitals />
            </ProtectedRoute>
          } />
          <Route path="/hospital/:id" element={
            <ProtectedRoute>
              <HospitalDetail />
            </ProtectedRoute>
          } />
          <Route path="/book-appointment/:hospitalId/:doctorId" element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;