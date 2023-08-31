import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css'

const Hero = () => {
    return(
        <div className="golden-chain_hero" id="home">
            <div className="hero-img">
                {/* <div className="overlay"></div> */}
                <div className="golden-chain_hero-content">
                    <h1 className="golden-chain_hero-text">Setting Sail to <span className="span">Excellence</span> in Marine and Industrial Solutions </h1>
                    <Link to="/about-us">
                        <button className="hero-button cta-button">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Hero;
