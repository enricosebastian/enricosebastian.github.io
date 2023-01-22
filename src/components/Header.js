import React from "react";
import "../styles/Header.scss";

export default function Header() {
    function moveTo(sectionName) {
        document.getElementById(sectionName).scrollIntoView({behavior: 'smooth'});
    } 

    return (
        <div className="header">
            <div className="name">
                <h1>enrico sebastian</h1>
                <hr />
            </div>
            <ul>
                <li className="experience" onClick={() => moveTo("experience")}>experience</li>
                <li className="education" onClick={() => moveTo("education")}>education</li>
                <li className="projects" onClick={() => moveTo("projects")}>projects</li>
                <li className="contact_me" onClick={() => moveTo("footer")}>contact_me</li>
            </ul>
        </div>
    );
}