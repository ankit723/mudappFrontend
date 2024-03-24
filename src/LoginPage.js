// LoginPage.js

import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authority, setAuthority] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email == "admin" && password == "masterAdmin") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/dashboard");
    } else {
      // Define the login endpoint of your backend API

      // const loginEndpoint = "http://localhost:9000/api/loginUser";
      const loginEndpoint = "https://mudappbackend-1.onrender.com/api/loginUser";
      // Create a payload with user credentials
      const payload = {
        email,
        password,
        authority,
      };

      // Make a POST request to the login endpoint
      fetch(loginEndpoint, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            // If the response is successful, store user data in local storage
            alert(`Welcome ${payload.authority}`);
            localStorage.setItem("user", JSON.stringify({ payload }));

            // Redirect to profile page after successful login
            navigate("/admin");
          } else {
            // Handle authentication error
            throw new Error("Invalid email or password");
          }
        })
        .catch((error) => {
          // Handle fetch or authentication error
          console.error("Login error:", error);
          alert("Failed to login. Please try again.");
        });
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Authority"
            value={authority}
            onChange={(e) => setAuthority(e.target.value)}
          />
        </div>
        <Button
          className="btn-primary"
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
