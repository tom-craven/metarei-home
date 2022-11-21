import SocialBar from "../../Global/SocialBar";
import {
    FRACTION_SYMBOL,
    HOST_CHAIN_LOGO,
    HOVER_COLOUR_2,
    LAB_GIT_URL,
    TB,
    TOKEN_EXPLORER_URL,
    TOKEN_NAME,
    TOKEN_SYMBOL
} from "../../Constants";
import React from "react";
import Hands from "../../Global/Hands";
import Tokenomics from "./Tokenomics";
import UniverseContact from "../../Universe/UniverseContact";

const Declaration = () => {

    return <div className="Declaration w3-monospace w3-padding-large" id="Declaration">
        <Hands/>
        <SocialBar/>
        <header className="w3-container w3-padding-32 w3-center" id="home">
            {/*<h1 className="w3-jumbo w3-monospace">{LAB_NAME}</h1>*/}
            <img alt="our declaration" src={`${process.env.PUBLIC_URL}/Metarei_Logo_4K_Transparent_Neon.png`}
                 className="w3-image"

            />
        </header>

        <div className="w3-content w3-justify w3-text-light-grey w3-padding-64" id="d-content">
            <br/>
            <br/>
            <h6 className="w3-text-light-grey">Creator of Metaverse Artifacts<br/></h6>
            <h6> Timeless beauty, Indestructible nature and Powerful functionality.</h6>
            <hr style={{width: "200px"}} className="w3-opacity"/>

            <p>How do you imagine people will interact with web applications in the Metaverse?</p>
            <p>At Metarei we believe the user interface (UI) is object oriented and the user experience (UX)
                is what
                we see and the story we tell. The artifacts we will create are story driven applications;
                interactive as objects in a virtual 3d space.
            </p>
            <p>
                By investing in design and lore building we aim to enhance the user experience of web 3.0
                applications and encourage our users to explore the metaverse in a creative and intuitive
                way.<br/>
            </p>
            <p>
                Metarei are creators of a new standard, a network artifacts stored on censorship resistant NFTs that can
                be rendered in
                Unreal engine on mobile, VR and gaming platforms.
            </p>
            <p>
                These artifacts are not owned by any corporation but by you.
            </p>
            <br/>
            <br/><br/>
            <div className="w3-container">
                <img alt="me" src={`${process.env.PUBLIC_URL}/img_1.png`} className="w3-image"
                     width="1061"
                     height="653"/>
            </div>
            <br/>
            <br/><br/>
            <h2 className="w3-text-light-grey">{TOKEN_NAME} Token</h2>

            <hr style={{width: "200px"}} className="w3-opacity"/>
            <div className="w3-container">
                Hosted on&nbsp;
                <a href={"https://polygon.technology/"}>
                    <img alt="Chain Logo" src={HOST_CHAIN_LOGO} className="w3-image"
                         width="120"
                         height="100"/></a> Binance Smart Chain
                <br/>
            </div>
            <p>
                The {TOKEN_NAME} {TOKEN_SYMBOL} token powers the artifacts, by holding it you will be able to
                use the functions developed by our team. A {TOKEN_SYMBOL} fraction is called {FRACTION_SYMBOL}, there
                are 10^8 {FRACTION_SYMBOL} in an {TOKEN_SYMBOL}.<br/><br/>
            </p>

            <table className="w3-table">
                <tbody>
                <tr>
                    <th style={{height: "28px", width: "20%"}}>Requirement</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Secure</td>
                    <td>Metarei Token is an implementation of Open Zeppelin ERC-20 standard. Non standard changes to the
                        token
                        contract follow concise check-effects-interactions pattern. Great care has been taken to enhance
                        the token sale contract security with safe math
                        calculations and reentry protection against attackers.
                    </td>
                </tr>
                <tr>
                    <td>Hard Asset</td>

                    <td>Hard asset qualities were a primary driver during the development of this token. This is
                        achieved by
                        capping the supply like Bitcoin. Rei has been fixed at twenty one million by following the Open
                        Zeppelin
                        Standard <a
                            href="https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Capped">ERC-20-Capped.</a>
                    </td>
                </tr>
                <tr>
                    <td>Halving</td>
                    <td>The halving release schedule follows the same formula as Bitcoin which rewards early adopters
                        while allowing a percentage of supply to be released as the project matures.
                    </td>
                </tr>
                <tr>
                    <td>Burnable</td>
                    <td>The asset has a {TB * 100}% transaction burn that is recycled into the yearly halving, this was
                        achieved the Open Zeppelin Standard.<a
                            href="https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Burnable">ERC-20
                            Burnable</a>
                        <br/>
                    </td>
                </tr>
                </tbody>
            </table>
            <br/>

            <div className="w3-row">
                <div className="w3-half w3-container">
                    <a href={TOKEN_EXPLORER_URL}
                       className={"w3-button w3-light-grey w3-padding-large w3-section " + HOVER_COLOUR_2}>
                        <i className="fas fa-search"/> Official Contract
                    </a>
                </div>
                <div className="w3-half w3-container">
                    <a href={LAB_GIT_URL}
                       className={"w3-button w3-light-grey w3-padding-large w3-section " + HOVER_COLOUR_2}>
                        <i className="fab fa-bitbucket-square"/> Source code
                    </a>
                </div>
            </div>
        </div>
        <Tokenomics/>

        <br/>
        <UniverseContact/>
    </div>;
};

export default Declaration;

