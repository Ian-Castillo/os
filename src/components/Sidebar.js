import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Ensure CSS is properly linked

const Sidebar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(localStorage.getItem('selectedItem') || 'home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const currentPath = location.pathname;
        setSelected(currentPath.split('/')[1] || 'home'); // Simplifies selecting based on path
    }, [location]);

    useEffect(() => {
        localStorage.setItem('selectedItem', selected);
    }, [selected]);

    const handleSelect = (item) => {
        setSelected(item);
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="menu-section">
                    <h2>Ian Castillo</h2>
                    <ul>
                        <li onClick={() => handleSelect('home')}>
                            <Link to="/" className={selected === 'home' ? 'selected' : ''}>
                                <i className="fi fi-sr-house-blank"></i> Home
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('writings')}>
                            <Link to="/writings" className={selected === 'writings' ? 'selected' : ''}>
                                <i className="fi fi-ss-comment"></i> Thoughts
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Resources</h3>
                    <ul>
                        <li onClick={() => handleSelect('tools')}>
                            <Link to="/tools" className={selected === 'tools' ? 'selected' : ''}>
                                <i className="fi fi-sr-tools"></i> Tools
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('library')}>
                            <Link to="/library" className={selected === 'library' ? 'selected' : ''}>
                                <i className="fi fi-sr-layers"></i> Library
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Projects</h3>
                    <ul>
                        <li onClick={() => handleSelect('sunny')}>
                            <Link to="/sunny" className={selected === 'sunny' ? 'selected' : ''}>
                                <i className="fi fi-sr-brightness"></i> Sunny
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Online</h3>
                    <ul>
                        <li onClick={() => handleSelect('twitter')}>
                            <Link to="/twitter" className={selected === 'twitter' ? 'selected' : ''}>
                                Twitter
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('linkedin')}>
                            <Link to="/linkedin" className={selected === 'linkedin' ? 'selected' : ''}>
                                LinkedIn
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('github')}>
                            <Link to="/github" className={selected === 'github' ? 'selected' : ''}>
                                GitHub
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('figma')}>
                            <Link to="/figma" className={selected === 'figma' ? 'selected' : ''}>
                                Figma
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <div className={`content ${isOpen ? 'shifted' : ''}`}>
                {/* Your main content goes here */}
            </div>
        </>
    );
};

export default Sidebar;
