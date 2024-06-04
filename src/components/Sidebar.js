import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import gradientLogoDark from '../assets/gradientDark.svg';
import gradientLogoLight from '../assets/gradientLight.svg';
import sunnyLight from '../assets/sunnyLight.svg';
import sunnyDark from '../assets/sunnyDark.svg';

const Sidebar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(() => localStorage.getItem('selectedItem') || 'home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const path = location.pathname.split('/')[1] || 'home';
        setSelected(path);
        localStorage.setItem('selectedItem', path);
    }, [location]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="menu-close" onClick={toggleSidebar}>×</button>
                <div className="menu-title">
                    <h2>Ian M. Castillo</h2>
                    <div className="globe">
                        <i className="fi fi-sr-globe"></i>
                        <span className="globe-text">Iowa City, IA, CST</span>
                    </div>
                </div>
                <div className="menu-section">
                    <h3>About</h3>
                    <ul>
                        <li onClick={() => setSelected('home')}>
                            <Link to="/" className={selected === 'home' ? 'selected' : ''}>
                                <i className="fi fi-sr-house-blank"></i> Home
                            </Link>
                        </li>
                        <li onClick={() => setSelected('thoughts')}>
                            <Link to="/thoughts" className={selected === 'thoughts' ? 'selected' : ''}>
                                <i className="fi fi-ss-comment"></i> Thoughts
                            </Link>
                        </li>
                        <li onClick={() => setSelected('concepts')}>
                            <Link to="/concepts" className={selected === 'concepts' ? 'selected' : ''}>
                                <i className="fi fi-br-scribble"></i> Concepts
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
  <h3>Projects</h3>
  <ul>
    <li onClick={() => setSelected('gradient')}>
      <Link to="/gradient" className={selected === 'gradient' ? 'selected' : ''}>
        <div className="icon-container">
        <img src={gradientLogoDark} alt="Gradient Logo Dark" className="icon dark Gradient" />
<img src={gradientLogoLight} alt="Gradient Logo Light" className="icon light Gradient" />
        </div>
        Gradient
      </Link>
    </li>
  </ul>
  <ul>
  <li onClick={() => setSelected('sunny')}>
  <Link to="/sunny" className={selected === 'sunny' ? 'selected' : ''}>
    <div className="icon-container sunny-icon-container">
      <img src={sunnyDark} alt="Sunny Logo Dark" className="icon dark" />
      <img src={sunnyLight} alt="Sunny Logo Light" className="icon light" />
    </div>
    Sunny
  </Link>
</li>
  </ul>
</div>
                <div className="menu-section">
                    <h3>Resources</h3>
                    <ul>
                        <li onClick={() => setSelected('tools')}>
                            <Link to="/tools" className={selected === 'tools' ? 'selected' : ''}>
                                <i className="fi fi-ss-cursor"></i> Tools
                            </Link>
                        </li>
                        <li onClick={() => setSelected('library')}>
                            <Link to="/library" className={selected === 'library' ? 'selected' : ''}>
                                <i className="fi fi-sr-layers"></i> Library
                            </Link>
                        </li>
                        <li onClick={() => setSelected('highlights')}>
                            <Link to="/highlights" className={selected === 'highlights' ? 'selected' : ''}>
                                <i className="fi fi-ss-quote-right"></i> Highlights
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
