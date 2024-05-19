import React from "react";

export default function RestoList(props) {
    var adr = props.adress;
    if (!(typeof props.adress === "undefined")) {
        if (props.adress.length > 0) {
            adr = "The Address: " + props.adress;
        }
    }
    return (
        <div className="listItem">
            <p>{props.place}</p>
            <p>{adr}</p>
        </div>
    );
}
