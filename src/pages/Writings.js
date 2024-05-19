import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import writings from './writingsData'; // Import the writings data
import './Writings.css';

const Writings = () => {
  const [selectedWritingId, setSelectedWritingId] = useState(null);

  const selectedWriting = writings.find(writing => writing.id === selectedWritingId);

  return (
    <div className="writings-container">
      <div className="list-container">
        {writings.map((writing) => (
          <div key={writing.id} className="writing-item" onClick={() => setSelectedWritingId(writing.id)}>
            <h3>{writing.title}</h3>
            <p>{writing.date}</p>
          </div>
        ))}
      </div>
      {selectedWriting && (
        <div className="writing-details">
          <h2>{selectedWriting.title}</h2>
          <p>{selectedWriting.date}</p>
          <ReactMarkdown>{selectedWriting.content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Writings;
