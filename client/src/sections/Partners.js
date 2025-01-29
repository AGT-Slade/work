import React from 'react';
import solanaLogo from '../assets/images/logos/solana-logo.png'; // Ensure this path is correct
import serumLogo from '../assets/images/logos/serum-logo.png'; // Ensure this path is correct
import raydiumLogo from '../assets/images/logos/raydium-logo.png'; // Ensure this path is correct
import magicEdenLogo from '../assets/images/logos/magic-eden-logo.png'; // Ensure this path is correct
import stepnLogo from '../assets/images/logos/stepn-logo.png'; // Ensure this path is correct

const Partners = () => {
    return (
        <section className="partners">
            <div className="container">
                <h2>Partners</h2>
                <div className="partners-grid">
                    <img src={solanaLogo} alt="Solana" />
                    <img src={serumLogo} alt="Serum" />
                    <img src={raydiumLogo} alt="Raydium" />
                    <img src={magicEdenLogo} alt="Magic Eden" />
                    <img src={stepnLogo} alt="StepN" />
                </div>
            </div>
        </section>
    );
};

export default Partners;