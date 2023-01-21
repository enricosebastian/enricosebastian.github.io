import React from "react";
import "../styles/Header.scss";

export default function Header() {
    return (
        <div className="header">
            <div className="name">
                <h1>enrico sebastian</h1>
                <hr />
            </div>
            <ul>
                <li className="experience">experience</li>
                <li className="education">education</li>
                <li className="projects">projects</li>
                <li className="contact_me">contact_me</li>
            </ul>
        </div>
    );
}