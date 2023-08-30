import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = ({onCloseMenu}) => {
  const location = useLocation();

  const handleLinkClick = () => {
    onCloseMenu();
  };

  return (
    <>
      <p className={location.pathname === "/" ? "active-link" : ""}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
      </p>
      <p className={location.pathname === "/about-us" ? "active-link" : ""}>
        <Link to="/about-us" onClick={handleLinkClick}>About Us</Link>
      </p>
      <p className={location.pathname === "/offers" ? "active-link" : ""}>
        <Link to="/offers" onClick={handleLinkClick}>Products</Link>
      </p>      
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="golden-chain_navbar">
      <div className="golden-chain_navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="golden-chain_navbar-links">
        <div className="golden-chain_navbar-links_container">
          <Menu onCloseMenu={closeMenu}/>
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
              <Menu onCloseMenu={closeMenu}/>
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
