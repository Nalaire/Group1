import React from "react";
export default function Person(props) {
    const containerS = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "55px",
        fontSize: "1.5rem",
    };

    const nameS = {
        fontWeight: "bold",
        textAlign: "center",
    };

    return (
        <div style={containerS}>
            <p className="person" style={nameS}>
                {props.name}
            </p>
            <img
                src={props.image}
                className="img-fluid"
                alt={props.name}
                style={{ width: "40%", height: "auto" }}
            />
            <p className="person">{props.info}</p>
            <p className="person">{props.info2}</p>
        </div>
    );
}
