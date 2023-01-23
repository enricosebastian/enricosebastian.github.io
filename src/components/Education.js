import React from "react";
import SectionItem from "./SectionItem";
import { education } from "../data/education";

export default function Education() {
    const sectionItems = education.map(e => 
        <SectionItem 
            mainHeading = {e.mainHeading}
            duration = {e.duration}
            secondaryHeading = {e.secondaryHeading}
            descriptionItems = {e.descriptionItems}
        />);

    return (
        <div className="section" id="education">
            <h1>education</h1>
            {sectionItems}
        </div>
    );
}