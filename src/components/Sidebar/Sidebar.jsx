import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';



const Sidebar = ({ isOpen, closeSidebar }) => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
      if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false); // Close sidebar when a link is clicked
    }
  };
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={closeSidebar}>
        <FaTimes />
      </button>
      <ul className="sidebar-links">
        <div><li><a onClick={() => {scrollToSection('home'); closeSidebar;}}>Home</a></li></div>
        <div><li><a onClick={() => {scrollToSection('features'); closeSidebar;}}>Features</a></li></div>
        <div><li><a onClick={() => {scrollToSection('pharmacies'); closeSidebar;}}>Pharmacies</a></li></div>
        <div><li><a onClick={() => {scrollToSection('about'); closeSidebar;}}>About</a></li></div>
        <div><li><a onClick={() => {scrollToSection('contact'); closeSidebar;}}>Contact</a></li></div>
      </ul>
    </div>
  );
};

export default Sidebar;
