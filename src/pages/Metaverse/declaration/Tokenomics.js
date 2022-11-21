import {
    COMMUNITY_ADDRESS,
    COMMUNITY_EXPLORER_URL,
    COMMUNITY_PERCENTAGE,
    DEV_EXPLORER_URL,
    DEV_PERCENTAGE,
    DEVELOPMENT_ADDRESS,
    LAUNCH_SALE_AMOUNT,
    LIQUIDITY_ADDRESS,
    LISTING_ADDRESS,
    LISTING_EXPLORER_URL,
    LP_EXPLORER_URL,
    MARKETING_ADDRESS,
    MARKETING_EXPLORER_URL,
    MARKETING_PERCENTAGE,
    PUBLIC_ADDRESS,
    PUBLIC_EXPLORER_URL,
    PVT_ADDRESS,
    RESERVE_ADDRESS,
    RESERVE_EXPLORER_URL,
    RESERVE_PERCENTAGE,
    SALE_LISTING_PERCENTAGE,
    SALE_LP_PERCENTAGE,
    SALE_PERCENTAGE,
    SALE_PRIVATE_PERCENTAGE,
    SALE_PUBLIC_PERCENTAGE,
    STEALTH_EXPLORER_URL,
    TB,
    TEAM_ADDRESS,
    TEAM_EXPLORER_URL,
    TEAM_PERCENTAGE,
    TOTAL_SUPPLY
} from "../../Constants";
import React from "react";

