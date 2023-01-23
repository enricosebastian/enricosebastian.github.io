import React from "react";
import SectionItem from "./SectionItem";
import { projects } from "../data/projects";

export default function Projects() {
    const sectionItems = projects.map(project => 
        <SectionItem 
            mainHeading = {project.mainHeading}
            duration = {project.duration}
            secondaryHeading = {project.secondaryHeading}
            descriptionItems = {project.descriptionItems}
        />);
    
    return (
        <div className="section" id="projects">
            <h1>projects</h1>
            {sectionItems}
        </div>
    );
}