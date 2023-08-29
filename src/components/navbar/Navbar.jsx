import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => {
  const location = useLocation();

  return (
    <>
      <p className={location.pathname === "/" ? "active-link" : ""}>
        <Link to="/">Home</Link>
      </p>
      <p className={location.pathname === "/about-us" ? "active-link" : ""}>
        <Link to="/about-us">About Us</Link>
      </p>
      <p className={location.pathname === "/offers" ? "active-link" : ""}>
        <Link to="/offers">Products</Link>
      </p>      
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCta, setToggleCta] = useState(false);

  return (
    <div className="golden-chain_navbar">
      <div className="golden-chain_navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="golden-chain_navbar-links">
        <div className="golden-chain_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="golden-chain_navbar-contact">
        <button className="cta-button" type="button">
          Contact Us
        </button>
      </div>
      <div className="golden-chain_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="golden-chain_navbar-menu_container scale-up-center">
            <div className="golden-chain_navbar-menu_container-links">
              <Menu />
              <div className="golden-chain_navbar-menu_container-links-contact">
                <button className="cta-button" type="button">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
