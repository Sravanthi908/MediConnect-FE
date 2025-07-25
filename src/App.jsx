import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import BottomLinks from "./components/BottomLinks";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Fixed links at bottom */}
        <BottomLinks />
      </div>
    </Router>
  );
}

export default App;
