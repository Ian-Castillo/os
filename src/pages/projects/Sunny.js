import React, { useState } from 'react';
import './Sunny.css';
import weather from '../../assets/sunny.svg';

const Gradient = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="sunny-container">
      <div className="main-content">
        <img src={weather} alt="Ian Castillo" className="profile-image" />
        <div className="gradient-nav">
          <div className="nav-items">
            <div>
          
            </div>
            <div>
              <span className="gradient-item-text">sunnyweather.co</span>
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
          <h1>Sunny</h1>
          <h2>A weather company connecting people to the weather.</h2>
          <p>In the last several years, I have come to understand the profound significance of weather in our daily lives. It is not merely a topic of idle conversation but a fundamental aspect of the human experience that shapes our decisions, influences our moods, and connects us to the world around us. This deep appreciation for the power of weather has been the catalyst behind my vision for Sunny – a groundbreaking social platform that aims to revolutionize the way we engage with and understand weather.</p>
          <p>Sunny is not just another weather app or social network. It is a manifestation of the idea that the fusion of technology, data, and human interaction can create something truly transformative. By harnessing the power of advanced algorithms, real-time data, and user-generated content, Sunny aims to create a neural network that enables individuals to not only access accurate and personalized weather information but also to connect with others who share their passion for weather.</p>
          <p>At its core, Sunny is driven by the belief that the sharing of knowledge, experiences, and perspectives can lead to a deeper understanding of the world around us. By providing a platform that encourages users to engage in meaningful conversations, share their unique insights, and collaborate on weather-related projects, Sunny seeks to foster a sense of community that transcends geographic boundaries and demographic differences.</p>
          <p>As Sunny evolves and expands, it will remain rooted in the principles of innovation, collaboration, and empowerment. We will continuously push the boundaries of what is possible, leveraging cutting-edge technology and user feedback to create a platform that is not only informative but also intuitive and engaging. Through strategic partnerships with leading meteorological organizations, academic institutions, and industry experts, we will ensure that Sunny remains at the forefront of weather-based social interaction.</p>
          <p>Ultimately, the success of Sunny will be measured not just by its technological achievements but by its ability to make a meaningful impact on the lives of its users. By empowering individuals to make informed decisions, fostering a sense of connection and community, and inspiring a greater appreciation for the beauty and power of weather, Sunny aims to create a world where people are more in tune with their environment and with each other.</p>
          <p>In the words of Marc Porat, "The future belongs to those who can see the potential in the present and have the courage to pursue it." With Sunny, we are not just building a social platform – we are creating a movement that has the potential to transform the way we understand and engage with weather. Join us on this exciting journey as we unlock the power of weather-based social interaction and create a brighter, more connected future for all.</p>
        </div>
      </div>
    </div>
  );
};

export default Gradient;