import React from "react";
import '../styles/about.css';
import pic from '../assets/png/profile.jpeg'
import { aboutme } from "../assets/data/about-me";
import Skills from "./Skills";

function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-info">
                <img className="profile-pic" src={pic} alt="img"></img>
                <p className="about-description">{aboutme}</p>
            </div>
            <Skills />
        </div>
    );
};

export default About;