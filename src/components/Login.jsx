import React, { useState } from "react";

// LoginRegister helper component
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

// Main Login component
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login clicked!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "2rem",
          borderRadius: "8px",
          backgroundColor: "white",
          minWidth: "300px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Login</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
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
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>

      <LoginRegister />
    </div>
  );
}

export default Login;
