import React from "react";
import UserProfile from "./UserProfile";
import SideNavbar from "./SideNavbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin(){
    const navigate=useNavigate()
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if (user.payload.authority != "master-admin") {
            navigate("/login");
        }
    }, []);
    return(
        <>
        <UserProfile />
        <SideNavbar />
        </>
    )
}

export default Admin