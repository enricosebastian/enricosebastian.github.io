import React from "react";
import SectionItem from "./SectionItem";

export default function Projects() {
    return (
        <div className="section" id="projects">
            <h1>projects</h1>
            <SectionItem 
                mainHeading={"cat reddit website"}
                secondaryHeading={"node.js, javascript, html/css, mongodb"}
                descriptionItems={["the quick", "brown fox", "jumps over", "the lazy dog"]}
            />
            <SectionItem 
                mainHeading={"cat reddit website"}
                secondaryHeading={"node.js, javascript, html/css, mongodb"}
                descriptionItems={["the quick", "brown fox", "jumps over", "the lazy dog"]}
            />
        </div>
    );
}