import React from 'react';
import argusLogo from '../../assets/argus.svg';
import './Argus.css'; // We'll create this file next

const Argus = () => {
  return (
    <div className="argus-container">
      <h1>Argus Design</h1>
      <div className="logo-container">
        <img src={argusLogo} alt="Argus Logo" className="argus-logo" />
      </div>
      <p>This is the design page for Argus, showcasing the logo and any additional design elements.</p>
      {/* Add more design elements or descriptions as needed */}
    </div>
  );
};

export default Argus;
