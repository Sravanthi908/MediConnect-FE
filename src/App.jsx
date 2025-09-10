import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import HospitalDetail from "./pages/HospitalDetail";
import BookAppointment from "./pages/BookAppointment";

// ✅ Import hospital dataset
import data from "./data";

function App() {
  // ✅ State to store login token
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* Show logout button if logged in */}
        {token && (
          <button
            onClick={handleLogout}
            style={{
              marginBottom: "20px",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bff",
              color: "#fff",
            }}
          >
            Logout
          </button>
        )}

        <Routes>
          {/* Default route */}
          <Route
            path="/"
            element={token ? <Navigate to="/hospital/1" /> : <Navigate to="/login" />}
          />

          {/* Auth routes */}
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />

          {/* Hospital and appointment routes */}
          <Route path="/hospital/:id" element={<HospitalDetail />} />
          <Route path="/book-appointment/:id" element={<BookAppointment />} />

          {/* 404 Page */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
export { data }; // optional export
