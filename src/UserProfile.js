// UserProfile.js

import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./UserProfile.css";
import Button from "@mui/material/Button";

function UserProfile({ tab }) {
  const navigate = useNavigate(); // Use useNavigate hook here
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // Use navigate instead of history.push
  };

  return (
    <>
      <div className="UserProfile">
        <h1>{tab}</h1>
        <div className="adminCenter">
          {user ? (
            <div className="ProfileInfo" style={{ cursor: "pointer", margin: "0 2rem" }} onClick={() => {
              if (user.payload.authority === "master-admin") {
                navigate("/manage-users"); // Use navigate instead of history.push
              }
            }}>
              <span>Welcome, {user.payload.email}</span>
              <span>Authority: {user.payload.authority}</span>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {user && (<Button onClick={handleLogout} variant="outlined">Logout</Button>)}
        </div>

      </div>
    </>

  );
}

export default UserProfile;
