import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">      
        <div className="footer-logo">
          <img src={logo} alt="golden-chain-logo" height="130px" />
        </div>
        <div className="footer-content">
          <div className="footer-contacts">
            <div className="address contact">
              <span>
                <i className="fa-solid fa-location-dot icon"></i>
              </span>
              <p className="inline">
                193 M.H Del Pilar Street,Tinajeros, Malabon City, Philippines
              </p>
            </div>
            <div className="email contact">
              <span>
                <i className="fa-regular fa-envelope icon"></i>
              </span>
              <p className="inline">sales@goldenchain.com.ph</p>
            </div>
            <div className="contact-number contact">
              <span>
                <i className="fa-solid fa-phone icon"></i>
              </span>
              <div className="contact-numbers">
                <p className="inline">(02) 7 005 7506</p>
                <p>0917 536 1896 (Sales Head)</p>
                <p>0917 719 2213 (General Manager)</p>
              </div>
            </div>
          </div>
          <div className="footer-cta-section">
            <p className="cta-header">Sail with <span className="span">Us</span>!</p>
            <p className="cta-sub-header">
              Get exclusive offers, industry insights, and updates. Join the journey
              to maritime excellence!
            </p>
            <div className="input-container">
              <input type="email" className="cta-input" placeholder="Your email here" />
              <button className="cta-button" id="footer-cta-button">Join Us</button>
            </div>
          </div>
        </div>
      <p className="footer-rights">© 2023 GCMES. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
