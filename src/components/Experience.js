import React from "react";
import SectionItem from "./SectionItem";

export default function Experience() {
    return (
        <div className="section">
            <h1>experience</h1>
            <SectionItem 
                mainHeading={"the lasallian"} 
                duration={"10/2022 - Present"}
                secondaryHeading={"front-end developer"}
                descriptionItems={["help","im","a fish"]}
            />
            <SectionItem 
                mainHeading={"willis towers watson"} 
                duration={"04/2022 - 06/2022"}
                secondaryHeading={"full stack developer intern"}
                descriptionItems={["quick","brown","fox"]}
            />
        </div>
    );

}