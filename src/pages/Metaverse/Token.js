import React from "react";
import Web3 from "web3";
import {
    COLOUR_CYAN,
    CONTRACT_ABI,
    CONTRACT_METADATA,
    HOVER_COLOUR_2,
    METAMASK_GUIDE,
    ONE_TOKEN,
    SALE_CONTRACT_ABI,
    SWAP_BASE_SYMBOL,
    TELEGRAM_HANDLE,
    TOKEN_EXPLORER_URL,
    TOKEN_SYMBOL
} from "../Constants";
import MetaverseNavBottom from "./MetaverseNavBottom";
import SocialBar from "../Global/SocialBar";
import Hands from "../Global/Hands";
import detectEthereumProvider from '@metamask/detect-provider';

export default class Token extends React.Component {

    constructor(props) {
        super(props);
        this.state = {order: {ethValue: ''}};
        this.inputEth = this.inputEth.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAcceptance = this.handleAcceptance.bind(this);
        this.closeWeb3Modal = this.closeWeb3Modal.bind(this);
        this.closeWeb3Modal = this.closeWeb3Modal.bind(this);
    }

    toMinorUnit(number) {
        return number > 0 ? number.div(Web3.utils.toBN(ONE_TOKEN)) : number;
    }

    toMajorUnit(number) {
        return number > 0 ? number.mul(Web3.utils.toBN(ONE_TOKEN)) : number;
    }

    closeWeb3Modal() {
        this.setState({displayModal: 'none'})
    }

    openWeb3Modal() {
        this.setState({displayModal: 'block'})
    }

    componentDidMount() {
        this.checkEthRdy().then();
    }

    checkEthRdy = async () => {
        const provider = await detectEthereumProvider();
        if (provider) {
            await window.ethereum.request({method: 'eth_requestAccounts'});
            let accounts = await this.extracted();
            window.ethereum.on('accountsChanged', async () => {
                accounts = await this.extracted();
                console.log("ACCOUNTS " + accounts[0])
            })
        } else {
            this.openWeb3Modal()
        }
    }

