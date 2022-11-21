import React from "react";
import {LAB_LOCATION, LAB_MAIL, LAB_TEL} from "../Constants";

export default class UniverseContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {web3: null, accounts: null, contract: null};
    }

    render() {
        return (
            <div id="contact">
                <div className="w3-content w3-justify w3-padding-large w3-section" id="contact">
                    <h3>Contact Us</h3>
                    <p>
                        Metarei Limited
                    </p>
                    <hr style={{width: "200px"}} className="w3-opacity"/>
                    <div className="w3-section">

                        <p><i
                            className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"/> {LAB_LOCATION}
                        </p>
                        <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"/> Phone: {LAB_TEL}
                        </p>
                        <p><i
                            className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"/> Email: {LAB_MAIL}
                        </p>
                        <p>
                            &nbsp;<i className="far fa-file-alt w3-xxlarge w3-margin-right"/>&nbsp;&nbsp;Company no.
                            718186
                        </p>
                    </div>
                    <br/>
                    <p>Let's get in touch!</p>
                </div>
            </div>
        );
    }
}

