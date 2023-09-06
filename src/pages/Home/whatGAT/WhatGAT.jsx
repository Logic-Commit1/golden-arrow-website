import React from "react";
import { Link } from "react-router-dom";
import "./whatGAT.css";

const WhatGAT = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-content">
        <div className="about-us-info">
          <span className="header">About Us</span>
          <h2>Nurturing Excellence in Maritime Solutions</h2>
          <p>
            With unwavering commitment to quality, we provide a comprehensive
            range of products and services that empower your ventures on the
            high seas and industrial landscapes.
          </p>
          <Link to="/about-us">
            <button className="cta-button">Learn More</button>
          </Link>
        </div>
        <div className="about-us-img"></div>
      </div>
    </div>
  );
};

export default WhatGAT;
