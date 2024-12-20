import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import timeMachineLogoLight from '../assets/timeMachineLogoDark.png';
import timeMachineLogoDark from '../assets/timeMachineLogoLight.png';
import sunnyLight from '../assets/sunnyLight.svg';
import sunnyDark from '../assets/sunnyDark.svg';
import daydrinklight from '../assets/daydrinklight.svg'
import daydrinkdark from '../assets/daydrinkdark.svg'

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
                    <h3>Overview</h3>
                    <ul>
                        <li onClick={() => setSelected('home')}>
                            <Link to="/" className={selected === 'home' ? 'selected' : ''}>
                                <i className="fi fi-sr-house-blank"></i> Home
                            </Link>
                        </li>
                        {/* <li onClick={() => setSelected('thoughts')}>
                            <Link to="/thoughts" className={selected === 'thoughts' ? 'selected' : ''}>
                                <i className="fi fi-ss-comment"></i> Thoughts
                            </Link>
                        </li> */}
                      
                        {/* <li onClick={() => setSelected('photos')}>
                            <Link to="/photos" className={selected === 'photos' ? 'selected' : ''}>
                                <i className="fi fi-br-photo-capture"></i> Photos
                            </Link>
                        </li> */}
                        <li onClick={() => setSelected('designs')}>
                            <Link to="/designs" className={selected === 'designs' ? 'selected' : ''}>
                                <i className="fi fi-br-scribble"></i> Portfolio
                            </Link>
                        </li>  
                        {/* <li onClick={() => setSelected('')}>
                            <Link to="/" className={selected === '' ? '' : ''}>
                                <i className="fi fi-br-build-alt"></i> Projects
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Projects</h3>
                    <ul>
              
                    </ul>
                    <ul>
                        <li onClick={() => setSelected('sunny')}>
                            <Link to="/sunny" className={selected === 'sunny' ? 'selected' : ''}>
                                <div className="icon-container">
                                    <img src={sunnyDark} alt="Sunny Logo Dark" className="icon dark sunny-logo" />
                                    <img src={sunnyLight} alt="Sunny Logo Light" className="icon light sunny-logo" />
                                </div>
                                Sunny Weather
                            </Link>
                        </li>
                    </ul> 
                     <ul>
                        <li onClick={() => setSelected('timeMachine')}>
                            <Link to="/timeMachine" className={selected === 'timeMachine' ? 'selected' : ''}>
                                <div className="icon-container">
                                    <img src={timeMachineLogoDark} alt="Time Machine Logo Dark" className="icon dark TimeMachine" />
                                    <img src={timeMachineLogoLight} alt="Time Machine Logo Light" className="icon light TimeMachine" />
                                </div>
                                Time Machine Print
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
                        <li onClick={() => setSelected('bookmarks')}>
                            <Link to="/bookmarks" className={selected === 'bookmarks' ? 'selected' : ''}>
                                <i className="fi fi-br-chart-simple-horizontal "></i> Bookmarks
                            </Link>
                        </li> 
                        <li onClick={() => setSelected('highlights')}>
                            <Link to="/highlights" className={selected === 'highlights' ? 'selected' : ''}>
                                <i className="fi fi-ss-quote-right"></i> Quotes
                            </Link>
                        </li>
                   
                        {/* <li onClick={() => setSelected('highlights')}>
                            <Link to="/" className={selected === 'highlights' ? 'selected' : ''}>
                                <i className="fi fi-br-camera-movie"></i> Videos
                            </Link>
                        </li> */}
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
