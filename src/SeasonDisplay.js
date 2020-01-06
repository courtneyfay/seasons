import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Brrr, it's chilly!",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    const northernHemisphere = lat > 0;

    if (month >= 3 && month <= 8) {
        return northernHemisphere ? 'summer' : 'winter';
    } else {
        return northernHemisphere ? 'winter' : 'summer';
    }
};

// React convention says to leave the component at the bottom
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    // root element should have css class that matches the component
    // for testing and scoping additional css classes
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{ text }</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;