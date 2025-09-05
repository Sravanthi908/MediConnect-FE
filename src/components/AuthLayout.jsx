import React from "react";
import AuthNav from "./AuthNav";

const AuthLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: "url('https://mediconnect-hms.netlify.app/logo.jpg')", // ✅ make sure this image exists
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* Navigation (Login / Register) */}
        <AuthNav />

        {/* Page content (Login or Register form) */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
