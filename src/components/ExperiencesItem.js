import React from "react";
import ResponsibilitiesItems from "./ResponsibilitiesItems";

export default function ExperiencesItem(props) {
    return (
        <div className="experiences-item">
            <div className="main-line">
                <h2 className="company-name">{props.companyName ? props.companyName : "no name"}</h2>
                <h2 className="duration">{props.duration}</h2>
            </div>
            <h2 className="role">{`//${props.role}`}</h2>
            <ul>
                <ResponsibilitiesItems responsibilities={props.responsibilities}/>
            </ul>
        </div>
    );
}