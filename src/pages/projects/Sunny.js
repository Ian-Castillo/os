import React, { useState } from 'react';
import weather from '../../assets/sunnyHeader.svg';
import './Sunny.css';

const Sunny = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="sunny-container">
      <div className="main-content">
        <img src={weather} alt="Ian Castillo" className="profile-image" />
        <div className="sunny-nav">
          <div className="nav-items">
            <div>
              <a
                href="https://sunnyweather.co"
                target="_blank"
                rel="noopener noreferrer"
                className="sunny-item-text"
              >
                sunnyweather.co
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1>The Sunny Weather Company</h1>
          <h2>A Weather Companion That Understands and Empowers You</h2>
          <h3>Launching Q4 of 2024</h3>

          <p>In recent years, I’ve come to realize the profound impact that weather has on our daily lives. It's more than just a fleeting topic of conversation; weather is a fundamental force that shapes our decisions, influences our emotions, and connects us to the broader world.</p>

          <p>Sunny is not just another weather app— it’s the embodiment of a new era where technology, data, and human connection converge to create something transformative. Traditional weather apps offer information, but they don’t know what you care about. Sunny changes that. By leveraging advanced AI and deep customization, Sunny becomes a weather companion that understands your unique needs and cares about how the weather affects your life.</p>

          <p>At its core, Sunny is driven by the belief that knowledge is not just power but a means to deepen our understanding of the world around us. By providing a platform that encourages meaningful dialogue, shares diverse insights, and fosters collaboration on weather-related projects, Sunny creates a community that transcends geographical and social boundaries. This is not merely about information—it’s about creating a shared experience, a collective intelligence that enriches all who participate.</p>

          <p>As Sunny evolves, it remains steadfast in its commitment to innovation, collaboration, and empowerment. We continually push the boundaries of what’s possible, guided by AI and enriched by user feedback, to create a platform that is not only accurate and personalized but also intuitive and engaging. Through strategic alliances with leading meteorological organizations, academic institutions, and industry thought leaders, Sunny ensures it stays at the forefront of weather-based social interaction.</p>

          <p>In the end, Sunny’s success will not be measured solely by its technological achievements but by the meaningful impact it has on the lives of its users. By empowering individuals to make informed decisions, fostering a deep sense of connection, and inspiring a greater appreciation for the power and beauty of weather, Sunny aspires to create a world where people are more attuned to their environment—and to one another.</p>

          <p>"The future of the information economy lies in the use of knowledge as a strategic resource." – Marc Porat.</p>

          <p>At Sunny, we are not merely building a platform; we are pioneering a movement that redefines our relationship with weather. By unlocking the potential of weather-based social interaction, we’re forging a brighter, more connected future. Join us on this journey, and become part of a transformation that transcends the ordinary.</p>
        </div>
        <div className="social-icons">
          <div
            className="social-icon"
            onClick={() => handleIconClick('mailto:hello@sunnyweather.co')}
          >
            <i className="fi fi-rr-envelope"></i>
          </div>
          <div
            className="social-icon"
            onClick={() => handleIconClick('https://www.linkedin.com/in/sunnyweather')}
          >
            <i className="fi fi-brands-linkedin"></i>
          </div>
          <div
            className="social-icon"
            onClick={() => handleIconClick('https://twitter.com/sunnyweather')}
          >
            <i className="fi fi-brands-twitter"></i>
          </div>
          <div
            className="social-icon"
            onClick={() => handleIconClick('https://www.instagram.com/sunnyweatherco')}
          >
            <i className="fi fi-brands-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sunny;
