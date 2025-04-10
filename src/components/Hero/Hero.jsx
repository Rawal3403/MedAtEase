import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to Med@Ease</h1>
        <p>Your trusted medicine delivery service. Get medications delivered to your doorstep from the best pharmacies in your area.</p>
        <p id="about">Welcome to Smart Pharma Connect – your one-stop solution for finding medicines easily and connecting with nearby pharmacies. Using graph-based intelligence, our system efficiently links customers, pharmacies, and medicines, ensuring quick access to the required medicines.

🔹 Find Pharmacies – Search for pharmacies based on medicine availability.
🔹 Check Medicine Stock – View real-time stock updates from different sellers.
🔹 Optimized Search – Get the nearest pharmacy with your required medicine.
🔹 Smart Recommendations – Discover alternative pharmacies if a medicine is unavailable.</p>
        <button className="cta-button">Browse Medicines</button>
      </div>
    </section>
  );
}

export default Hero;
