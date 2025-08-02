import React from "react";
import { Link } from "react-router-dom";

function BottomLinks() {
  return (
    <nav
      style={{
        position: "fixed",       
        bottom: "20px",       
        left: "50%",            
        transform: "translateX(-50%)", 
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        fontSize: "1.2rem",
        backgroundColor: "rgba(255,255,255,0.8)", 
        padding: "0.5rem 1rem",
        borderRadius: "8px",
      }}
    >
      <Link
        to="/login"
        style={{
          textDecoration: "none",
          color: "#007bff",
          fontWeight: "bold",
        }}
      >
        Login
      </Link>
      <span>|</span>
      <Link
        to="/register"
        style={{
          textDecoration: "none",
          color: "#007bff",
          fontWeight: "bold",
        }}
      >
        Register
      </Link>
    </nav>
  );
}

export default BottomLinks;
