import React from "react";
import {Link} from "react-router-dom";
import {HOVER_COLOUR_2} from "../Constants";

export default class UniverseNavBottom extends React.Component {

    render() {
        return (
            <div className="w3-bottom w3-monospace">
                <div
                    className={"w3-black w3-top w3-hide-large w3-hide-medium w3-dropdown-hover w3-opacity w3-hover-opacity-off"}>
                    <button className={"w3-button"}><i className="fa fa-bars"/></button>
                    <div className={"w3-dropdown-content w3-bar-block w3-border w3-black"}>
                        <nav
                            className={"w3-bar-item w3-button"}
                        >
                            <Link to="/"><i className="fa fa-home"/>Home</Link>
                        </nav>
                        <nav
                            className={"w3-bar-item w3-buttons"}
                        >
                            <a href="#team"><i className="fa fa-user"/>Team</a>&nbsp;
                        </nav>
                        <nav
                            className={"w3-bar-item w3-button"}
                        >
                            <a href="#contact"><i className="fa fa-envelope"/>Contact</a>
                        </nav>
                    </div>
                </div>
                <div className="w3-hide-small w3-bar w3-border" style={{color: 'transparent'}}>
                    <nav
                        className={"w3-third w3-bar-item w3-button w3-border-right w3-border-right w3-mobile w3-text-white w3-xlarge " + HOVER_COLOUR_2}
                        style={{width: '33%'}}>
                        <Link to="/"><i className="fa fa-home"/>Home</Link>
                    </nav>
                    <nav
                        className={"w3-bar-item w3-button w3-border-right w3-mobile w3-text-white w3-xlarge  " + HOVER_COLOUR_2}
                        style={{width: '33%'}}>
                        <a href="#team"><i className="fa fa-user"/>Team</a>&nbsp;
                    </nav>
                    <nav
                        className={"w3-bar-item w3-button w3-mobile w3-text-white w3-xlarge " + HOVER_COLOUR_2}
                        style={{width: '33%'}}>
                        <a href="#contact"><i className="fa fa-envelope"/>Contact</a>
                    </nav>
                </div>
            </div>
        );
    }
}

