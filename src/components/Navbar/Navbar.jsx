import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false); // Close sidebar when a link is clicked
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="menu-button" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <h1 className="navbar-brand">Med@Ease</h1>
        </div>
        <ul className="navbar-links">
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('features')}>Features</a></li>
          <li><a onClick={() => scrollToSection('pharmacies')}>Pharmacies</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        <button className="cta-button">Get Started</button>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} closeSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
