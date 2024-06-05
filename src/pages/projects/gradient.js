import React, { useState } from 'react';
import './Gradient.css';
import interactionColor from '../../assets/interactionColor.png';

const Gradient = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="gradient-container">
      <div className="main-content">
        <img src={interactionColor} alt="Ian Castillo" className="profile-image" />
        <div className="gradient-nav">
          <div className="nav-items">
            <div>
          
            </div>
            <div>
              <span className="gradient-item-text">gradientbooks.com</span>
            </div>
          </div>
          <div className="social-icons">
            <div
              className="social-icon"
              onClick={() => handleIconClick('mailto:hello@gradientbooks.com')}
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
          <h1>Gradient</h1>
          <h2>A bookstore that functions as a neural network for the creative community.</h2>
          <p>As an entrepreneur and artist, I have long been fascinated by the transformative power of books. Throughout my personal and professional journey, I have witnessed countless instances where a single book has sparked a groundbreaking idea, challenged deeply held perceptions, and equipped individuals with the insights and knowledge needed to shape their future. This fascination has been the driving force behind my unwavering belief in the potential of books to catalyze change, inspire innovation, and empower people to reach their full potential.</p>
          <p>Gradient was born out of this very belief – a belief that the right book, discovered at the right time, can be a catalyst for profound transformation. It is a testament to the idea that knowledge, when accessed and internalized, can lead to paradigm shifts in the way we think, work, and create. The concept of Gradient is deeply rooted in the understanding that books are not merely words on a page but are powerful tools that can unlock new perspectives, challenge the status quo, and provide the foundation for personal and professional growth.</p>
          <p>As Gradient continues to evolve and expand, it will remain firmly anchored in this core idea. We are committed to curating a collection of books that not only inform and educate but also inspire and ignite the imagination. By carefully selecting titles that span a wide range of creative disciplines and themes, we aim to provide our community with a diverse array of perspectives and ideas that can fuel their own unique journeys of growth and discovery.</p>
          <p>Ultimately, Gradient will grow from the very thought that sparked its creation – the transformative power of books. As we continue to build and nurture a platform that connects individuals with the knowledge and inspiration they need to thrive, we will remain steadfast in our commitment to harnessing the potential of books to drive change, foster innovation, and empower our community to shape their own futures. Through Gradient, we will create a space where the transformative power of books can be fully realized, and where individuals can access the tools and resources they need to unlock their full potential and make a lasting impact on the world.</p>
        </div>
      </div>
    </div>
  );
};

export default Gradient;

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