    async extracted() {
        let web3 = new Web3(window.ethereum);
        let accounts = await web3.eth.getAccounts();
        let sale = new web3.eth.Contract(SALE_CONTRACT_ABI, CONTRACT_METADATA.sale_address, {from: this.state.main_account})
        let contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_METADATA.token_address, {from: this.state.main_account})
        let res_tokenPrice = await sale.methods.tokenPrice().call();
        let mri_user_bal = await contract.methods.balanceOf(accounts[0]).call();
        let fraction_price = res_tokenPrice != null ? Web3.utils.toBN(res_tokenPrice) : 0;
        let token_price = this.toMajorUnit(fraction_price);
        let res_balanceArray = await sale.methods.balance().call();
        let res_totalSupply = await contract.methods.totalSupply().call();
        let totalSupplyFractions = Web3.utils.toBN(res_totalSupply != null ? res_totalSupply : 0);
        let totalSupply = this.toMinorUnit(totalSupplyFractions);
        let saleTokenBalance = this.toMinorUnit(Web3.utils.toBN(res_balanceArray != null ? res_balanceArray[0] : 0));
        let res_burned = await contract.methods.burnedAmount().call();
        let total_burned = Web3.utils.toBN(res_burned != null ? res_burned : 0);
        let sale_enabled = await sale.methods.isActive().call();
        total_burned = this.toMinorUnit(total_burned);
        mri_user_bal = mri_user_bal != null ? this.toMinorUnit(Web3.utils.toBN(mri_user_bal)) : Web3.utils.toBN(0);
        this.setState({
            mri_user_bal: mri_user_bal.toString(),
            web3: web3,
            main_account: accounts[0],
            sale_contract: sale,
            contract: contract,
            total_supply: totalSupply.toString(),
            fraction_price_wei: fraction_price.toString(),
            token_price_wei: token_price.toString(),
            token_price_eth: web3.utils.fromWei(token_price.toString()),
            sale_balance: saleTokenBalance.toString(),
            total_burned: total_burned.toString(),
            sale_enabled: sale_enabled != null ? sale_enabled : false
        });
        return accounts;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.buyToken(event)
    }

    buyToken(event) {
        let amountMRI = Math.floor(this.ethToMri(this.state.order.ethValue));
        let amountMRIf = this.toMajorUnit(Web3.utils.toBN(amountMRI));
        let gasEstimate = Web3.utils.toWei(this.state.order.ethValue, 'ether')
        console.log("[AMOUNT BOUGHT] " + amountMRI)
        console.log("[AMOUNT BOUGHT FR] " + amountMRIf)
        console.log("[PREDICTED GAS] " + gasEstimate)
        let saleContract = this.state.sale_contract;
        let accepted = this.state.order.acceptance;
        let config = {
            value: gasEstimate,
            from: this.state.main_account
        };
        saleContract.methods.buyToken(amountMRIf, accepted)
            .estimateGas(config)
            .then(function (gasAmount) {
                console.log("[GAS AMOUNT]" + gasAmount);
                let revisedGasAmount = Web3.utils.toBN(gasEstimate).add(Web3.utils.toBN(gasAmount)).toString()
                console.log("[COMBINED WEI]" + revisedGasAmount);
                return revisedGasAmount;
            }).then(function (revisedGasAmount) {
            let buyConfig = {
                value: revisedGasAmount,
                from: config.from
            }
            saleContract.methods.buyToken(amountMRIf, accepted)
                .send(buyConfig)
                .on("transactionHash", transactionHash => {
                    console.log("transactionHash: " + transactionHash)
                })
                .on("confirmation", confirmationNr => {
                    if (confirmationNr) {
                        console.log("confirmationNumber: " + confirmationNr)
                    }
                })
                .on("receipt ", receipt => {
                    console.log("receipt: " + JSON.stringify(receipt));
                    alert("done")
                })
                .catch(err => {
                    console.log("error: " + JSON.stringify(err.message));
                })
        })
            .catch(function (error) {
                console.log("[GAS ERROR]" + error);
            });
    }

    ethToMri(amount) {
        let weiValue = Web3.utils.toWei(amount, "ether");
        return weiValue / this.state.token_price_wei;
    }

    inputEth(event) {
        let amount = this.ethToMri(event.target.value);
        this.setState({
                order: {
                    acceptance: this.state.order.acceptance,
                    ethValue: event.target.value,
                    tokenValue: amount.toFixed(),
                }
            }
        );
    }

    handleAcceptance(event) {
        this.setState({
            order: {
                acceptance: event.target.checked,
                ethValue: this.state.order.ethValue,
                tokenValue: this.state.order.tokenValue,

            }
        })
    }

    SaleStatus() {

        if (this.state.sale_enabled === true) {
            return <form onSubmit={this.handleSubmit} className="w3-container w3-card-4">
                Estimate: {this.state.order.tokenValue} {TOKEN_SYMBOL} ({(this.state.order.tokenValue != null ? this.state.order.tokenValue / 160 : 0).toFixed(2)} burned)
                <br/>
                <p>
                    <label className="w3-text-grey">Amount {SWAP_BASE_SYMBOL}</label>
                    <input value={this.state.order.ethValue} onChange={this.inputEth}
                           className="w3-input w3-border" type="text" required={true}/>
                </p>
                <br/>
                <div className="w3-row">
                    <div className="w3-half w3-container">
                        <input value={this.state.order.acceptance} onChange={this.handleAcceptance}
                               className="w3-check"
                               type="checkbox" required={true}/>
                        <label>Agree to T&C's</label>
                    </div>
                    <div className="w3-half w3-container">
                        <a href={`${process.env.PUBLIC_URL}/MetaRei Disclaimer.pdf`}
                           className={"w3-button w3-light-grey " + HOVER_COLOUR_2}>
                            <i className="fa fa-download"/> Terms and Conditions
                        </a>
                    </div>
                </div>
                <p>
                    <input value="Submit" type="submit" className={"w3-btn w3-padding " + COLOUR_CYAN}
                           style={{width: "120px"}}/>
                </p>
            </form>;
        }
        return <h1>Come join the community
            <a href={TELEGRAM_HANDLE}>
                <i className="fab fa-telegram w3-xlarge w3-hover-opacity w3-padding-small"/>
                Telegram</a> to learn more!</h1>;
    }

    render() {
        return (
            <div className="background" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/landing_page_plain.png)`
            }}>
                <Hands/>
                <SocialBar/>
                <div className="w3-container w3-display-container w3-display-middle w3-card-4">
                    <div className="w3-bar w3-border w3-text-white" style={{color: 'transparent'}}>
                        <div className="w3-container w3-padding-16">
                            <header className="w3-container w3-center">
                                <img alt="" src={`${process.env.PUBLIC_URL}/Metarei_Logo_4K_Transparent_Neon.png`}
                                     width="200"/>
                            </header>
                            <div
                                className={"w3-panel w3-pale-green w3-bottombar w3-border-cyan w3-border " + COLOUR_CYAN}>
                                <p>{TOKEN_SYMBOL} Contract: <a
                                    href={TOKEN_EXPLORER_URL}>{CONTRACT_METADATA.token_address}</a>
                                </p>
                                <p>Total Circulating supply: {this.state.total_supply}</p>
                                <p>Total Burned supply: {this.state.total_burned}</p>
                                <p>Public Sale Supply: {this.state.sale_balance} {TOKEN_SYMBOL} ({
                                    (this.state.sale_balance * this.state.token_price_eth).toFixed(1)
                                } {SWAP_BASE_SYMBOL}) </p>
                                <p>{TOKEN_SYMBOL} Value: {this.state.token_price_eth} {SWAP_BASE_SYMBOL}</p>
                            </div>
                            <div className="w3-panel w3-pale-green w3-bottombar w3-border-cyan w3-border">
                                <p>Wallet: {this.state.main_account} </p>
                                <p>Balance: {this.state.mri_user_bal} {TOKEN_SYMBOL} </p>
                            </div>
                            <div className="w3-container">
                                {this.SaleStatus()}
                            </div>
                        </div>
                    </div>
                </div>
                <MetaverseNavBottom/>
                <div id="id01" className="w3-modal" style={{display: this.state.displayModal}}>
                    <div className="w3-modal-content">

                        <header className="w3-container w3-cyan">
      <span onClick={this.closeWeb3Modal}
            className="w3-button w3-hover-white  w3-display-topright w3-xlarge">&times;</span>
                            <h2>Oops, we didn't find any Web3 in your browser..</h2>
                        </header>

                        <div className="w3-container w3-white">
                            <p>If you are new to Web 3.0 you can get started with this guide to <a
                                href={METAMASK_GUIDE}>Metamask
                                Wallet</a>
                            </p>
                            {/*<p>When your ready connect to the <a*/}
                            {/*    href={CHAIN_GUIDE_URL}>Polygon*/}
                            {/*    Network</a>*/}
                            {/*</p>*/}
                        </div>
                        <footer className="w3-container w3-black">
                            <p>Join the community<a href={TELEGRAM_HANDLE}>
                                <i className="fab fa-telegram w3-xlarge w3-hover-opacity w3-padding-small"/>
                                Telegram</a> to get some help.</p>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

