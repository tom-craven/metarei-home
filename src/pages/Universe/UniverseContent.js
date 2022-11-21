import React from "react";
import UniverseContact from "./UniverseContact";
import {HOVER_COLOUR_2, TOKEN_NAME} from "../Constants";

export default class UniverseContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {web3: null, accounts: null, contract: null};
    }

    render() {
        return (
            <div className="w3-padding-large w3-monospace" id="team">
                <div className="w3-container">
                    <header style={{color: 'transparent'}} className="w3-container w3-padding-32 w3-center">
                        <h1 className="w3-jumbo  w3-monospace"><span className="w3-hide-small w3-text-white">Hi, I'm Tom.</span>
                        </h1>
                        <p>BSc Software Engineer</p>
                        <img alt="me" src={`${process.env.PUBLIC_URL}/tc2.jpg`} className="w3-image w3-circle"
                             width="550"
                             height="640"/>
                    </header>
                    <div className="w3-content w3-justify w3-padding-64">
                        <div className="w3-container">
                            <div className="w3-half">
                                <h2 className="w3-text-light-grey">Thomas R Craven</h2>
                            </div>
                            <div className="w3-half">
                                <div
                                    className="w3-content w3-justify w3-padding-large w3-text-grey w3-section w3-xlarge">
                                    <a href="https://www.facebook.com/tomcrav3n"><i
                                        className="fab fa-facebook w3-hover-opacity w3-padding-small"/></a>
                                    <a href="https://twitter.com/Cravent6"><i
                                        className="fab fa-twitter w3-hover-opacity w3-padding-small"/></a>
                                    <a href="https://uk.linkedin.com/in/thomas-craven-1066"><i
                                        className="fab fa-linkedin w3-hover-opacity w3-padding-small"/></a>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <h4 className="w3-text-light-grey">Web 3.0 Lab</h4>
                        <hr style={{width: "200px"}} className="w3-opacity"/>
                        <p>
                            I'm the founder of {TOKEN_NAME} and a Full-Stack Software Engineer with 6+ years
                            experience across Finance, KYC, Medical Research, Publishing and
                            Logistics industries. I have Exceptional skills in web technology, application design and
                            programming. I first became interested in blockchain ~2018 and was lead of a community here
                            in Glasgow for two years. Since then I continued to learn in my spare time and I look
                            forward
                            making my contributions to this exiting industry, lets go!
                            <br/>
                        </p>
                        <h3 className="w3-padding-16">Eduction</h3>
                        <h6 className="w3-padding-8">Oxford Brookes University, Oxford</h6>
                        <b>
                            <b>BSc Software Engineering</b> Upper 2:1 (Hons) (Placement Year)(Sept 2012 – June 2017)
                        </b>
                        <p>Advanced Web Technology, Algorithms & Advanced Data Structures, Software Analysis
                            & Testing, Software Project Management, The Human-Computer Interface.</p>
                        <b>
                            <b>Computing Foundation Degree</b> (Sept 2011 – June 2012)
                        </b>
                        <h3 className="w3-padding-16">Career</h3>
                        <h6 className="w3-padding-8">Sainsbury's PLC</h6>
                        <p>Senior Kafka Engineer (Contractor), TU / Argos Order Placement</p>
                        <h6 className="w3-padding-8">Royal Bank of Scotland - Natwest Group</h6>
                        <p>Senior Kafka Engineer (Contractor), Streaming Platform</p>
                        <h6 className="w3-padding-8">JP Morgan Chase Bank</h6>
                        <p>Senior Associate Software Engineer, Everest Data Lake </p>
                        <h6 className="w3-padding-8">Northrow</h6>
                        <p>Software Engineer, KYC Platform</p>
                        <h3 className="w3-padding-16 ">My Skills</h3>
                        <p className="w3-wide">Backend</p>
                        <div className="w3-white">
                            <div className="w3-cyan" style={{height: "28px", width: "90%"}}/>
                        </div>
                        <p className="w3-wide">Frontend</p>
                        <div className="w3-white">
                            <div className="w3-cyan" style={{height: "28px", width: "70%"}}/>
                        </div>
                        <p className="w3-wide">Infra</p>
                        <div className="w3-white">
                            <div className="w3-cyan" style={{height: "28px", width: "75%"}}/>
                        </div>
                        <br/>

                        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
                            <div className="w3-third w3-section">
                                <span className="w3-xlarge">6+</span><br/>
                                Years Experience
                            </div>
                            <div className="w3-third w3-section">
                                <span className="w3-xlarge">70+</span><br/>
                                Skills and Tech
                            </div>
                            <div className="w3-third w3-section">
                                <span className="w3-xlarge">5+</span><br/>
                                Industries
                            </div>
                        </div>
                        <div className="w3-container">
                            <a id="resume-tom"
                               href={`${process.env.PUBLIC_URL}/thomas-craven.pdf`}
                               className={"w3-button w3-light-grey w3-padding-large w3-section " + HOVER_COLOUR_2}>
                                <i className="fa fa-download"/> Download Resume
                            </a>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>


                <div className="w3-container">
                    <header style={{color: 'transparent'}} className="w3-container w3-padding-32 w3-center" id="design">
                        <h1 className="w3-jumbo  w3-monospace"><span className="w3-hide-small w3-text-white">...</span>
                        </h1>
                        <img alt="me" src={`${process.env.PUBLIC_URL}/img_4.png`} className="w3-image w3-circle"
                             width="200"
                        />
                    </header>
                    <div className="w3-content w3-justify w3-padding-64">
                        <div className="w3-container">
                            <div className="w3-half">
                                <h2>Design Studio lead</h2>
                            </div>
                        </div>
                        <hr style={{width: "200px"}} className="w3-opacity"/>
                        <p>
                            Desire to learn about new technologies like VR/AR and web 3.0
                            Ability to work with lore office to create art for lore and marketing
                            Ability to work with web3 lab to design 3D assets that can be consumed and rendered by our
                            game engine.
                            Desire to learn about web 3.0
                            ...
                        </p>
                        <h3 className="w3-padding-16">Eduction</h3>
                        <h6 className="w3-padding-8">...</h6>
                        <h3 className="w3-padding-16">Career</h3>
                        <h6 className="w3-padding-8">...</h6>
                        <br/>
                    </div>
                    <br/>
                    <br/>
                </div>
                <div className="w3-container" id="mobile-profile">
                    <header style={{color: 'transparent'}} className="w3-container w3-padding-32 w3-center" id="mobile">
                        <h1 className="w3-jumbo  w3-monospace"><span className="w3-hide-small">...</span>
                        </h1>
                        <img alt="me" src={`${process.env.PUBLIC_URL}/img_4.png`} className="w3-image w3-circle"
                             width="200"
                        />
                    </header>
                    <div className="w3-content w3-justify w3-padding-64">
                        <div className="w3-container">
                            <div className="w3-half">
                                <h2>Mobile / VR Games Developer</h2>
                            </div>
                        </div>
                        <hr style={{width: "200px"}} className="w3-opacity"/>
                        <p>
                            Development and continued maintenance of Metarei game engine.
                            Support the development of Metarei mobile applications.
                            Experience with or desire to learn VR / AR technologies.
                            Experience with or desire to learn about consuming data from decentralised networks.
                            Interest in the development of a cross platform data structure and mobile/VR interface for
                            Metarei artifacts.
                            Ability to create and document any new workflows.
                        </p>
                        <h3 className="w3-padding-16">Eduction</h3>
                        <h6 className="w3-padding-8">...</h6>
                        <h3 className="w3-padding-16">Career</h3>
                        <h6 className="w3-padding-8">...</h6>
                        <br/>
                    </div>
                    <br/>
                    <br/>

                </div>
                <div className="w3-container" id="lore-profile">
                    <header style={{color: 'transparent'}} className="w3-container w3-padding-32 w3-center" id="mobile">
                        <h1 className="w3-jumbo w3-monospace"><span className="w3-hide-small">...</span>
                        </h1>
                        <img alt="me" src={`${process.env.PUBLIC_URL}/img_4.png`} className="w3-image w3-circle"
                             width="200"
                        />
                    </header>
                    <div className="w3-content w3-justify w3-padding-64">
                        <div className="w3-container">
                            <div className="w3-half">
                                <h2>Principle, Lore Office</h2>
                            </div>
                        </div>
                        <hr style={{width: "200px"}} className="w3-opacity"/>
                        <p>
                            Ability to write rich background stories about the Metarei brand and the artifacts we
                            create.
                            Familiar with use of 2D art in story telling.
                            Ability to write texts that guide the users journey as they use an artefact.
                            Ability to work with an independent audio engineer to incorporate audio into the experience.
                            Desire to support marketing in the projection of Metarei brand.
                        </p>
                        <h3 className="w3-padding-16">Eduction</h3>
                        <h6 className="w3-padding-8">...</h6>
                        <h3 className="w3-padding-16">Career</h3>
                        <h6 className="w3-padding-8">...</h6>
                        <br/>
                    </div>
                    <br/>
                    <br/>

                </div>
                <UniverseContact/>
                <br/>
                <br/>
            </div>);
    }
}

