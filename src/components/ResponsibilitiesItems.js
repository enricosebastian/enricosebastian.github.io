import React from "react";

export default function ResponsibilitiesItems(props) {
    return props.responsibilities.map(responsibility=> <li key={responsibility}>-{responsibility}</li>);
}