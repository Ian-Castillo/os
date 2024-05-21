import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import thoughtsData from './thoughtsData'; // Ensure the correct path to your data file
import './Thoughts.css';

const Thoughts = () => {
  const [selectedThoughtId, setSelectedThoughtId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredThoughts = thoughtsData.filter(thought => 
    thought.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const selectedThought = thoughtsData.find(thought => thought.id === selectedThoughtId);

  return (
    <div className="thoughts-container">
      <div className="thoughts-sidebar">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by tag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="thoughts-list">
          {filteredThoughts.map((thought) => (
            <li 
              key={thought.id} 
              className={`thought-item ${thought.id === selectedThoughtId ? 'selected' : ''}`} 
              onClick={() => setSelectedThoughtId(thought.id)}
            >
              <div className="thought-info">
                <div className="thought-title">{thought.title}</div>
                <div className="thought-tags">
                  {thought.tags.map(tag => (
                    <span key={tag} className="thought-tag">{tag}</span>
                  ))}
                </div>
                <div className="thought-date">{thought.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedThought && (
        <div className="thought-details">
          <button className="back-button" onClick={() => setSelectedThoughtId(null)}>Back</button>
          <h2>{selectedThought.title}</h2>
          <p>{selectedThought.date}</p>
          {selectedThought.image && <img src={selectedThought.image} alt={selectedThought.title} className="thought-image" />}
          <ReactMarkdown>{selectedThought.content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Thoughts;
