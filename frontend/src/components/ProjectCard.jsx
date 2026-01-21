import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="card-image" style={{backgroundImage: `url(${project.image_url})`}}></div>
            <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="tech-stack">{project.tech_stack}</span>
                <div className="card-links">
                    <a href={project.repo_link} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={project.live_link} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;