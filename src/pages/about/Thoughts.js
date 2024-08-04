import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import thoughtsData from './thoughtsData';
import './Thoughts.css';

const ThoughtSidebar = ({ thoughts, selectedThoughtId, onThoughtSelect, searchTerm, onSearchChange }) => (
  <div className="thoughts-sidebar">
    <input
      type="text"
      className="search-bar"
      placeholder="Search by tag..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    <ul className="thoughts-list">
      {thoughts.map((thought) => (
        <li 
          key={thought.id} 
          className={`thought-item ${thought.id === selectedThoughtId ? 'selected' : ''}`} 
          onClick={() => onThoughtSelect(thought.id)}
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
);

const ThoughtDetails = ({ thought, onBack }) => (
  <div className="thought-details">
    <button className="back-button" onClick={onBack}>Back</button>
    <h2>{thought.title}</h2>
    <p>{thought.date}</p>
    {thought.image && <img src={thought.image} alt={thought.title} className="thought-image" />}
    <ReactMarkdown>{thought.content}</ReactMarkdown>
  </div>
);

const Thoughts = () => {
  const [selectedThoughtId, setSelectedThoughtId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredThoughts = thoughtsData.filter(thought => 
    thought.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const selectedThought = thoughtsData.find(thought => thought.id === selectedThoughtId);

  return (
    <div className="thoughts-container">
      <ThoughtSidebar 
        thoughts={filteredThoughts}
        selectedThoughtId={selectedThoughtId}
        onThoughtSelect={setSelectedThoughtId}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      {selectedThought && (
        <ThoughtDetails 
          thought={selectedThought}
          onBack={() => setSelectedThoughtId(null)}
        />
      )}
    </div>
  );
};

export default Thoughts;