// SideNavbar.js

import React from "react";
import "./SideNavbar.css";
import SidebarTab from "./SidebarTab";
import UserProfile from "./UserProfile";

function SideNavbar() {
  // Generate 20 tabs
  const tabs = [
    { id: 0, name: "Dashboard", url: "dashboard" }, //done
    { id: 1, name: "Total Registered User", url: "totalRegisteredUsers" }, //done
    { id: 2, name: "Real-Time User", url: "realTimeUsers" }, //done
    { id: 3, name: "Content Writer", url: "maximumContentWriter" }, //done
    { id: 4, name: "Blocked Content", url: "listOfBlockedContent" },
    { id: 5, name: "Collect Email IDs", url: "collectEmailIDs" },
  ];

  return (
    <div className="SideNavbar">
      <ul>
        {tabs.map((tab) => {
          return <SidebarTab key={tab.id} name={`${tab.name}`} url={tab.url} />;
        })}
      </ul>
    </div>
  );
}

export default SideNavbar;
