import React from "react";

export default function ResponsibilitiesItems(props) {
    return props.descriptionItems.map(descriptionItem => <li key={descriptionItem}>-{descriptionItem}</li>);
}