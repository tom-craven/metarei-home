import React from "react";
import Declaration from "./Declaration";
import MetaverseNavBottom from "../MetaverseNavBottom";

export default class DeclarationRoot extends React.Component {

    render() {
        return (
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/landing_page_plain.png)`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center'
            }}>
                <Declaration/>
                <MetaverseNavBottom/>
            </div>
        );
    }
}

