import React, { useState } from 'react';
import './Sidebar.css'; // Make sure this path is correct

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to handle the sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle the boolean state to show/hide the sidebar
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
        </>
    );
};

export default Sidebar;
