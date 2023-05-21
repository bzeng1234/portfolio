import React from "react";
import About from "./About";
import Project from "./Project"
import '../styles/main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";

function Main() {
    return (
        <div className="main">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<About/>}></Route>
                <Route path="/projects" element={<Project/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Main;