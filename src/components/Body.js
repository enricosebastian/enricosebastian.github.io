import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import "../styles/Body.scss";

export default function Body() {
    return (
        <div className="body">
            <hr />
            <hr />
            <Experience/>
            <hr />
            <hr />
            <Education/>
            <hr />
            <hr />
            <Projects/>
        </div>
    );
}