import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Kishan patel</span></h1>
                <h2>Full-Stack Developer</h2>
                {/* <p>I build scalable web applications and seamless digital experiences.</p> */}
                <div className="cta-buttons">
                    <Link to="/projects" className="btn primary">View Work</Link>
                    <Link to="/contact" className="btn secondary">Hire Me</Link>
                </div>
            </div>
        </div>
    );
};
export default Home;