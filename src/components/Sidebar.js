import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

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
                            <i class="fi fi-sr-house-blank"></i> Home
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('writings')}>
                            <Link to="/writings" className={selected === 'writings' ? 'selected' : ''}>
                            <i class="fi fi-ss-comment"></i> Thoughts
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Me</h3>
                    <ul>
                    <li onClick={() => handleSelect('ama')}>
                            <Link to="/ama" className={selected === 'ama' ? 'selected' : ''}>
                            <i class="fi fi-sr-bookmark"></i> Bookmarks
                            </Link>
                        </li>
                        <li onClick={() => handleSelect('bookmarks')}>
                            <Link to="/bookmarks" className={selected === 'bookmarks' ? 'selected' : ''}>
                            <i class="fi fi-sr-layers"></i> Library
                            </Link>
                        </li>
                      
                        {/* <li onClick={() => handleSelect('stack')}>
                            <Link to="/stack" className={selected === 'stack' ? 'selected' : ''}>
                                <i className="fas fa-layer-group"></i> Stack
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div className="menu-section">
                    <h3>Projects</h3>
                    <ul>
                        <li onClick={() => handleSelect('campsite')}>
                            <Link to="/projects/campsite" className={selected === 'campsite' ? 'selected' : ''}>
                            <i class="fi fi-sr-brightness"></i> Sunny
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
LinkedIn                            </Link>
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
