import React from "react";
import SectionItem from "./SectionItem";

export default function Education() {
    return (
        <div className="section" id="education">
            <h1>education</h1>
            <SectionItem 
                mainHeading={"de la salle university - manila"} 
                duration={"Expected 2023"}
                secondaryHeading={"electronics engineer, minor in software"}
                descriptionItems={["cpga: 3.03/4.00","courses: software, mobile, intelligent systems"]}
            />
        </div>
    );
}