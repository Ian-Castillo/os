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
          <h2>A neural network for the creative community.
          </h2>
          <p>I've spent years navigating the intersection of technology, creativity, and culture. From launching startups to developing brand identities, I've learned that innovation often comes from unexpected places. Sometimes, the most groundbreaking ideas are born when we connect seemingly unrelated dots across time and space.
          </p>
          <p>Studying the work of visionaries and rebels from various fields has shown me that creativity thrives on cross-pollination. To create something truly impactful, we need to understand not just the giants of our own industries, but also the cultural forces that shape our world.
          </p>
          <p>This realization led me to create Time Machine Print (aka, Time Machine), a curated bookstore that's part digital-age oracle, part cultural time capsule. Each book featured is a window into a different world of ideas, a fragment of the larger story of human ingenuity and cultural evolution.
          </p>
          <p>Whether you're a tech entrepreneur looking to humanize your next big idea, a designer seeking to infuse your work with global influences, or a creative professional aiming to bridge the gap between tradition and innovation, Time Machine Print is your launchpad.
          </p>
        
        <p> The curated collection spans disciplines, eras, and cultures, offering insights from the trailblazers who came before us - their successes, their audacious failures, and the messy, beautiful process in between. I believe that understanding the past and present of global creativity is key to shaping its future.
</p>
        <p>At Time Machine, we're not just selling books; we're cultivating a community of curious minds ready to explore, experiment, and create. Because in this interconnected world, the next big idea might come from anywhere - a centuries-old artistic technique, a cutting-edge technological breakthrough, or a street food vendor's ingenious solution.
        </p>
        <p>To move forward, sometimes you need to step back, look around, and then leap in an unexpected direction. Let's take that journey together.</p>
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