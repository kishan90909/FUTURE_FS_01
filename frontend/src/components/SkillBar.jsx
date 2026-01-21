import React from 'react';

const SkillBar = ({ name, level }) => {
    return (
        <div className="skill-bar">
            <div className="skill-info">
                <span>{name}</span>
                <span>{level}%</span>
            </div>
            <div className="progress-bg">
                <div className="progress-fill" style={{ width: `${level}%` }}></div>
            </div>
        </div>
    );
};
export default SkillBar;