import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NearbyHospitals from './pages/NearbyHospitals';
import Register from './pages/Register';
import Login from './pages/Login';
import HospitalDetail from './pages/HospitalDetail';
import BookAppointment from './pages/BookAppointment';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NearbyHospitals />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hospital/:id" element={<HospitalDetail />} />
        <Route path="/book-appointment/:hospitalId/:doctorId" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App