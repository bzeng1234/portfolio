import React from "react";
import ProjectCard from "./ProjectCard";
import '../styles/project.css'
import { projectData } from "../assets/data/projectdata";

function Project() {
    return (
        <div className="project-container">
            <h1>Projects</h1>
            {projectData.map((project) => <ProjectCard key={project.title} title={project.title} description={project.description}/>)}
        </div>
    );
};

export default Project;