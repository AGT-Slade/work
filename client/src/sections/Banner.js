// src/components/Banner.js
import React from 'react';

const Banner = () => {
    return (
        <div className="banner">
            <div className="marquee-container">
                <div className="scrolling-container">
                    <div className="scrolling-text">**Subscribe to our newsletter &emsp; Our ICO will launch this year**</div>
                    <div className="scrolling-text">*Subscribe this year**</div>
                </div>
            </div>
            <ul className="social-links">
                <li>Telegram</li>
                <li>Twitter</li>
                <li>Facebook</li>
            </ul>
        </div>
    );
};

export default Banner;