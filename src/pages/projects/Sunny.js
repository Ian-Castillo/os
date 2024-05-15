import React, { useState } from 'react';
import './Sunny.css'; // Make sure the CSS path is correct

const Sunny = () => {
    const updates = [
        { version: '1.0.1', date: '2024-01-15', notes: ['Fixed bug in login', 'Improved performance on mobile devices'] },
        { version: '1.0.0', date: '2024-01-01', notes: ['Initial release of the Sunny app'] },
    ];

    const [selectedUpdate, setSelectedUpdate] = useState(null);

    const handleUpdateClick = (update) => {
        setSelectedUpdate(update);
    };

    return (
        <div className="sunny-container">
            <div className="sunny-sidebar">
                <ul className="sunny-list">
                    {updates.map((update, index) => (
                        <li key={index} onClick={() => handleUpdateClick(update)}>
                            <div className="sunny-info">
                                <div className="sunny-title">{update.version}</div>
                                <div className="sunny-date">{update.date}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedUpdate && (
                <div className="sunny-details">
                    <button className="back-button" onClick={() => setSelectedUpdate(null)}>Back</button>
                    <h2>{selectedUpdate.version} - {selectedUpdate.date}</h2>
                    <ul>
                        {selectedUpdate.notes.map((note, idx) => <li key={idx}>{note}</li>)}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sunny;
