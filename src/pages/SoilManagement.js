// src/components/SoilManagement/SoilManagement.js

import React from 'react';
import './SoilManagement.css'; // Ensure this file exists and is correctly referenced
import Contaminated from '../assets/images/Contaminated soil with chemical runoff.jpg';
import Drought from '../assets/images/Drought-affected farmland.jpg';
import Eroded from '../assets/images/Eroded soil with barren land.jpg';
import Healthy from '../assets/images/Healthy crops in a sustainable farm.jpg';
import Healthy1 from '../assets/images/Healthy ecosystem with diverse plant life.jpg';

function SoilManagement() {
  return (
    <div className="soil-management-container">
      <h1 className="page-title">Soil Management</h1>
      <p className="intro-text">
        Effective soil management is pivotal for sustainable agriculture, environmental conservation, and combating climate change. This page delves into the pressing challenges faced in soil management today and explores viable solutions to address them.
      </p>

      {/* Soil Degradation Section */}
      <section id="soil-degradation" className="issue-section degradation">
        <h2 className="issue-title">Soil Degradation</h2>
        <img 
          src={Eroded}
          alt="Eroded soil with barren land" 
          className="issue-image" 
          loading="lazy"
        />
        <p className="issue-description">
          Soil degradation refers to the decline in soil quality caused by improper use, excessive farming, deforestation, and other human activities. It results in reduced soil fertility, loss of soil structure, and increased susceptibility to erosion. Degraded soils lead to lower crop yields and can render land infertile, threatening food security and livelihoods.
        </p>
        <p className="solutions">
          <strong>Solutions:</strong> Implementing conservation tillage, planting cover crops, incorporating organic matter, and adopting agroforestry practices are essential strategies to mitigate soil degradation.
        </p>
        
      </section>

      {/* Impact of Climate Change Section */}
      <section id="climate-change" className="issue-section climate-change">
        <h2 className="issue-title">Impact of Climate Change</h2>
        <img 
          src={Drought}
          alt="Drought-affected farmland" 
          className="issue-image" 
          loading="lazy"
        />
        <p className="issue-description">
          Climate change exacerbates soil issues by increasing the frequency and severity of extreme weather events such as droughts, floods, and heatwaves. These changes disrupt soil moisture levels, accelerate erosion, and lead to nutrient leaching, making it challenging to maintain fertile and productive soils.
        </p>
        <p className="solutions">
          <strong>Solutions:</strong> Adopting sustainable water management practices, integrating agroforestry, practicing regenerative agriculture, and utilizing drought-resistant crop varieties can help mitigate the impacts of climate change on soil health.
        </p>
        
      </section>

      {/* Sustainable Practices Section */}
      <section id="sustainable-practices" className="issue-section sustainable-practices">
        <h2 className="issue-title">Sustainable Soil Management Practices</h2>
        <img 
          src={Healthy}
          alt="Healthy crops in a sustainable farm" 
          className="issue-image" 
          loading="lazy"
        />
        <p className="issue-description">
          Sustainable soil management is crucial for maintaining long-term agricultural productivity and environmental health. Practices such as crop rotation, organic farming, and the use of biological soil amendments enhance soil structure, fertility, and biodiversity, promoting a resilient agricultural ecosystem.
        </p>
        <p className="solutions">

          <strong>Solutions:</strong> Farmers are encouraged to adopt precision agriculture techniques, conserve water through efficient irrigation systems, reduce reliance on chemical fertilizers by using organic alternatives, and implement integrated pest management to sustain soil health.
        </p>
        
      </section>

      {/* Soil Pollution Section */}
      <section id="soil-pollution" className="issue-section soil-pollution">
        <h2 className="issue-title">Soil Pollution</h2>
        <img 
          src={Contaminated} 
          alt="Contaminated soil with chemical runoff" 
          className="issue-image" 
          loading="lazy"
        />
        <p className="issue-description">
          Soil pollution arises from the accumulation of toxic chemicals, industrial waste, heavy metals, and excessive use of pesticides and fertilizers. Contaminated soils hinder plant growth, reduce biodiversity, and pose significant health risks to humans and animals through the food chain.
        </p>
        <p className="solutions">
          <strong>Solutions:</strong> Utilizing organic fertilizers, enforcing strict pollution control regulations, promoting the use of eco-friendly pesticides, and implementing soil remediation techniques such as phytoremediation can effectively address soil pollution.
        </p>
        
      </section>

      {/* Environmental and Social Impact Section */}
      <section id="environmental-impact" className="issue-section environmental-impact">
        <h2 className="issue-title">Environmental and Social Impact</h2>
        <img 
          src={Healthy1}
          alt="Healthy ecosystem with diverse plant life" 
          className="issue-image" 
          loading="lazy"
        />
        <p className="issue-description">
          Poor soil management leads to severe environmental and social consequences. Environmentally, it results in loss of biodiversity, increased greenhouse gas emissions, and water contamination. Socially, communities dependent on agriculture suffer from decreased food security, economic instability, and health issues related to polluted environments.
        </p>
        <p className="solutions">
          <strong>Solutions:</strong> Promoting reforestation, reducing monocultures, adopting agroecological principles, and fostering community-based soil management initiatives are vital for enhancing both environmental sustainability and social well-being.
        </p>
        
      </section>
    </div>
  );
}

export default SoilManagement;
