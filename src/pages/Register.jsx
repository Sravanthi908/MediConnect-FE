import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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
      const response = await axios.post("http://127.0.0.1:8000/api/user/register/", formData);
      if (response.status === 201 || response.status === 200) {
        setMessage("✅ Registered successfully! You can now login.");
        setFormData({ username: "", password: "" });
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.error || "Registration failed. Please check your details."
      );
    }
  };

  return (
    <AuthLayout>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Register</h2>

      {message && (
        <div style={{ color: "green", marginBottom: "1rem", textAlign: "center" }}>
          {message}
        </div>
      )}
      {error && (
        <div style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={formData.username}
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
          Register
        </button>
      </form>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#007bff", fontWeight: "bold" }}>
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
