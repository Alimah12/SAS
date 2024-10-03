import React from 'react';
import './SoilManagement.css'; // Ensure this file exists and is correctly referenced

function SoilManagement() {
  const tips = [
    {
      title: "Regular Soil Testing",
      description: "Monitor nutrient levels and pH to maintain soil health."
    },
    {
      title: "Use Organic Matter",
      description: "Incorporate compost or manure to enhance soil structure."
    },
    {
      title: "Irrigation Practices",
      description: "Implement efficient irrigation to prevent erosion and runoff."
    },
    {
      title: "Crop Rotation",
      description: "Rotate crops to improve soil fertility and prevent pests."
    },
    {
      title: "Cover Cropping",
      description: "Plant cover crops to protect soil and improve its organic content."
    },
    {
      title: "Mulching",
      description: "Use mulch to retain moisture and suppress weeds."
    }
  ];

  return (
    <div className="soil-management-container">
      <h1>Soil Management</h1>
      <p>
        Learn how to maintain healthy soil for better crop yields. Explore soil pH balancing, nutrient management, and best practices for sustainable farming.
      </p>
      <section className="soil-tips">
        <h2>Best Practices</h2>
        <div className="tips-container">
          {tips.map((tip, index) => (
            <div key={index} className="tip-card">
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
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
