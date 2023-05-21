import React from "react";
import '../styles/projectcard.css'

function ProjectCard({title, description}) {
    return (
        <div className="project-card">
            <p className="project-title">{title}</p>
            <p className="project-description">{description}</p>
        </div>
    );
};

export default ProjectCard;