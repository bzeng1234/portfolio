import React from "react";
import { skillsData } from "../assets/data/skillsdata";
import '../styles/skills.css'

function Skills() {
    return (
        <div className="skills-container">
        {skillsData.map((skills) => <img className="skill-img" key={skills.caption} src={skills.image} alt={skills.caption}></img>)}
        </div>
    );
}

export default Skills;