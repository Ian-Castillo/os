import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import writingsData from './writingsData'; // Ensure the correct path to your data file
import './Writings.css';

const Writings = () => {
  const [selectedWritingId, setSelectedWritingId] = useState(null);

  const selectedWriting = writingsData.find(writing => writing.id === selectedWritingId);

  return (
    <div className="writings-container">
      <div className="writings-sidebar">
        <ul className="writings-list">
          {writingsData.map((writing) => (
            <li key={writing.id} className="writing-item" onClick={() => setSelectedWritingId(writing.id)}>
              <div className="writing-info">
                <div className="writing-title">{writing.title}</div>
                <div className="writing-date">{writing.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedWriting && (
        <div className="writing-details">
          <button className="back-button" onClick={() => setSelectedWritingId(null)}>Back</button>
          <h2>{selectedWriting.title}</h2>
          <p>{selectedWriting.date}</p>
          <ReactMarkdown>{selectedWriting.content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Writings;
