import React from "react";
import UserProfile from "./UserProfile";
import SideNavbar from "./SideNavbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin(){
    const navigate=useNavigate()

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
    }, [navigate]);
    return(
        <>
        <UserProfile />
        <SideNavbar />
        </>
    )
}

export default Admin