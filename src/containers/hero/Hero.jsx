import React from 'react';
import './hero.css'

const Hero = () => {
    return(
        <div className="golden-chain_hero" id="home">
            <div className="hero-img">
                {/* <div className="overlay"></div> */}
                <div className="golden-chain_hero-content">
                    <h1 className="golden-chain_hero-text">Create Innovative Products to Boost Your <span className="span">Income</span></h1>
                    <button className="hero-button cta-button">Learn More</button>
                </div>
            </div>
        </div>
    )
};

export default Hero;
