import React from "react";
import SectionItem from "./SectionItem";
import { experiences } from "../data/experiences";

export default function Experience() {
    const sectionItems = experiences.map(experience => 
        <SectionItem 
            mainHeading = {experience.mainHeading}
            duration = {experience.duration}
            secondaryHeading = {experience.secondaryHeading}
            descriptionItems = {experience.descriptionItems}
        />);

    return (
        <div className="section" id="experience">
            <h1>experience</h1>
            {sectionItems}
        </div>
    );

}