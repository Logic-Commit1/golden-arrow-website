import React from "react";
import ABOUTUS from "src/assets/about-us/import";
import "./intro.css";

const Intro = () => {
  return (
    <>
      <div className="section" id="intro-section">
        <div className="intro-content">
          <div className="about-us-hero-img-section">
            <img
              src={ABOUTUS.img1}
              alt="GCMES picture"
              className="pics"
              id="ship-pic"
            />
          </div>
          <div className="section-text feature-text-right" id="intro-text">
            <p className="about-us-title feature-text-right">
              Welcome to Golden Chain: Your Trusted Partner in Maritime
              Excellence
            </p>
            <p className="about-us-subtitle">
              At Golden Chain, we are more than just a name in the maritime and
              industrial supply industry. We are a testament to unwavering
              commitment, quality craftsmanship, and a relentless pursuit of
              excellence.
              <br/><br/>
              Based in the picturesque landscapes of the
              Philippines, we've built our legacy on the principles of trust,
              innovation, and service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
