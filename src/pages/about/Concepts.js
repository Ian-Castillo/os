import React, { useState } from 'react';
import './Concepts.css'; // Ensure your CSS file is linked

const conceptsData = [
  {
    id: 1,
    title: "DisplayETF",
    url: "Display individual ETFs.",
    description: "Display individual ETFs.",
    // favicon: "https://www.google.com/s2/favicons?domain=canva.com",
    tags: ["Artifical Intelligence","Financial"]
  },
  {
    id: 2,
    title: "Summit.XYZ    ",
    url: "Curated media for learning and experiencing web 3.0 talks.",
    description: "Curated media for learning and experiencing web 3.0 talks.",
    // favicon: "https://www.google.com/s2/favicons?domain=adobe.com",
    tags: ["WEB 3.0","Media"]
  },
  {
    id: 3,
    title: "Project E",
    url: "Secure academic transcripts, on chain.",
    description: "Secure academic transcripts, on chain.",
    // favicon: "https://www.google.com/s2/favicons?domain=figma.com",
    tags: ["WEB 3.0", "Education"]
  },
  {
    id: 4,
    title: "TwotoEight",
    url: "Bridging the wealth gap for underserved communities.",
    description: "",
    // favicon: "https://www.google.com/s2/favicons?domain=sketch.com",
    tags: ["Financial Literacy","Education"]
  },
  {
    id: 5,
    title: "Showcase",
    url: "Display custom curated gallery for NFT's.",
    description: "Display custom curated gallery for NFT's.",
    // favicon: "https://www.figma.com/proto/bTQUlOz40VBa3nMZ8J7aQ1/Gallery?page-id=0%3A1&type=design&node-id=1-4&viewport=143%2C-419%2C0.2&t=hIv7R5xfwSO2cTo5-1&scaling=scale-down&mode=design",
    tags: ["WEB 3.0"]
  },
  {
    id: 6,
    title: "Zero Day",
    url: "Modern conference for forward-thinking entreprenuers.",
    description: "Modern conference for forward-thinking entreprenuers.",
    // favicon: "https://www.google.com/s2/favicons?domain=adobe.com",
    tags: ["Conference"]
  },
];

const Concepts = () => {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleConceptClick = (concept) => {
    setSelectedConcept(concept);
  };

  const handleBackClick = () => {
    setSelectedConcept(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredConcepts = conceptsData.filter(concept =>
    concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    concept.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="concepts-container">
      <div className="concepts-sidebar">
        <input
          type="text"
          placeholder="Search concepts..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <ul className="concepts-list">
          {filteredConcepts.map((concept) => (
            <li key={concept.id} onClick={() => handleConceptClick(concept)}>
              <div className="concept-info">
                <div className="concept-title">{concept.title}</div>
                {/* <div className="concept-favicon-url">
                  <img className="concept-favicon" src={concept.favicon} alt="" /> */}
                  <div className="concept-url">{concept.url.replace(/^https?:\/\//, '')}</div>
                {/* </div> */}
                <div className="concept-tags">
                  {concept.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedConcept && (
        <div className="concept-details">
          <button className="back-button" onClick={handleBackClick}>Back</button>
            <h3>{selectedConcept.title}</h3>
            <p>{selectedConcept.description}</p>
            <a href={selectedConcept.url} target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
        )}
      </div>
    );
  };
  
  export default Concepts;