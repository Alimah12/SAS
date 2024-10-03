// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Create a CSS file for footer styling

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <p>© 2024 Smart Agriculture Management System. All rights reserved.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
