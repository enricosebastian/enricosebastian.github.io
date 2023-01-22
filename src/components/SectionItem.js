import React from "react";
import DescriptionItems from "./DescriptionItems";

export default function SectionItem(props) {
    return (
        <div className="section-item">
            <div className="main-line">
                <h2 className="company-name">{props.mainHeading ? props.mainHeading : ""}</h2>
                <h2 className="duration">{props.duration ? props.duration : ""}</h2>
            </div>
            <h2 className="details">{`//${props.secondaryHeading ? props.secondaryHeading : ""}`}</h2>
            <ul>
                <DescriptionItems descriptionItems={props.descriptionItems}/>
            </ul>
        </div>
    );
}