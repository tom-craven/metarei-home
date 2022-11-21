import React from "react";
import {Link} from "react-router-dom";
import {HOVER_COLOUR_2} from "../Constants";

export default class MetaverseNavBottom extends React.Component {

    render() {
        return (
            <div>
                <div
                    className={"w3-black w3-top w3-hide-large w3-hide-medium w3-dropdown-hover w3-opacity w3-hover-opacity-off"}>
                    <button className={"w3-button"}><i className="fa fa-bars"/></button>
                    <div className={"w3-dropdown-content w3-bar-block w3-border w3-black"}>
                        <nav
                            className={"w3-bar-item w3-button w3-mobile"}>
                            <Link to="/"><i className="fa fa-home"/>Home</Link>
                        </nav>
                        <nav
                            className={"w3-bar-item w3-button w3-mobile"}>
                            <Link to="/metaverse/declaration"><i className="fas fa-scroll"/>Declaration</Link>
                        </nav>
                        <nav
                            className={"w3-bar-item w3-button w3-mobile"}>
                            <Link to="/metaverse/artifacts"><i className="fas fa-trophy "/>Artifacts</Link>
                        </nav>
                        <nav
                            className={"w3-bar-item w3-button w3-mobile"}
                        >
                            <Link to="/metaverse/rei">
                                <i className="fas fa-cube"/>
                                Rei Token
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="w3-bottom w3-hide-small w3-bar w3-border" style={{color: 'transparent'}}>
                    <nav
                        className={"w3-bar-item w3-button w3-border-right w3-mobile w3-text-white " + HOVER_COLOUR_2}
                        style={{width: '25%'}}>
                        <Link to="/"><i className="fa fa-home"/>Home</Link>
                    </nav>
                    <nav
                        className={"w3-bar-item w3-button w3-border-right w3-mobile w3-text-white " + HOVER_COLOUR_2}
                        style={{width: '25%'}}>
                        <Link to="/metaverse/declaration"><i className="fas fa-scroll"/>Declaration</Link>
                    </nav>
                    <nav
                        className={"w3-bar-item w3-button w3-border-right w3-mobile w3-text-white " + HOVER_COLOUR_2}
                        style={{width: '25%'}}>
                        <Link to="/metaverse/roadmap"><i className="fas fa-road"/>RoadMap</Link>
                    </nav>
                    <nav
                        className={"w3-bar-item w3-button w3-border-right w3-mobile w3-text-white " + HOVER_COLOUR_2}
                        style={{width: '25%'}}>
                        <Link to="/metaverse/rei">
                            <i className="fas fa-cube"/>
                            Rei
                        </Link>
                    </nav>
                </div>
            </div>

        );
    }
}

