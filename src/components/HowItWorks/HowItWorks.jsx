import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <span>1</span>
          <h3>Search Medicine</h3>
          <p>Find the medicines you need from our partnered pharmacies.</p>
        </div>
        <div className="step">
          <span>2</span>
          <h3>Choose Pharmacy</h3>
          <p>Select a pharmacy that best suits your needs.</p>
        </div>
        <div className="step">
          <span>3</span>
          <h3>Place Order</h3>
          <p>Confirm your order and make the payment securely.</p>
        </div>
        <div className="step">
          <span>4</span>
          <h3>Get Delivery</h3>
          <p>Your order will be delivered to your doorstep in no time!</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
