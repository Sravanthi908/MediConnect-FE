import React from "react";
import { Link } from "react-router-dom";

function BottomLinks() {
  return (
    <nav
      style={{
        position: "fixed",       // always fixed
        bottom: "20px",          // 20px from bottom
        left: "50%",             // move to center horizontally
        transform: "translateX(-50%)", // perfect centering
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        fontSize: "1.2rem",
        backgroundColor: "rgba(255,255,255,0.8)", // optional slight background
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
