import React, { useState } from 'react';
import './Writings.css';

const writings = [
  { id: 1, title: 'Framer Sites first impressions', date: 'February 19, 2022', description: "Detailed content of Framer Sites first impressions." },
  { id: 2, title: 'Design critique for fun and profit', date: 'February 5, 2022', description: "Detailed content of Design critique for fun and profit." },
  { id: 3, title: 'The Side Project Prophecy', date: 'January 17, 2022', description: "Detailed content of The Side Project Prophecy." }
];

const Writings = () => {
  const [selectedWriting, setSelectedWriting] = useState(null);

  return (
    <div className="writings-container">
      <div className="list-container">
        {writings.map((writing) => (
          <div key={writing.id} className="writing-item" onClick={() => setSelectedWriting(writing)}>
            <h3>{writing.title}</h3>
            <p>{writing.date}</p>
          </div>
        ))}
      </div>
      {selectedWriting && (
        <div className="writing-details">
          <h2>{selectedWriting.title}</h2>
          <p>{selectedWriting.description}</p>
        </div>
      )}
    </div>
  );
};

export default Writings;
