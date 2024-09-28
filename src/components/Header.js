// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create a CSS file for header styling

function Header() {
  return (
    <header className="App-header">
      <div className="navbar">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Crops</button>
          <div className="dropdown-content">
            <Link to="/predict">Crop Yield Prediction</Link>
            <Link to="/recommend">Crop Recommendations</Link>
            <Link to="/seasonal-guide">Seasonal Crop Guide</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Management</button>
          <div className="dropdown-content">
            <Link to="/soil-management">Soil Management</Link>
            <Link to="/weather-forecast">Weather Forecast</Link>
            <Link to="/market">Farmers' Market</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Alerts & Reports</button>
          <div className="dropdown-content">
            <Link to="/alerts">Alerts & Notifications</Link>
            <Link to="/reports">Reports & Analytics</Link>
            <Link to="/knowledge">Knowledge Base</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Account</button>
          <div className="dropdown-content">
            <Link to="/profile">Profile</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">About & Support</button>
          <div className="dropdown-content">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Support</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
