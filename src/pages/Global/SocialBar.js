import React from "react";
import {FACEBOOK_HANDLE, INSTAGRAM_HANDLE, TELEGRAM_HANDLE, TWITTER_HANDLE} from "../Constants";

export default class SocialBar extends React.Component {

    render() {
        return (
            <div className="w3-bar w3-container w3-padding">
                <div className="w3-bar-item w3-rightF" style={{position: 'absolute', zIndex: '2', right: 0}}>
                    <a href={FACEBOOK_HANDLE}><i
                        className="fab fa-facebook w3-xlarge w3-hover-opacity w3-padding-small"/></a>
                    <a href={TWITTER_HANDLE}><i
                        className="fab fa-twitter w3-xlarge w3-hover-opacity w3-padding-small"/></a>
                    <a href={INSTAGRAM_HANDLE}><i
                        className="fab fa-instagram w3-xlarge w3-hover-opacity w3-padding-small"/></a>
                    <a href={TELEGRAM_HANDLE}><i
                        className="fab fa-telegram w3-xlarge w3-hover-opacity w3-padding-small"/></a>
                    <br/>
                </div>
            </div>
        );
    }
}

