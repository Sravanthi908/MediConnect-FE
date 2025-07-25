import React, { useState } from "react";

function LoginRegister() {
  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        fontSize: "1.1rem",
      }}
    >
     
    </div>
  );
}

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Password:", password);
    alert("Register clicked!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {/* Register Box */}
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "2rem",
          minWidth: "300px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Register</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: "0.5rem", fontSize: "1rem" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: "0.5rem", fontSize: "1rem" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <label>Mobile:</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              style={{ padding: "0.5rem", fontSize: "1rem" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: "0.5rem", fontSize: "1rem" }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "0.8rem",
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      </div>

      {/* Add the LoginRegister link below */}
      <LoginRegister />
    </div>
  );
}

export default Register;
