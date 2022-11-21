import React from "react";

import UniverseNavBottom from "./UniverseNavBottom";
import UniverseContent from "./UniverseContent";

export default class UniverseRoot extends React.Component {

    render() {
        return (
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/landing_page_plain.png)`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center'
            }}>
                <UniverseContent/>
                <UniverseNavBottom/>
            </div>
        );
    }
}

