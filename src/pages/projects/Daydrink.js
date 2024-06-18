import React, { useState } from 'react';
import './Daydrink.css';
import damn from '../../assets/damn.png';

const Daydrink = () => {
    const [activeSection, setActiveSection] = useState('about');
  
    const handleIconClick = (url) => {
      window.open(url, '_blank');
    };
  
    return (
      <div className="daydrink-container">
        <div className="main-content">
          <img src={damn} alt="Ian Castillo" className="profile-image" />
          <div className="daydrink-nav">
            <div className="nav-items">
              <div>
            
              </div>
              <div>
                <span className="daydrink-item-text">daydrink.coffee</span>
              </div>
            </div>
            <div className="social-icons">
              <div
                className="social-icon"
                onClick={() => handleIconClick('mailto:ian@daydrink.coffee')}
              >
                <i className="fi fi-rr-envelope"></i>
              </div>
              <div
                className="social-icon"
                onClick={() => handleIconClick('https://www.linkedin.com/company/daydrinkcoffee')}
              >
                <i className="fi fi-brands-linkedin"></i>
              </div>
              <div
                className="social-icon"
                onClick={() => handleIconClick('https://twitter.com/daydrinkcoffee')}
              >
                <i className="fi fi-brands-twitter"></i>
              </div>
              <div
                className="social-icon"
                onClick={() => handleIconClick('https://www.instagram.com/daydrink_')}
              >
                <i className="fi fi-brands-instagram"></i>
              </div>
              <div
                className="social-icon"
                onClick={() => handleIconClick('https://www.tiktok.com/@_daydrink')}
              >
                <i className="fi fi-brands-tik-tok"></i>
              </div>
            </div>
          </div>
          <div>
            <h1>Daydrink Coffee | Co-Owner, Managing Partner</h1>
            <h2>A coffee shop that gives a damn.</h2>
            <p>Daydrink is not your typical coffee company. It's built on the idea that coffee should be more than just a morning ritual. It should be an experience that brings joy, sparks inspiration, and fosters community. We achieve this by sourcing the highest quality beans, embracing sustainable practices, and creating a space where coffee lovers can connect and share their passion.</p>
            <p>At Daydrink, we believe that the best coffee experiences come from a blend of exceptional quality and a sense of community. We invite our customers to dive deep into the world of coffee, exploring its rich history, diverse flavors, and the stories behind each cup. By sharing knowledge and experiences, we aim to cultivate a community where everyone feels connected by their love for coffee.</p>
            <p>Our commitment to quality is unwavering. We partner with top-tier coffee growers who share our dedication to excellence and sustainability. By employing innovative brewing techniques and listening to our customers' feedback, we ensure that every cup of Daydrink coffee is nothing short of extraordinary. Our partnerships with industry experts and sustainability advocates help us stay at the forefront of the coffee world, continually pushing the envelope of what's possible.</p>
            <p>Daydrink is more than a brand; it's a movement. We measure our success by the positive impact we have on our customers' lives. By empowering individuals to make conscious choices, fostering meaningful connections, and encouraging a deeper appreciation for the art of coffee, we aim to create a world where people feel more connected to their environment and to each other.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Daydrink;