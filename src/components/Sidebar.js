import React, { useState } from 'react';
import './Sidebar.css'; // Ensure correct path
import '../pages/Home.css'; // Ensure correct path

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to handle sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle sidebar visibility
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <a href="/">Home</a>
                <a href="/writings">Writings</a>
                <a href="/projects">Projects</a>
                <a href="/bookmarks">Bookmarks</a>
            </div>
            <button className="menu-toggle" onClick={toggleSidebar}>
                ☰
            </button>
            <div className={`content ${isOpen ? 'shifted' : ''}`}>
                {/* Your main content goes here */}
            </div>
        </>
    );
};

export default Sidebar;
