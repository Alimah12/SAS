import React from 'react';
import './SoilManagement.css'; // Ensure this file exists and is correctly referenced

function SoilManagement() {
  return (
    <div className="soil-management-container">
      <h1>Soil Management</h1>
      <p>
        Learn how to maintain healthy soil for better crop yields. Explore soil pH balancing, nutrient management, and best practices for sustainable farming.
      </p>
      <section className="soil-tips">
        <h2>Best Practices</h2>
        <ul>
          <li>Regular soil testing to monitor nutrient levels and pH.</li>
          <li>Use of organic matter to improve soil structure.</li>
          <li>Proper irrigation practices to avoid soil erosion.</li>
          <li>Rotating crops to enhance soil fertility.</li>
        </ul>
      </section>
      <section className="testing-methods">
        <h2>Soil Testing Methods</h2>
        <p>
          Learn about different methods to test soil, including field kits and lab testing, to ensure your soil has the right balance of nutrients for your crops.
        </p>
      </section>
    </div>
  );
}

export default SoilManagement; // Ensure this line is present
