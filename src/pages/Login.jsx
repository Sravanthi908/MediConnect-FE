import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",   // ✅ use username instead of email
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
      const response = await axios.post("http://127.0.0.1:8000/api/user/login/", formData);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        setMessage("✅ Login successful!");
        setTimeout(() => {
          navigate("/hospital/1"); // ✅ redirect to a real page (for testing: hospital with id=1)
        }, 1000);
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Invalid username or password.");
    }
  };

  return (
    <AuthLayout>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>

      {message && <div style={{ color: "green", textAlign: "center" }}>{message}</div>}
      {error && <div style={{ color: "red", textAlign: "center" }}>{error}</div>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="username"   // ✅ fixed
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
