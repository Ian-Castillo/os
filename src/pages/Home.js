import React from 'react';
import './Home.css'; // Make sure to link the CSS file
import profileImage from '../ian.jpg'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <img src={profileImage} alt="Ian Castillo" className="profile-image" />
        <h1>Hey, I'm Ian!</h1>
        <p>I'm a designer, <a href="https://github.com/ian-castillo">software engineer</a>, and entrepreneur. I'm currently building <a href="https://sunny.co/campsite">Sunny</a>, an app that re-imagines how we experience weather.</p>
        <p>Before Sunny, I spent time as the first designer and product manager at <a href="https://github.com">Argus.AI</a>. Before Argus, I was a product manager at <a href="https://riiid.com">Riiid</a>.</p>
        <div className="online">
          <p>Online</p>
          <a href="https://twitter.com">Twitter</a> — Follow<br/>
          <a href="https://youtube.com">YouTube</a> — Subscribe<br/>
          <a href="https://github.com">GitHub</a> — Follow<br/>
          <a href="https://figma.com">Figma</a> — Follow<br/>
        </div>
      </div>
    </div>
  );
};

export default Home;