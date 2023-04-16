import React from "react";
import DescriptionItems from "./DescriptionItems";

export default function SectionItem(props) {
    console.log(props);
    return (
        <div className="section-item">
            <div className="main-line">
                {(props.mainHeading)? 
                    <>
                        {props.link ? 
                            <a href={(props.link)}><h2 className="company-name">{props.mainHeading ? props.mainHeading : ""}</h2></a>:
                            <h2 className="company-name">{props.mainHeading ? props.mainHeading : ""}</h2>
                        }
                        <h2 className="duration">{props.duration ? props.duration : ""}</h2>
                    </> :
                    ""
                }
            </div>
            <div className="secondary-line">
                <h2 className="details">{`//${props.secondaryHeading ? props.secondaryHeading : ""}`}</h2>
                {(props.mainHeading)? 
                    "" :
                    <h2 className="duration">{props.duration ? props.duration : ""}</h2>
                }
            </div>
            
            <ul>
                <DescriptionItems descriptionItems={props.descriptionItems}/>
            </ul>
        </div>
    );
}