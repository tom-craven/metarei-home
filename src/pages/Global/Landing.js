import React from "react";
import SocialBar from "./SocialBar";
import Hands from "./Hands";
import RealmNav from "./RealmNav";
import Icon from "./Icon";

const Landing = () => {

    return <div
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/landing_page_plain.png)`
        }}
        className="Landing background w3-monospace" id="Landing">
        <Hands/>
        <SocialBar/>
        <Icon/>
        <RealmNav/>
    </div>;
};

export default Landing;

