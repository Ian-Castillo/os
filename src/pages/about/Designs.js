import React, { useState } from 'react';
import './Designs.css';
import SunnyWeatherApp from './SunnyWeatherApp';
import TimeMachine from './TimeMachinePrintWeb';

const designsData = [
  // {
  //   id: 1,
  //   title: "Sunny Weather",
  //   url: "A social weather company.",
  //   description: "A social weather company.",
  //   tags: ["Mobile App"]
  // },
  {
    id: 2,
    title: "Time Machine Print",
    url: "A bookstore for creatives.",
    description: "An online bookstore, resource, and community for creatives, builders, and those imagining the future.",
    tags: ["Website"]
  },
];

const Designs = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDesignClick = (design) => {
    setSelectedDesign(design);
  };

  const handleBackClick = () => {
    setSelectedDesign(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDesigns = designsData.filter(design =>
    design.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    design.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="designs-container">
      <div className="designs-sidebar">
        <input
          type="text"
          placeholder="Search designs..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <ul className="designs-list">
          {filteredDesigns.map((design) => (
            <li key={design.id} onClick={() => handleDesignClick(design)}>
              <div className="design-info">
                <div className="design-title">{design.title}</div>
                <div className="design-url">{design.url}</div>
                <div className="design-tags">
                  {design.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedDesign && (
        <div className="design-details">
          {selectedDesign.title === "Sunny Weather" ? (
            <SunnyWeatherApp onBack={handleBackClick} />
          ) : selectedDesign.title === "Time Machine Print" ? (
            <TimeMachine onBack={handleBackClick} />
          ) : (
            <>
              <button className="back-button" onClick={handleBackClick}>Back</button>
              <h3>{selectedDesign.title}</h3>
              <p>{selectedDesign.description}</p>
              <a href={selectedDesign.url} target="_blank" rel="noopener noreferrer">Visit</a>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Designs;