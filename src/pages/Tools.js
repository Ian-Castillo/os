import React from 'react';
import './Tools.css'; // Import the CSS for styling

const Tools = () => {
    const tools = [
        { id: 1, name: 'Tool 1', description: 'Description of Tool 1' },
        { id: 2, name: 'Tool 2', description: 'Description of Tool 2' },
        // Add more tools as needed
    ];

    return (
        <div className="tools-container">
            <h1>Digital Tools</h1>
            <ul>
                {tools.map(tool => (
                    <li key={tool.id}>
                        <h3>{tool.name}</h3>
                        <p>{tool.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tools;
