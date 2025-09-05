import React from "react";
import { Link, useLocation } from "react-router-dom";

const AuthNav = () => {
  const location = useLocation();

  // ✅ Highlight Login only if path is exactly "/login"
  const isLogin = location.pathname === "/login";

  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <Link
        to="/login"
        style={{
          marginRight: "1rem",
          textDecoration: isLogin ? "underline" : "none",
          fontWeight: isLogin ? "bold" : "normal",
          color: "#007bff",
        }}
      >
        Login
      </Link>
      <Link
        to="/register"
        style={{
          textDecoration: !isLogin ? "underline" : "none",
          fontWeight: !isLogin ? "bold" : "normal",
          color: "#007bff",
        }}
      >
        Register
      </Link>
    </div>
  );
};

export default AuthNav;
