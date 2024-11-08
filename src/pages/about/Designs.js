import React, { useState, useMemo } from 'react';
import './Designs.css';

// Import all design images
import argusHero from '../../assets/argus.png';
import nounsImage from '../../assets/Nouns.png';
import overtureImage from '../../assets/Overture.png';
import projectEImage from '../../assets/ProjectE.png';
import statusImage from '../../assets/Status.png';
import summitImage from '../../assets/Summit.png';
import houndsyncImage from '../../assets/Houndsync.png';
import updexImage from '../../assets/Updex.png';
import walkthroughImage from '../../assets/Walkthrough.png';

// Import TimeMachine component if it exists

const designsData = [

  {
    id: 1,
    title: "Argus",
    description: "AI-powered education platform.",
    tags: ["AI", "Education"],
    image: argusHero
  },
  // {
  //   id: 2,
  //   title: "HoundSync",
  //   description: "A data clean up tool for small businesses.",
  //   tags: ["OCR", "Data"],
  //   image: houndsyncImage
  // },
  {
    id: 3,
    title: "Nouns",
    description: "An escrow tool proposed to the Nouns DAO.",
    tags: ["WEB3", "DAO"],
    image: nounsImage
  },
  {
    id: 4,
    title: "Overture",
    description: "An AI-powered time and mood based music platform.",
    tags: ["AI", "Music"],
    image: overtureImage
  },
  {
    id: 5,
    title: "Project E",
    description: "Blockchainfor academic transcripts.",
    tags: ["WEB3", "Education"],
    image: projectEImage
  },
  {
    id: 6,
    title: "Summit",
    description: "A comprehensive platform for consuming web3 media.",
    tags: ["WEB3", "Platform"],
    image: summitImage
  },
  {
    id: 7,
    title: "Status",
    description: "A streamlined system for tracking and updating project statuses.",
    tags: ["Productivity", "Management"],
    image: statusImage
  },

  {
    id: 9,
    title: "Updex",
    description: "A system for efficiently indexing and tracking updates across multiple projects.",
    tags: ["Productivity", "Organization"],
    image: updexImage
  },
  {
    id: 10,
    title: "Walkthrough",
    description: "A tool for creating interactive walkthroughs and guides for digital cameras.",
    tags: ["Education", "Software"],
    image: walkthroughImage
  }
];

const DesignItem = ({ design, onClick, isSelected }) => (
  <li onClick={() => onClick(design)} className={isSelected ? 'selected' : ''}>
    <div className="design-info">
      <div className="design-title">{design.title}</div>
      <div className="design-description">{design.description}</div>
      <div className="design-tags">
        {design.tags.map(tag => (
          <span key={tag} className={`tag ${isSelected ? 'selected' : ''}`}>{tag}</span>
        ))}
      </div>
    </div>
  </li>
);

const DesignDetails = ({ design, onBack }) => {
  if (design.component) {
    const Component = design.component;
    return <Component onBack={onBack} />;
  }

  return (
    <div className="design-details">
      <button className="back-button" onClick={onBack}>Back</button>
      {design.image && (
        <div className="hero-image-container">
          <img src={design.image} alt={design.title} className="hero-image" />
        </div>
      )}
      <div className="design-content">
        <h3>{design.title}</h3>
        <p>{design.description}</p>
        <div className="design-tags">
          {design.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </div>
  );
};

const Designs = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDesigns = useMemo(() => {
    return designsData.filter(design =>
      design.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      design.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="designs-container">
      <div className="designs-sidebar">
        <input
          type="text"
          placeholder="Search designs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <ul className="designs-list">
          {filteredDesigns.map((design) => (
            <DesignItem
              key={design.id}
              design={design}
              onClick={setSelectedDesign}
              isSelected={selectedDesign && selectedDesign.id === design.id}
            />
          ))}
        </ul>
      </div>
      {selectedDesign && (
        <DesignDetails design={selectedDesign} onBack={() => setSelectedDesign(null)} />
      )}
    </div>
  );
};

export default Designs;
