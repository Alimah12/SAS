import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import img1 from '../assets/images/img1.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';
import yieldIcon from '../assets/images/yield.jpeg';
import croprecIcon from '../assets/images/croprecc.png';
import weatherIcon from '../assets/images/weather.jpeg';
import soilIcon from '../assets/images/soil.png';
import growthImage from '../assets/images/growth.jpeg';
import marketImage from '../assets/images/market.jpeg';
import irrigationImage from '../assets/images/irrigation.jpeg';
import soilImage from '../assets/images/soil.jpeg';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section with Dynamic Background Images */}
      <div className="hero-section">
        <div className="background-slider">
          <div className="slide fade" style={{ backgroundImage: `url(${img1})` }}></div>
          <div className="slide fade" style={{ backgroundImage: `url(${img3})` }}></div>
          <div className="slide fade" style={{ backgroundImage: `url(${img4})` }}></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>Welcome to the Smart Agriculture Management System</h1>
          <p>
            Empowering farmers with tools to optimize crop yields, select suitable crops, and access real-time insights.
          </p>
          <div className="home-buttons">
            <Link to="/predict">
              <button className="btn primary">Predict Yield</button>
            </Link>
            <Link to="/recommend">
              <button className="btn secondary">Get Recommendations</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="feature-overview">
        <h2>Our Features</h2>
        <div className="feature-cards">
          {/* Feature Card 1 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, #5dbb63, #89c997)' }}>
            <img src={yieldIcon} alt="Crop Yield Prediction" />
            <h3>Crop Yield Prediction</h3>
            <p>Predict crop yields based on weather, soil, and crop data for better planning and decision-making.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, #34a4eb, #6dbbfa)' }}>
            <img src={croprecIcon} alt="Crop Recommendations" />
            <h3>Crop Recommendations</h3>
            <p>Receive tailored crop recommendations for your region and planting season.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, #ff8a00, #ffc05c)' }}>
            <img src={weatherIcon} alt="Weather Alerts" />
            <h3>Weather Alerts</h3>
            <p>Stay informed with real-time weather forecasts and alerts for optimal farm management.</p>
          </div>

          {/* Feature Card 4 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, #a44dff, #c07aff)' }}>
            <img src={soilIcon} alt="Soil Health Monitoring" />
            <h3>Soil Health Monitoring</h3>
            <p>Monitor and manage soil health with comprehensive data and guidance.</p>
          </div>
        </div>
      </section>

      {/* Image Representation Section */}
      <section className="image-representation">
        <h2>Visualize Your Success</h2>
        <div className="image-gallery">
          <img src={growthImage} alt="Crop Growth" />
          <img src={soilImage} alt="Healthy Soil" />
          <img src={marketImage} alt="Farmers Market" />
          <img src={irrigationImage} alt="Irrigation System" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Success Stories</h2>
        <p>
          "Since using this system, my farm productivity has soared!" - Jane Doe, Farmer
        </p>
        <p>
          "The tailored crop recommendations helped me double my profits!" - John Smith, Farmer
        </p>
        <p>
          "Real-time weather alerts keep me prepared for any changes." - Maria Garcia, Farmer
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Join Us Today!</h2>
        <p>Sign up now and take the first step towards a more productive farm.</p>
        <Link to="/signup">
          <button className="btn signup">Get Started</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
