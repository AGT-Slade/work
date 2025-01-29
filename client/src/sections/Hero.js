import React from 'react';
import mithrilLogo from '../assets/images/logos/mithril_token_logo.png'; // Ensure this path is correct
import Button from '../shared/Button/Button';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-info">
                    <h2>One Token to Unite Them All</h2>
                    <div className="wrapper">
                        <div className="image-wrapper">
                            <img className="vibration-logo" src={mithrilLogo} alt="mithril-token" />
                        </div>
                        <p>Mithril is the currency of Middle-earth, built on the Solana blockchain for unparalleled speed and scalability. It is used to trade goods, forge alliances, and unlock ancient treasures. Each $MITH token is a digital representation of a shard of Mithril, imbued with the magic and history of Middle-earth.</p>
                        <a href="/"><Button size='medium' effect='rotate' variant='primary'>Join the Community</Button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;