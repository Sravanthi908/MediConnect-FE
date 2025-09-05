import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

import HospitalDetail from "./pages/HospitalDetail";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App routes */}
       
        <Route path="/hospital/:id" element={<HospitalDetail />} />
        <Route path="/book-appointment/:id" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
