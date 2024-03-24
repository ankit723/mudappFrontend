// ManageUsers.js

import React, { useEffect, useState } from "react";
import './ManageUsers.css'
import { useNavigate } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import UserProfile from "./UserProfile";

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authority, setAuthority] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const userJSON = localStorage.getItem("user");
        
        if(userJSON) {
            try {
                const user = JSON.parse(userJSON);
                
                if(user.payload && user.payload.authority !== "master-admin") {
                    navigate("/login");
                }
            } catch(error) {
                console.error("Error parsing user data:", error);
                // Handle error, e.g., redirect to login
                navigate("/login");
            }
        } else {
            // Handle case where user data is not found in local storage
            // Redirect to login or handle as needed
            navigate("/login");
        }
        fetch("https://mudappbackend-1.onrender.com/api/getAllUser", {
            method: "GET",
            mode: "cors"
        })
            .then((response) => response.json())
            .then((data) => { setUsers(data.users); console.log(data) })
            .catch((error) => console.error("Error fetching users:", error));
    }, [navigate]);

    const handleCreateUser = async (e) => {
        e.preventDefault();
        const payload = {
            email,
            password,
            authority,
        };

        try {
            const response = await fetch("https://mudappbackend-1.onrender.com/api/registerNewUser", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert("new user Registered")
                window.location.reload()
            } else {
                window.alert("Login Failed");
                console.error("Login failed");
            }
        } catch (error) {
            // Handle network or other errors
            window.alert("There is an internal problem");
            console.error("Error during login:", error);
        }
    };

    const handleDelete=async(user)=>{
        try {
            const response = await fetch("https://mudappbackend-1.onrender.com/api/removeUser", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert("User Access Revoked")
                window.location.reload()
            } else {
                window.alert("Deletion Failed");
                console.error("Deletion failed");
            }
        } catch (error) {
            // Handle network or other errors
            window.alert("There is an internal problem");
            console.error("Error during login:", error);
        }
    }

    return (
        <>
            <UserProfile />
            <div style={{ display: "flex" }}>
                <div>
                    <SideNavbar />
                </div>
                <div className="container" tyle={{ display: "flex" }}>
                    <ul>
                        <h2>Manage Users</h2>
                        {users.map((user) => {
                            console.log(user)
                            return (
                                <li key={user._id} style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ margin: "1rem 0", paddingRight: "1rem" }}>
                                        {user.email} - {user.authority}
                                    </div>
                                    <button onClick={()=>handleDelete(user)}>Revoke Access</button>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="create-user-container">
                        <h2>Create User</h2>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Authority"
                            value={authority}
                            onChange={(e) => setAuthority(e.target.value)}
                        />
                        <button onClick={handleCreateUser}>Create User</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageUsers;
