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
        <div>
          <h1>Time Machine | Founder</h1>
          <h2>A neural network for the creative community.
          </h2>
          <p>I've always been a builder at heart. Over the years, I've launched startups, developed brand identities, captured moments through photography, and embarked on numerous creative ventures. One crucial lesson I've learned along the way is that every journey forward begins with a glance back.</p>
          <p>Before diving into a new project, I always take a moment to reflect on the past. I study the work of those who came before me, the pioneers who dared to dream big and paved the way. To create something truly remarkable, I believe you must first stand on the shoulders of giants.</p>
<p>This principle inspired me to create Time Machine Print. It's a testament to my conviction that understanding our history is essential for moving forward. Each book in our collection represents a piece of that puzzle, a chapter in the ongoing story of innovation and creativity.</p>
<p>At Time Machine Print, we don't just celebrate the past; we use it as a foundation for the future. We believe that every creator has the power to shape the world, but to do so, they must understand the context of their own journey. They need to see themselves as part of a lineage, a continuum of innovation that stretches back through time. Whether you're an entrepreneur exploring new territories, a photographer capturing unseen perspectives, or a designer pushing the boundaries of possibility, Time Machine Print is here to guide you. </p>
          <p>Our curated collection spans not just disciplines, but eras, because we know that the key to unlocking your creative potential lies in understanding the giants who came before you.</p>
          <p>To go forward, go back.</p>
          <p>Coming August 15th, 2024</p>
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