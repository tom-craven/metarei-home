import React from "react";
import RoadMapContent from "./RoadMapContent";
import Hands from "../../Global/Hands";
import SocialBar from "../../Global/SocialBar";
import UniverseContact from "../../Universe/UniverseContact";

const RoadMap = () => {

    return <div className="Declaration w3-monospace w3-padding-large" id="Declaration">
        <Hands/>
        <SocialBar/>
        <header className="w3-container w3-padding-32 w3-center" id="home">
            {/*<h1 className="w3-jumbo w3-monospace">{LAB_NAME}</h1>*/}
            <img alt="our declaration" src={`${process.env.PUBLIC_URL}/Metarei_Logo_4K_Transparent_Neon.png`}
                 className="w3-image"/>
        </header>
        <RoadMapContent/>
        <br/>
        <UniverseContact/>
    </div>
};

export default RoadMap;
