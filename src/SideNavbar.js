// SideNavbar.js

import React from "react";
import "./SideNavbar.css";
import SidebarTab from "./SidebarTab";
import UserProfile from "./UserProfile";

function SideNavbar() {
  // Generate 20 tabs
  const tabs = [
    { id: 1, name: "Total Registered User", url: "totalRegisteredUsers" },
    { id: 2, name: "Real-Time User", url: "realTimeUsers" },
    { id: 3, name: "User Average Screen Time", url: "userAverageScreenTime" },
    { id: 4, name: "Particular User Screen Time", url: "particularUserScreenTime" },
    { id: 5, name: "Country-Wise User", url: "countryWiseUser" },
    { id: 6, name: "Maximum Content Writer", url: "maximumContentWriter" },
    { id: 7, name: "Reported Content", url: "reportedContent" },
    { id: 8, name: "Block the Content", url: "blockTheContent" },
    { id: 9, name: "List of Auto-Blocked Content", url: "autoBlockedContent" },
    { id: 10, name: "Can Unblock from Auto-Blocked Content List", url: "unblockAutoBlockedContent" },
    { id: 11, name: "Block Any Content Manually", url: "blockAnyContentManually" },
    { id: 12, name: "List of Blocked Content", url: "listOfBlockedContent" },
    { id: 13, name: "Total Share Count", url: "totalShareCount" },
    { id: 14, name: "User Details Based on API", url: "userDetailsBasedOnAPI" },
    { id: 15, name: "Other App Based Users List", url: "otherAppBasedUsersList" },
    { id: 16, name: "List of Maximum Copied User ID", url: "listOfMaximumCopiedUserID" },
    { id: 17, name: "Total App Uninstalled Number", url: "totalAppUninstalledNumber" },
    { id: 18, name: "Collect Email IDs", url: "collectEmailIDs" },
    { id: 19, name: "Terms and Cons Update Field for App", url: "termsAndConsUpdateFieldForApp" },
    { id: 20, name: "Other Segment Blocked User Details", url: "otherSegmentBlockedUserDetails" }
  ];
  

  return (
    <div className="SideNavbar">
      <ul>{tabs.map((tab)=>{
        return (
          <SidebarTab key={tab.id} name={`${tab.name}`} url={tab.url} />
          )
      })}</ul>
    </div>
  );
}

export default SideNavbar;
