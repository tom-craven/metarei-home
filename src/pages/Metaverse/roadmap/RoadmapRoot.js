import React from "react";
import MetaverseNavBottom from "../MetaverseNavBottom";
import RoadMap from "./RoadMap";

export default class RoadmapRoot extends React.Component {

    render() {
        return (
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/landing_page_plain.png)`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center'
            }}>
                <RoadMap/>
                <MetaverseNavBottom/>
            </div>
        );
    }
}

