import React from "react";
import { projects } from "../data/projects";

export default function ProjectItem() {

    const projectItems = projects.map(project => 
        <div className="project__item__wrapper">
            <a href={project.link}>
                <div className="project__image__wrapper">
                    <img className="project__image__img" src={project.imgSrc} alt=""/>
                </div>
            </a>

            <a href={project.link}>
                <div className="project__name__wrapper">
                    {project.mainHeading}
                </div>
            </a>
            
        </div>
        );

    return (
        <div className="section__project__wrapper">
            {projectItems}
        </div>
    );
}