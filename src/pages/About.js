// src/components/About.js
import React from 'react';
import Slider from 'react-slick';
import './About.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ali from '../assets/images/ali1.jpeg';
import brayo from '../assets/images/brayo1.jpeg';
import fadhil from '../assets/images/fadhil.jpeg';
import stepper from '../assets/images/stepper.jpeg';
const About = () => {
  const owners = [
    {
      name: 'ALI MALALA',
      role: 'CEO & Co-Founder',
      bio: 'Ali has over 2 years of experience in agricultural technology and a deep understanding of sustainable farming practices.',
      image: ali, // Replace with actual image path
    },
    {
      name: 'FADHIL MAPESA',
      role: 'CTO & Co-Founder',
      bio: 'Fadhil is a technology expert with a background in machine learning and AI. He leads the technical vision of the company.',
      image: fadhil, // Replace with actual image path
    },
    {
      name: 'BRIAN GITONGA',
      role: 'COO & Co-Founder',
      bio: 'Brian ensures that the day-to-day operations run smoothly and is passionate about making agriculture more efficient.',
      image: brayo, // Replace with actual image path
    },
    {
      name: 'ELIJAH MUTUGI',
      role: 'CFO & Co-Founder',
      bio: 'Elijah is a financial strategist with expertise in corporate finance and sustainable investment.',
      image: stepper, // Replace with actual image path
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true
  };

  return (
    <div className="about-container">
      <section className="mission-section">
        <h1>Our Mission</h1>
        <p>
          We strive to revolutionize agriculture by providing farmers with data-driven insights to optimize crop yields and improve sustainable farming practices.
        </p>
      </section>

      <section className="vision-values-section">
        <div className="card">
          <h2>Vision</h2>
          <p>
            Our vision is to make sustainable farming practices accessible to every farmer, enabling them to maximize output while preserving the environment.
          </p>
        </div>

        <div className="card">
          <h2>Values</h2>
          <ul>
            <li><strong>Innovation:</strong> Constantly developing new technologies to empower farmers.</li>
            <li><strong>Sustainability:</strong> Ensuring environmentally friendly practices are at the forefront of what we do.</li>
            <li><strong>Integrity:</strong> Building trust through transparency and reliability.</li>
            <li><strong>Collaboration:</strong> Partnering with farmers, researchers, and organizations to drive meaningful change.</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <Slider {...settings}>
          {owners.map((owner, index) => (
            <div className="team-member-slide" key={index}>
              <img src={owner.image} alt={`${owner.name}`} className="profile-image" />
              <h3>{owner.name}</h3>
              <p><strong>{owner.role}</strong></p>
              <p>{owner.bio}</p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default About;