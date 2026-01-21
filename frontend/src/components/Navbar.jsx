
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo"><span>Portfolio</span></div>
            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
                <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)} className="btn-contact">Contact</Link></li>
            </ul>
        </nav>
    );
};
export default Navbar;