import React from 'react';


const Tokenomics = () => {
    return (
        <section className="tokenomics">
            <div className="container">
                <h2>Tokenomics</h2>
                <div className="tokenomics-grid">
                    <div className="tokenomics-item">
                        <h3>Total Supply</h3>
                        <p>1,000,000,000 $MITH</p>
                    </div>
                    <div className="tokenomics-item">
                        <h3>Distribution</h3>
                        <p> 50% Public Sale, 20% Team, 15% Ecosystem, 15% Reserve</p>
                        <div className="distribution-bar">
                            <div className="public-sale" style={{ width: '50%' }}></div>
                            <div className="team" style={{ width: '20%' }}></div>
                            <div className="ecosystem" style={{ width: '15%' }}></div>
                            <div className="reserve" style={{ width: '15%' }}></div>
                        </div>
                    </div>
                    <div className="tokenomics-item">
                        <h3>Utility</h3>
                        <p>Trade, Staking, Governance, and Exclusive Access</p>
                    </div>
                    <div className="tokenomics-item">
                        <h3>Blockchain</h3>
                        <p>Built on Solana (SPL Token)</p>
                    </div>
                    <div className="tokenomics-item">
                        <h3>Transaction Speed</h3>
                        <p>65,000 transactions per second</p>
                    </div>
                    <div className="tokenomics-item">
                        <h3>Low Fees</h3>
                        <p>Average transaction fee: $0.00025</p>
                    </div>
                    <div className="tokenomics-item">
                        <h3>Wallet Support</h3>
                        <p>Compatible with Phantom, Solflare, and Trust Wallet</p>
                    </div>
                    <div className="tokenomics-item">
                        <h3>Vesting</h3>
                        <p>Team tokens locked for 12 months</p>
                    </div>
                    <div className="tokenomics-item">
                        <h3>Burn Mechanism</h3>
                        <p>2% of every transaction is burned</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;