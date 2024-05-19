import React, { useState, useEffect } from "react";

const TimeDisplay = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <span>{time}</span>;
};

export default TimeDisplay;
