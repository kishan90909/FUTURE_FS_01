import React, { useEffect, useState } from 'react';
import { fetchSkills } from '../api';
import SkillBar from '../components/SkillBar';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetchSkills()
            .then(res => setSkills(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="page-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-container">
                {skills.map(skill => (
                    <SkillBar key={skill.id} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
    );
};
export default Skills;