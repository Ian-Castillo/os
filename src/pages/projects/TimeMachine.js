import React, { useState } from 'react';
import './TimeMachine.css';
import tmp from '../../assets/TMP.png';

const TimeMachine = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="gradient-container">
      <div className="main-content">
      <img src={tmp} alt="time machine grid background" className="profile-image" />
        <div className="gradient-nav">
          <div className="nav-items">
            <div>
          
            </div>
            <div>
              <span className="gradient-item-text">timemachineprint.com</span>
            </div>
          </div>
          
        </div>
        <div>
          <h1>Time Machine Print (aka Time Machine)</h1>
          <h2>A neural network for the creatives and creators.
          </h2>
        <p>Welcome to Time Machine Print, where culture and creativity collide like two celestial bodies sparking an explosion of ideas. We’re not just a bookstore—we're a portal for the curious, the creators, and the disruptors. Here, stories aren’t just printed on paper; they are the seeds of revolutions, the musings of rebels, and the blueprints of tomorrow’s icons.</p>
      <p>In a world obsessed with the fast and the forgettable, we celebrate the deep thinkers, the dreamers, and the outliers who shape our creative future. Time Machine Print is a sanctuary for those who seek the kind of inspiration that lingers—a place where every book has a purpose, every page a manifesto.</p>
     <p>Think of it as a time capsule for the bold, the weird, and the beautiful—a place where today’s ideas meet the timeless ethos of those who came before us. Let’s turn the pages together. The future has always belonged to the creators.</p>
        <p>Launching September 28th, 2024</p>
        </div>
        </div>
        <div className="social-icons">
            <div
              className="social-icon"
              onClick={() => handleIconClick('mailto:hello@timemachineprint.com')}
            >
              <i className="fi fi-rr-envelope"></i>
            </div>
            <div
              className="social-icon"
              onClick={() => handleIconClick('https://www.linkedin.com/in/your-profile')}
            >
              <i className="fi fi-brands-linkedin"></i>
            </div>
            <div
              className="social-icon"
              onClick={() => handleIconClick('https://twitter.com/tsprintcompany')}
            >
              <i className="fi fi-brands-twitter"></i>
            </div>
            <div
              className="social-icon"
              onClick={() => handleIconClick('https://www.instagram.com/timemachineprint')}
            >
              <i className="fi fi-brands-instagram"></i>
            </div>
            <div
              className="social-icon"
              onClick={() => handleIconClick('https://www.tiktok.com/@your-profile')}
            >
              <i className="fi fi-brands-tik-tok"></i>
            </div>
          </div>
      </div>
    
  );
};

export default TimeMachine;
//     <div className="gradient-container">
//     <div className=''>
//       <h2>Gradient</h2>
//       <p>A bookstore that functions as a neural network for the creative community.</p>
//       <div className="bento-grid">
//         <div className="bento-item small">
//           <p>Pay supplier invoices</p>
//           <p>Our goal is to streamline SMB trade, making it easier and faster than ever.</p>
//         </div>
//         <div className="bento-item large">
//   <img src={interactionColor} alt="Interaction Color" className="bento-image" />
//   <div className="bento-content">
//     <p>Pay supplier invoices</p>
//     <p>Our goal is to streamline SMB trade, making it easier and faster than ever.</p>
//   </div>
// </div>
//         <div className="bento-item medium">
//           <p>Pay supplier invoices</p>
//           <p>Our goal is to streamline SMB trade, making it easier and faster than ever.</p>
//         </div>
//         <div className="bento-item large">
//           <p>Pay supplier invoices</p>
//           <p>Our goal is to streamline SMB trade, making it easier and faster than ever.</p>
//         </div>
//         <div className="bento-item small">
//           <p>Pay supplier invoices</p>
//           <p>Our goal is to streamline SMB trade, making it easier and faster than ever.</p>
//         </div>
    
//         <div className="bento-item medium">
//           <p>Pay supplier invoices</p>
//           <p>Our goal is to streamline SMB trade, making it easier and faster than ever.</p>
//         </div>
//       </div>
//       </div>
//     </div>