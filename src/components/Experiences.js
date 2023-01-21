import React from "react";
import ExperiencesItem from "./ExperiencesItem";

export default function Experiences() {
    return (
        <div className="experiences">
            <h1>experiences</h1>
            <ExperiencesItem 
                companyName={"the lasallian"} 
                duration={"10/2022 - Present"}
                role={"front-end developer"}
                responsibilities={["help","im","a fish"]}
            />

            <ExperiencesItem 
                companyName={"willis towers watson"} 
                duration={"04/2022 - 09/2022"}
                role={"full stack developer"}
                responsibilities={["help","im","a fish"]}
            />
        </div>
    );

}