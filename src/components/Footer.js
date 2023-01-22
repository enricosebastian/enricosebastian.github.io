import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
    console.log("Hi")
    return (
        <div className="footer" id="footer">
            <hr />
            <hr className="smallHr"/>
            <div className="details">
                created by enrico sebastian salazar<br/>powered by chocolates & procrastination
            </div>
        </div>
    );
}