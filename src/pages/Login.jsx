import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", formData);

      if (response.status === 200) {
        setMessage("✅ Login successful!");
        // Example: Save token to localStorage if you get one
        // localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          navigate("/set-location"); // Change to your redirect page
        }, 1500);
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.error || "Invalid email or password. Please try again."
      );
    }
  };

  return (
    <AuthLayout>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>

      {message && (
        <div style={{ color: "green", textAlign: "center", marginBottom: "1rem" }}>
          {message}
        </div>
      )}
      {error && (
        <div style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ padding: "0.5rem" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
          style={{ padding: "0.5rem" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "0.75rem",
            fontSize: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Login
        </button>
      </form>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Don’t have an account?{" "}
        <Link to="/register" style={{ color: "#007bff", fontWeight: "bold" }}>
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
