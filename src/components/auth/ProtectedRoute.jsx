// src/components/auth/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import authService from "../../services/authService"; // Corrected path

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated(); // Checks if user is logged in

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if authenticated
  return children;
};

export default ProtectedRoute;
