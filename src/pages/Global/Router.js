import RealmNav from "./RealmNav";
import React from "react";
import Icon from "./Icon";
import Hands from "./Hands";


const Router = () => {

    return <div className="Router w3-monospace" id="Router" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/landing_page_plain.png)`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
    }}>
        <Icon/>
        <RealmNav/>
        <Hands/>
    </div>;
};

export default Router;

