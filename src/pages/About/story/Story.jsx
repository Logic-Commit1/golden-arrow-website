import React from "react";
import ABOUTUS from "src/assets/about-us/import";

import "./story.css";

const Story = () => {
  return (
    <>
      <div className="section" id="story-section">
        <div className="story-content">
          <div className="about-us-hero-img-section" id="story-img">
            <img src={ABOUTUS.img2} alt="GCMES picture" className="pics" />
          </div>
          <div className="section-text feature-text-left" id="story-text">
            <p className="about-us-title feature-text-left" id="story-title">
              Our Story
            </p>
            <p className="about-us-subtitle">
              Our journey began in 2020, with a vision to redefine the standards
              of marine and industrial solutions.
              <br /><br />
              Over the years, we have
              navigated through tides and storms, emerging stronger and
              more dedicated to our mission.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
