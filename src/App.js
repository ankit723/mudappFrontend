// App.js

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import ManageUsers from "./ManageUsers";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Admin />} />
        <Route path="/:admin" element={<Admin />} />
        <Route path="/manage-users" element={<ManageUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
