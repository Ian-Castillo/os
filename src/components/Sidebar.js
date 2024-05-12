import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Ensure your CSS file is linked

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle the menu toggle

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className="menu">
        <h2>Ian Castillo</h2>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/writings" onClick={() => setIsOpen(false)}>Writings</NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
        <NavLink to="/bookmarks" onClick={() => setIsOpen(false)}>Bookmarks</NavLink>

        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
