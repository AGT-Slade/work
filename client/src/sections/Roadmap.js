import React from 'react';
import mithrilLogo from '../assets/images/logos/mithril_token_logo.png'; // Ensure this path is correct


const Roadmap = () => {
    return (
        <section className="roadmap">
            <div className="container">
                <h2>Roadmap</h2>
                    <div className="roadmap-timeline">
                    <div className="timeline-item">
                        <img src={mithrilLogo} alt="Launch Icon" className="timeline-icon" />
                        <h3>Q1 2024</h3>
                        <p>Token Launch & Initial Exchange Listings</p>
                    </div>
                    <div className="timeline-item">
                        <img src={mithrilLogo} alt="Launch Icon" className="timeline-icon" />
                        <h3>Q2 2024</h3>
                        <p>Integration with Phantom Wallet and listing on Raydium</p>
                    </div>
                    <div className="timeline-item">
                        <img src={mithrilLogo} alt="Launch Icon" className="timeline-icon" />
                        <h3>Q3 2024</h3>
                        <p>Launch staking platform on Solana</p>
                    </div>
                    <div className="timeline-item">
                        <img src={mithrilLogo} alt="Launch Icon" className="timeline-icon" />
                        <h3>Q4 2024</h3>
                        <p>Governance Features & Ecosystem Expansion</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;