import React from 'react';
import binanceLogo from '../assets/images/logos/binance-logo.png'; // Ensure this path is correct
import coinbaseLogo from '../assets/images/logos/coinbase-logo.png'; // Ensure this path is correct
import chainlinkLogo from '../assets/images/logos/chainlink-logo.png'; // Ensure this path is correct
import polygonLogo from '../assets/images/logos/polygon-logo.png'; // Ensure this path is correct
import robinhoodLogo from '../assets/images/logos/robinhood-logo.png'; // Ensure this path is correct
import pancakeswapLogo from '../assets/images/logos/pancakeswap-logo.png'; // Ensure this path is correct


const Exchanges = () => {
    return (
        <section className="exchanges">
            <div className="container">
                <h2>Exchanges</h2>
                <div className="exchanges-grid">
                    <div className="exchange-item">
                        <img src={binanceLogo} alt="Binance" />
                        <span className="tooltip">Binance</span>
                    </div>
                    <div className="exchange-item">
                        <img src={coinbaseLogo} alt="Coinbase" />
                        <span className="tooltip">Coinbase</span>
                    </div>
                    <div className="exchange-item">
                        <img src={chainlinkLogo} alt="Chainlink" />
                        <span className="tooltip">Chainlink</span>
                    </div>
                    <div className="exchange-item">
                        <img src={polygonLogo} alt="Polygon" />
                        <span className="tooltip">Polygon</span>
                    </div>
                    <div className="exchange-item">
                        <img src={robinhoodLogo} alt="Robinhood" />
                        <span className="tooltip">Robinhood</span>
                    </div>
                    <div className="exchange-item">
                        <img src={pancakeswapLogo} alt="Pancakeswap" />
                        <span className="tooltip">Pancakeswap</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exchanges;