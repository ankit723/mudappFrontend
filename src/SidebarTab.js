// SidebarTab.js

import React from 'react';
import './SidebarTab.css';

function SidebarTab({ name }) {
  return (
    <li className="SidebarTab">
      {name}
    </li>
  );
}

export default SidebarTab;
