import {Link} from "react-router-dom";
import React from "react";
import {HOVER_COLOUR_2} from "../Constants";

function RealmNav() {
    return <div>
        <div className="w3-black w3-top w3-hide-large w3-hide-medium">
            <div className="w3-bar w3-opacity w3-hover-opacity-off w3-center">
                <nav className={"w3-bar-item w3-button w3-mobile w3-black"}
                     style={{width: '50%'}}>
                    <Link to="universe"><i className="fas fa-globe-europe"/>Universe</Link>
                </nav>
                <nav className={"w3-bar-item w3-button w3-mobile"}
                     style={{width: '50%'}}>
                    <Link to="/metaverse/declaration"><i className="fas fa-globe"/>Metaverse</Link>
                </nav>
            </div>
        </div>
        <div className="w3-bottom w3-hide-small w3-bar w3-monospace w3-border" style={{color: 'transparent'}}>
            <nav
                className={"w3-hide-small w3-bar-item w3-button w3-border-right w3-mobile w3-black w3-xlarge " + HOVER_COLOUR_2}
                style={{width: '50%'}}>
                <Link to="universe"><i className="fas fa-globe-europe"/>Universe</Link>
            </nav>
            <nav className={"w3-bar-item w3-button w3-border-right w3-mobile w3-text-white w3-xlarge " + HOVER_COLOUR_2}
                 style={{width: '50%'}}>
                <Link to="/metaverse/declaration"><i className="fas fa-globe"/>Metaverse</Link>
            </nav>
        </div>
    </div>

}

export default RealmNav
