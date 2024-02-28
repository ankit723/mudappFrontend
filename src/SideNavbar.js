// SideNavbar.js

import React from "react";
import "./SideNavbar.css";
import SidebarTab from "./SidebarTab";
import UserProfile from "./UserProfile";

function SideNavbar() {
  // Generate 20 tabs
  const tabs = [];
  for (let i = 1; i <= 20; i++) {
    tabs.push(<SidebarTab key={i} name={`Tab ${i}`} />);
  }

  return (
    <div className="SideNavbar">
      <ul>{tabs}</ul>
    </div>
  );
}

export default SideNavbar;
