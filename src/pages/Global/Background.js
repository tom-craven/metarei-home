import React from "react";

const Background = () => {
    return <img style={{position: 'absolute', zIndex: '-2', left: 0}} className="w3-image w3-stretch"
                alt="our declaration"
                src={`${process.env.PUBLIC_URL}/landing_page_plain.png`}/>
};

export default Background;

