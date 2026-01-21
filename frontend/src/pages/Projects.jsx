import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects()
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="page-section">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map(proj => (
                    <ProjectCard key={proj.id} project={proj} />
                ))}
            </div>
        </div>
    );
};
export default Projects;