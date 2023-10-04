import React from "react";
import "./mission.css";
import ABOUTUS from "src/assets/about-us/import";

const Mission = () => {
  return (
    <>
      <div className="section" id="mission-section">
        <div className="mission-content">
          <div className="about-us-hero-img-section">
            <img src={ABOUTUS.img3} alt="GCMES picture" className="pics" />
          </div>
          <div className="section-text feature-text-right" id="mission-text">
            <p className="about-us-title feature-text-right" id="mission-title">
              Our Mission
            </p>
            <p className="about-us-subtitle">
              At Golden Chain, our mission is to be
              the premier provider of marine and industrial supply solutions,
              delivering top-notch products and services that exceed customer
              expectations.
              <br />
              <br />
              We are committed to upholding the highest standards of quality,
              reliability, and professionalism in every aspect of our
              operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
