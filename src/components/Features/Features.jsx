import React from 'react';
import './Features.css';
import { FaTruck, FaCheckCircle, FaHeadset } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Med@Ease?</h2>
      <div className="features-container">
        <div className="feature">
          <FaTruck className="feature-icon" />
          <h3>Fast Delivery</h3>
          <p>Get your medicines delivered quickly at your doorstep.</p>
        </div>
        <div className="feature">
          <FaCheckCircle className="feature-icon" />
          <h3>Verified Pharmacies</h3>
          <p>We partner with licensed pharmacies to ensure authenticity.</p>
        </div>
        <div className="feature">
          <FaHeadset className="feature-icon" />
          <h3>24/7 Support</h3>
          <p>Our team is available round the clock to assist you.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
