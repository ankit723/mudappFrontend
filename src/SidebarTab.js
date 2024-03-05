import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SidebarTab.css';

function SidebarTab({ name, url }) {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleTabClick = () => {
    navigate(`/${url}`); // Use navigate to navigate to the specified URL
  };

  return (
    <li className="SidebarTab" onClick={handleTabClick}>
      {name}
    </li>
  );
}

export default SidebarTab;