const Tokenomics = () => {

    return <div className="w3-card-4 w3-content w3-justify w3-margin-bottom">
        <br/><br/>
        <header className="w3-container w3-text-white">
            <h2>Tokenomics</h2>
            <hr style={{width: "200px"}} className="w3-opacity"/>
        </header>
        <br/>
        <div className="w3-container">

            <img alt="me" src={`${process.env.PUBLIC_URL}/img_2.png`} className="w3-image"
                 width="1061"
                 height="653"/>
        </div>
        <br/>
        <div className="w3-container">
            <br/> Projection below excludes {TB * 100}% transaction burn and ~65,000 REI launch burn <i
            className="fas fa-rocket "/><br/><br/>
        </div>
        <footer className="w3-container w3-text-white">
            <table className="w3-table">
                <tbody>
                <tr>
                    <th>Halving</th>
                    <th>Year</th>
                    <th>Tokens</th>
                    <th>Sale<br/>({SALE_PERCENTAGE}%)</th>
                    <th>Development<br/>({DEV_PERCENTAGE}%)</th>
                    <th>Reserve<br/>({RESERVE_PERCENTAGE}%)</th>
                    <th>Community<br/>({COMMUNITY_PERCENTAGE}%)</th>
                    <th>Team<br/>({TEAM_PERCENTAGE}%)</th>
                    <th>Marketing<br/>({MARKETING_PERCENTAGE}%)</th>
                </tr>
                <tr>
                    <td>Launch</td>
                    <td>2022</td>
                    <td>{TOTAL_SUPPLY / 2}</td>
                    <td>{(TOTAL_SUPPLY / 2) / 100 * SALE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 2) / 100 * DEV_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 2) / 100 * RESERVE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 2) / 100 * COMMUNITY_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 2) / 100 * TEAM_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 2) / 100 * MARKETING_PERCENTAGE}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2023</td>
                    <td>{TOTAL_SUPPLY / 4}</td>
                    <td>{(TOTAL_SUPPLY / 4) / 100 * SALE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 4) / 100 * DEV_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 4) / 100 * RESERVE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 4) / 100 * COMMUNITY_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 4) / 100 * TEAM_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 4) / 100 * MARKETING_PERCENTAGE}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2024</td>
                    <td>{TOTAL_SUPPLY / 8}</td>
                    <td>{(TOTAL_SUPPLY / 8) / 100 * SALE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 8) / 100 * DEV_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 8) / 100 * RESERVE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 8) / 100 * COMMUNITY_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 8) / 100 * TEAM_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 8) / 100 * MARKETING_PERCENTAGE}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>2025</td>
                    <td>{TOTAL_SUPPLY / 16}</td>
                    <td>{(TOTAL_SUPPLY / 16) / 100 * SALE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 16) / 100 * DEV_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 16) / 100 * RESERVE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 16) / 100 * COMMUNITY_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 16) / 100 * TEAM_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 16) / 100 * MARKETING_PERCENTAGE}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>2026</td>
                    <td>{TOTAL_SUPPLY / 32}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * SALE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * DEV_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * RESERVE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * COMMUNITY_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * TEAM_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * MARKETING_PERCENTAGE}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>2027</td>
                    <td>{TOTAL_SUPPLY / 32}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * SALE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * DEV_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * RESERVE_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * COMMUNITY_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * TEAM_PERCENTAGE}</td>
                    <td>{(TOTAL_SUPPLY / 32) / 100 * MARKETING_PERCENTAGE}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>5</td>
                    <td>{TOTAL_SUPPLY / 100 * (SALE_PERCENTAGE + DEV_PERCENTAGE + RESERVE_PERCENTAGE + COMMUNITY_PERCENTAGE + TEAM_PERCENTAGE + MARKETING_PERCENTAGE)}</td>
                    <td>{TOTAL_SUPPLY / 100 * SALE_PERCENTAGE}</td>
                    <td>{TOTAL_SUPPLY / 100 * DEV_PERCENTAGE}</td>
                    <td>{TOTAL_SUPPLY / 100 * RESERVE_PERCENTAGE}</td>
                    <td>{TOTAL_SUPPLY / 100 * COMMUNITY_PERCENTAGE}</td>
                    <td>{TOTAL_SUPPLY / 100 * TEAM_PERCENTAGE}</td>
                    <td>{TOTAL_SUPPLY / 100 * MARKETING_PERCENTAGE}</td>
                </tr>
                </tbody>
            </table>
            <br/>
            <div className="w3-row">
                <div className="w3-half w3-container">
                    <p> Launch Sale Allocation:<br/>Stealth
                        Sale {(LAUNCH_SALE_AMOUNT / 100) * SALE_PRIVATE_PERCENTAGE} ({SALE_PRIVATE_PERCENTAGE}%)<br/> Public
                        Sale {(LAUNCH_SALE_AMOUNT / 100) * SALE_PUBLIC_PERCENTAGE} ({SALE_PUBLIC_PERCENTAGE}%)<br/> Exchange
                        Listing {(LAUNCH_SALE_AMOUNT / 100) * SALE_LISTING_PERCENTAGE} ({SALE_LISTING_PERCENTAGE}%)<br/>LP {(LAUNCH_SALE_AMOUNT / 100) * SALE_LP_PERCENTAGE}
                        ({SALE_LP_PERCENTAGE}%)&nbsp;<a
                            href={"https://pancakeswap.finance/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0xe5008d0c8c7df47696a266df22da8106043af036"}><img
                            alt="Swap Logo"
                            src={`${process.env.PUBLIC_URL}/color-white.svg`}
                            className="w3-image" width={"175"}
                        /></a>
                        <br/>
                    </p>
                </div>
                <div className="w3-half w3-container">
                    <p> Development Allocation:<br/>Web3 Lab (70%) <br/>Design Studio (20%) <br/>
                        Lore Office (10%)<br/></p>
                </div>
            </div>
            <br/>
            <table className="w3-table">
                <tbody>
                <tr>
                    <th>Purpose</th>
                    <th>Account</th>
                </tr>
                <tr>
                    <td>Development</td>
                    <td><a href={DEV_EXPLORER_URL}>{DEVELOPMENT_ADDRESS}</a>
                    </td>
                </tr>
                <tr>
                    <td>Reserve</td>
                    <td><a href={RESERVE_EXPLORER_URL}>{RESERVE_ADDRESS}</a></td>
                </tr>
                <tr>
                    <td>Community</td>
                    <td><a href={COMMUNITY_EXPLORER_URL}>{COMMUNITY_ADDRESS}</a></td>
                </tr>
                <tr>
                    <td>Team</td>
                    <td><a href={TEAM_EXPLORER_URL}>{TEAM_ADDRESS}</a></td>
                </tr>
                <tr>
                    <td>Marketing</td>
                    <td><a href={MARKETING_EXPLORER_URL}>{MARKETING_ADDRESS}</a></td>
                </tr>
                <tr>
                    <td>Liquidity Pool</td>
                    <td><a href={LP_EXPLORER_URL}>{LIQUIDITY_ADDRESS}</a></td>
                </tr>
                <tr>
                    <td>Stealth Sale</td>
                    <td><a href={STEALTH_EXPLORER_URL}>{PVT_ADDRESS}</a></td>
                </tr>
                <tr>
                    <td>Public Sale</td>
                    <td><a href={PUBLIC_EXPLORER_URL}>{PUBLIC_ADDRESS}</a></td>
                </tr>
                <tr>
                    <td>Exchange Listing</td>
                    <td><a href={LISTING_EXPLORER_URL}>{LISTING_ADDRESS}</a></td>
                </tr>
                {/*<tr>*/}
                {/*    <td>Accounting</td>*/}
                {/*    <td><a href={"https://www.bscscan.com/address/" + {ACCOUNTING_ADDRESS}}>{ACCOUNTING_ADDRESS}</a>*/}
                {/*    </td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
        </footer>
    </div>;
};

export default Tokenomics;

