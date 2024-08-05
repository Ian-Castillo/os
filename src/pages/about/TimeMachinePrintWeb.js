import React from 'react';
import './TimeMachine.css';
import tmintroImage from '../../assets/tmintro.png';
import tmlogofull from '../../assets/tmlogofull.png';

const TimeMachine = ({ onBack }) => {
  return (
    <div className="project-container">
      <button 
        className="back-button"
        onClick={onBack}
      >
        Back
      </button>
      
      <div className="header">
        <div className="logo"

        >
             <img 
  src={tmlogofull}
  alt="Introducing Time Machine" 
  className="full-width-image"
/>
        </div>
        <h1 className="title"></h1>
      </div>
      
      <hr className="divider" />
      
      <div className="metadata-row">
        <div className="metadata-item">
          <span className="metadata-label">Role</span>
          <span className="metadata-value">Product Owner & Designer</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">Website</span>
          <span className="metadata-value">timemachineprint.com</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">Social</span>
          <span className="metadata-value">@timemachineprint</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">Year</span>
          <span className="metadata-value">2024</span>
        </div>
      </div>
      
      <div className="about-section">
        <h2 className="section-label">About</h2>
        <p className="about-text">An online bookstore, resource, and community for creatives, builders, and those imagining the future.</p>
      </div>
      
      <div className="image-container">
      <img 
  src={tmintroImage}
  alt="Introducing Time Machine" 
  className="full-width-image"
/>
        <div className="image-overlay">
          <h2 className="overlay-title">introducing</h2>
          <p className="overlay-subtitle">your new favorite bookstore</p>
        </div>
      </div>
      
      <div className="overview-section">
        <h2 className="section-title">Overview</h2>
        <p className="overview-text">An online bookstore was born from a challenge faced by creative professionals and enthusiasts: finding the right books to fuel their imagination and skills.</p>
        <p className="overview-text">When creatives seek inspiration or knowledge, where do they turn? Amazon, local bookstores, niche websites, or recommendations from peers? What if there was a single platform that could offer not just books, but a curated experience tailored to each creative's unique journey?</p>
        <p className="overview-text">Time Machine curates, personalizes, and enhances the book discovery experience while connecting users to a vibrant community of fellow creatives.</p>
      </div>
    </div>
  );
};

export default TimeMachine;