import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(localStorage.getItem('selectedItem') || 'home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/') {
            setSelected('home');
        } else if (currentPath.startsWith('/writings')) {
            setSelected('writings');
        } else if (currentPath.startsWith('/bookmarks')) {
            setSelected('bookmarks');
        } else if (currentPath.startsWith('/ama')) {
            setSelected('ama');
        } else if (currentPath.startsWith('/stack')) {
            setSelected('stack');
        } else if (currentPath.startsWith('/projects/campsite')) {
            setSelected('campsite');
        } else if (currentPath.startsWith('/projects/design-details')) {
            setSelected('design-details');
        } else if (currentPath.startsWith('/projects/staff-design')) {
            setSelected('staff-design');
        } else if (currentPath.startsWith('/projects/figma-plugins')) {
            setSelected('figma-plugins');
        } else if (currentPath.startsWith('/projects/security-checklist')) {
            setSelected('security-checklist');
        } else if (currentPath.startsWith('/projects/hacker-news')) {
            setSelected('hacker-news');
        } else if (currentPath.startsWith('/projects/app-dissection')) {
            setSelected('app-dissection');
        } else if (currentPath.startsWith('/twitter')) {
            setSelected('twitter');
        } else if (currentPath.startsWith('/youtube')) {
            setSelected('youtube');
        } else if (currentPath.startsWith('/github')) {
            setSelected('github');
        } else if (currentPath.startsWith('/figma')) {
            setSelected('figma');
        }
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
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('writings')}>
                            <Link to="/writings" className={selected === 'writings' ? 'selected' : ''}>
                                <i className="fas fa-pencil-alt"></i> Writings
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Me</h3>
                    <ul>
                        <li onClick={() => handleSelect('bookmarks')}>
                            <Link to="/bookmarks" className={selected === 'bookmarks' ? 'selected' : ''}>
                                <i className="fas fa-bookmark"></i> Bookmarks
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('ama')}>
                            <Link to="/ama" className={selected === 'ama' ? 'selected' : ''}>
                                <i className="fas fa-question-circle"></i> AMA
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('stack')}>
                            <Link to="/stack" className={selected === 'stack' ? 'selected' : ''}>
                                <i className="fas fa-layer-group"></i> Stack
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Projects</h3>
                    <ul>
                        <li onClick={() => handleSelect('campsite')}>
                            <Link to="/projects/campsite" className={selected === 'campsite' ? 'selected' : ''}>
                                <i className="fas fa-campground"></i> Campsite
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('design-details')}>
                            <Link to="/projects/design-details" className={selected === 'design-details' ? 'selected' : ''}>
                                <i className="fas fa-paint-brush"></i> Design Details
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('staff-design')}>
                            <Link to="/projects/staff-design" className={selected === 'staff-design' ? 'selected' : ''}>
                                <i className="fas fa-users"></i> Staff Design
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('figma-plugins')}>
                            <Link to="/projects/figma-plugins" className={selected === 'figma-plugins' ? 'selected' : ''}>
                                <i className="fas fa-puzzle-piece"></i> Figma Plugins
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('security-checklist')}>
                            <Link to="/projects/security-checklist" className={selected === 'security-checklist' ? 'selected' : ''}>
                                <i className="fas fa-shield-alt"></i> Security Checklist
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('hacker-news')}>
                            <Link to="/projects/hacker-news" className={selected === 'hacker-news' ? 'selected' : ''}>
                                <i className="fas fa-hacker-news"></i> Hacker News
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('app-dissection')}>
                            <Link to="/projects/app-dissection" className={selected === 'app-dissection' ? 'selected' : ''}>
                                <i className="fas fa-mobile-alt"></i> App Dissection
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Online</h3>
                    <ul>
                        <li onClick={() => handleSelect('twitter')}>
                            <Link to="/twitter" className={selected === 'twitter' ? 'selected' : ''}>
                                <i className="fab fa-twitter"></i> Twitter
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('youtube')}>
                            <Link to="/youtube" className={selected === 'youtube' ? 'selected' : ''}>
                                <i className="fab fa-youtube"></i> YouTube
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('github')}>
                            <Link to="/github" className={selected === 'github' ? 'selected' : ''}>
                                <i className="fab fa-github"></i> GitHub
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('figma')}>
                            <Link to="/figma" className={selected === 'figma' ? 'selected' : ''}>
                                <i className="fab fa-figma"></i> Figma
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
