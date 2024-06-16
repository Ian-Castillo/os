import React, { useState } from 'react';
// import weather from '../../assets/sunnyHeader.svg';
import './SpacePirateLabs.css';

const SPL = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="spl-container">
      <div className="main-content">
        {/* <img src={weather} alt="Ian Castillo" className="profile-image" /> */}
        <div className="spl-nav">
          <div className="nav-items">
            <div>
          
            </div>
            <div>
              <span className="spl-item-text">spacepiratelabs.com</span>
            </div>
          </div>
          <div className="social-icons">
            <div
              className="social-icon"
              onClick={() => handleIconClick('mailto:ian@spacepiratelabs.com')}
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
              onClick={() => handleIconClick('https://twitter.com/your-profile')}
            >
              <i className="fi fi-brands-twitter"></i>
            </div>
            <div
              className="social-icon"
              onClick={() => handleIconClick('https://www.instagram.com/your-profile')}
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
          <h1>Space Pirate Labs</h1>
          <h2>A symphony of visual experiences.</h2>
          <p>Our approach to visual design is one of meticulous craftsmanship, where every pixel, every line, and every color is thoughtfully considered and refined to achieve a level of perfection that is truly remarkable. We believe that great design is not merely about aesthetics; it is about creating experiences that evoke emotion, tell compelling stories, and forge meaningful connections with those who encounter our work.</p>
          <p>At Space Pirate Labs, we have a profound understanding of the power of simplicity. By stripping away the superfluous and focusing on the essential, we create designs that are elegantly minimalistic yet profoundly impactful. Our work is characterized by a sense of clarity and purpose, where every element serves a specific function and contributes to the overall narrative.</p>
          <p>The range of our expertise is as vast as the cosmos itself. From crafting brand identities that are as iconic as they are memorable to designing user interfaces that are intuitive and delightful to use, we approach each project with a level of dedication and attention to detail that is unparalleled.</p>
            <p>In the end, our mission at Space Pirate Labs is to create designs that leave an indelible mark on the universe. We strive to create work that is timeless, that transcends the boundaries of medium and context, and that continues to inspire and captivate long after its initial conception. Through our unwavering dedication to craftsmanship, innovation, and collaboration, we aim to redefine the very nature of visual design, one cosmic masterpiece at a time.</p>
        </div>
      </div>
    </div>
  );
};

export default SPL;