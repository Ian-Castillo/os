import React from 'react';
import './TimeMachine.css';
import tmintroImage from '../../assets/tmintro.png';
import tmlogofull from '../../assets/tmlogofull.png';
import spacemono from '../../assets/spacemono.png'
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
          <img 
            src={tmlogofull}
            alt="Time Machine Logo" 
            className="logo-image"
          />
        </div>
        
        <hr className="divider" />
        
        <div className="metadata-row">
          <div className="metadata-item">
            <div className="metadata-label">Role</div>
            <div className="metadata-value">Product Owner & Designer</div>
          </div>
          <div className="metadata-item">
            <div className="metadata-label">Website</div>
            <div className="metadata-value">timemachineprint.com</div>
          </div>
          <div className="metadata-item">
            <div className="metadata-label">Social</div>
            <div className="metadata-value">@timemachineprint</div>
          </div>
          <div className="metadata-item">
            <div className="metadata-label">Year</div>
            <div className="metadata-value">2024</div>
          </div>
        </div>
        
        <div className="about-section">
          <h2 className="section-label"></h2>
          <p className="about-text">"An online bookstore, resource, and community for creatives, builders, and those imagining the future."</p>
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

      <div className="challenge-solution-section">
        <div className="challenge-column">
          <h2 className="section-title">Challenge</h2>
          <p className="section-text">Design an online bookstore that combines the vast selection of traditional e-commerce platforms with the personalized curation and community aspects that creatives crave, creating a seamless discovery, purchase, and sharing experience.</p>
        </div>
        <div className="solution-column">
          <h2 className="section-title">Solution</h2>
          <p className="section-text">By integrating and improving upon the best features of existing online bookstores and creative communities, TimeMachine simplifies and socializes the process of finding, purchasing, and engaging with books for creative professionals and enthusiasts.</p>
        </div>
      </div>

      <div className="quote-section">
        <p className="quote-text">Time Machine isn't just a bookstore; it's a dynamic ecosystem where creatives can find inspiration, gain knowledge, and connect with like-minded individuals, all while building their personal and professional libraries.</p>
      </div>

      <div className="sitemap-section">
        <h2 className="section-title">SiteMap</h2>
        <div className="image-placeholder"></div>
        <p className="section-text">Aan online bookstore was born from a challenge faced by creative professionals and enthusiasts: finding the right books to fuel their imagination and skills.</p>
        <p className="section-text">When creatives seek inspiration or knowledge, where do they turn? Amazon, local bookstores, niche websites, or recommendations from peers? What if there was a single platform that could offer not just books, but a curated experience tailored to each creative's unique journey?</p>
        <p className="section-text">Time Machine curates, personalizes, and enhances the book discovery experience while connecting users to a vibrant community of fellow creatives.</p>
        <p className="section-text">When creatives seek inspiration or knowledge, where do they turn? Amazon, local bookstores, niche websites, or recommendations from peers? What if there was a single platform that could offer not just books, but a curated experience tailored to each creative's unique journey?</p>
        <p className="section-text">Time Machine curates, personalizes, and enhances the book discovery experience while connecting users to a vibrant community of fellow creatives.</p>
      </div>

      <div className="logo-wordmark-section">
        <h2 className="section-title">Logo + Wordmark</h2>
        <div className="image-placeholder"></div>
        <p className="section-text">Aan online bookstore was born from a challenge faced by creative professionals and enthusiasts: finding the right books to fuel their imagination and skills.</p>
        <p className="section-text">When creatives seek inspiration or knowledge, where do they turn? Amazon, local bookstores, niche websites, or recommendations from peers? What if there was a single platform that could offer not just books, but a curated experience tailored to each creative's unique journey?</p>
        <p className="section-text">Time Machine curates, personalizes, and enhances the book discovery experience while connecting users to a vibrant community of fellow creatives.</p>
      </div>

      <div className="typography-section">
        <h2 className="section-title">Typography</h2>
        <img 
            src={spacemono}
            alt="Introducing Time Machine" 
            className="full-width-image"
          />
        <div className="">
      
        </div>
        <p className="section-text">Space Mono, a headline hero, isn't a random choice - it's a calculated risk. In a world drowning in sans-serif sameness, Space Mono stands out like a punk rocker at a corporate retreat. Its unconventional letterforms and monospaced layout speak directly to our target audience: creatives who color outside the lines. It's not just a font; it's a statement that says, "We're not here to play it safe." This typeface has the potential to become as recognizable to our brand as golden arches are to fast food, but for people who hunger for ideas instead of burgers.</p>
        <p className="section-text">Time Machine needed a workhorse for the body text, and Inter is where form meets function in perfect harmony. It's clean without being sterile, modern without being trendy. This typeface is the Swiss Army knife of our visual arsenal - versatile enough to handle everything from product descriptions to blog posts without breaking a sweat. Its excellent readability across devices ensures our message comes through loud and clear, whether you're browsing on a 27-inch monitor or squinting at a smartphone on the subway.</p>
        <p className="section-text">Roboto Mono, holding down the fort for technical details, is a secret weapon in building trust and credibility. In a market where details matter - think book specifications, ISBN numbers, author bios - Roboto Mono brings a level of precision that subtly communicates, "We know our stuff." Its clean, mechanical aesthetic resonates with the part of our audience that appreciates the craft behind the creativity.</p>
        <p className="section-text">Now, the genius here isn't just in the individual fonts, but in how they play together. This combination creates a visual hierarchy that guides the eye and reinforces our brand personality at every turn. Space Mono grabs attention, Inter keeps you reading, and Roboto Mono seals the deal with the details.</p>
        <p className="section-text">This typographic strategy isn't just about looking good - it's about solving real business problems. It differentiates us in a crowded market, enhances readability to keep users engaged, and builds a cohesive brand identity that can flex across various touchpoints without losing its essence.</p>
        <p className="section-text">In essence, this visual language speaks directly to our audience of creative rebels and bookish innovators. It's a language that says, "We get you, we're one of you, and we've got the goods to feed your creative soul."
        </p>
      </div>
    </div>
    
    );
  };
  
  export default TimeMachine;