import React from "react";

function Hands() {
    return <div>
        <img style={{zIndex: '1'}} alt="" src={`${process.env.PUBLIC_URL}/hand_palm_faceup.png`}
             className="w3-display-container w3-display-left w3-image w3-hide-medium w3-hide-small" width="350"/>
        <img alt="our declaration" src={`${process.env.PUBLIC_URL}/hand_palm_facedown.png`}
             className="w3-display-container w3-image w3-display-right w3-hide-medium w3-hide-small"
             width="400"
        />
    </div>
}

export default Hands
