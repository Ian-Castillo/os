import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Ensure CSS is properly linked

const Sidebar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(() => localStorage.getItem('selectedItem') || 'home');
    const [isOpen, setIsOpen] = useState(false);

    // Effect for updating selection based on the URL path
    useEffect(() => {
        const path = location.pathname.split('/')[1] || 'home';
        setSelected(path);
        localStorage.setItem('selectedItem', path);
    }, [location]);

    // Function to handle sidebar toggle
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="menu-section">
                    <h2>Ian Castillo</h2>
                    <p>Founder of Sunny</p>
                    <ul>
                        <li onClick={() => setSelected('home')}>
                            <Link to="/" className={selected === 'home' ? 'selected' : ''}>
                                <i className="fi fi-sr-house-blank"></i> Home
                            </Link>
                        </li>
                        <li onClick={() => setSelected('writings')}>
                            <Link to="/writings" className={selected === 'writings' ? 'selected' : ''}>
                                <i className="fi fi-ss-comment"></i> Thoughts
                            </Link>
                        </li>
                        {/* Add more links if necessary */}
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Concepts</h3>
                    <ul>
                        <li onClick={() => setSelected('gradient')}>
                            <Link to="/gradient" className={selected === 'gradient' ? 'selected' : ''}>
                            <i class="fi fi-ss-book"></i>Gradient
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Projects</h3>
                    <ul>
                        <li onClick={() => setSelected('sunny')}>
                            <Link to="/sunny" className={selected === 'sunny' ? 'selected' : ''}>
                                <i className="fi fi-sr-brightness"></i> Sunny
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Resources</h3>
                    <ul>
                        <li onClick={() => setSelected('tools')}>
                            <Link to="/tools" className={selected === 'tools' ? 'selected' : ''}>
                            <i class="fi fi-ss-cursor"></i>Tools
                            </Link>
                        </li>
                        <li onClick={() => setSelected('library')}>
                            <Link to="/library" className={selected === 'library' ? 'selected' : ''}>
                                <i className="fi fi-sr-layers"></i> Library
                            </Link>
                        </li>
                    </ul>
                </div>
     
                <div className="menu-section">
                    <h3>Online</h3>
                    <ul>
                        <li onClick={() => setSelected('twitter')}>
                            <Link to="/twitter" className={selected === 'twitter' ? 'selected' : ''}>
                            <i class="fi fi-brands-twitter"></i> Twitter
                            </Link>
                        </li>
                        <li onClick={() => setSelected('linkedin')}>
                            <Link to="/linkedin" className={selected === 'linkedin' ? 'selected' : ''}>
                            <i class="fi fi-brands-linkedin"></i> LinkedIn
                            </Link>
                        </li>
                        <li onClick={() => setSelected('github')}>
                            <Link to="/github" className={selected === 'github' ? 'selected' : ''}>
                            <i class="fi fi-brands-github"></i> GitHub
                            </Link>
                        </li>
                        <li onClick={() => setSelected('figma')}>
                            <Link to="/figma" className={selected === 'figma' ? 'selected' : ''}>
                            <i class="fi fi-brands-figma"></i> Figma
                            </Link>
                        </li>
                    </ul>
                </div>
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
