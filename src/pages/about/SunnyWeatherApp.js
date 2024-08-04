import React from 'react';
// Import your actual images when you have them
// import SunnyWeatherLogo from './path-to-your-image/sunny-weather-logo.png';
// import SunnyWeatherScreenshot1 from './path-to-your-image/sunny-weather-screenshot1.png';
// import SunnyWeatherScreenshot2 from './path-to-your-image/sunny-weather-screenshot2.png';

const SunnyWeatherApp = ({ onBack }) => {
  return (
    <div className="project-container">
      <h1 className="project-title">Sunny Weather Mobile App</h1>
      
      {/* Replace this with your actual logo image */}
      <img 
        src="/api/placeholder/200/100" 
        alt="Sunny Weather Logo" 
        className="project-logo"
      />

      <div className="project-metadata">
        <p><strong>Year:</strong> 2024</p>
        <p><strong>Website:</strong> timemachineprint.com</p>
        <p><strong>Social:</strong> @timemachineprint</p>
      </div>
      <button className="back-button" onClick={onBack}>Back</button>
      
      <section className="project-section">
        <h2>Overview</h2>
        <p>Sunny Weather Mobile App is a social weather company that aims to revolutionize how people interact with weather information. It combines accurate weather forecasting with social features, creating a unique platform for weather enthusiasts and casual users alike.</p>
        
        {/* Replace this with your actual app screenshot */}
        <img 
          src="/api/placeholder/300/600" 
          alt="Sunny Weather App Screenshot" 
          className="project-screenshot"
        />
      </section>
      
      <section className="project-section">
        <h2>About</h2>
        <p>A mobile application that turns weather forecasting into a social experience.</p>
        <p><strong>Your personal weather companion</strong></p>
        <p><strong>Role:</strong> Product Designer & Developer</p>
      </section>
      
      <section className="project-section">
        <h2>Challenge</h2>
        <p>Design a weather app that not only provides accurate forecasts but also engages users through social features, encouraging them to share their weather experiences and connect with others.</p>
      </section>
      
      <section className="project-section">
        <h2>Solution</h2>
        <p>By integrating social media elements with traditional weather forecasting, Sunny Weather creates a platform where users can share real-time weather updates, photos, and experiences. The app uses machine learning to improve forecast accuracy based on user input and provides personalized weather alerts and recommendations.</p>
        
        {/* Replace this with another actual app screenshot or feature image */}
        <img 
          src="/api/placeholder/400/300" 
          alt="Sunny Weather App Features" 
          className="project-feature-image"
        />
      </section>
    </div>
  );
};

export default SunnyWeatherApp;