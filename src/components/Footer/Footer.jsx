import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
      if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false); // Close sidebar when a link is clicked
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Med@Ease</h2>
          <p>Reliable medicine delivery from trusted pharmacies.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('features')}>Features</a></li>
            <li><a onClick={() => scrollToSection('pharmacies')}>Pharmacies</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>

        <div id='contact' className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@medease.com</p>
          <p>Phone: +92 333 3333333 </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>& {new Date().getFullYear()} Med@Ease. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
