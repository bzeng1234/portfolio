import React from "react";
import '../styles/header.css'

function Header() {
    return (
        <header className="header">
            <nav>
                <a className="links" href="/">About</a>
                <a className="links" href="/projects">Projects</a>
                <a className="links" href="/contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;