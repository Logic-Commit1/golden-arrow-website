import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return(
        <div className="golden-chain_navbar">
            <div className="golden-chain_navbar-links">
                <div className="golden-chain_navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="golden-chain_navbar-links_container">
                    <p><a href="#home"></a>Home</p>
                    <p><a href="#about-us"></a>About Us</p>
                    <p><a href="#services"></a>Services</p>
                    <p><a href="#products"></a>Products</p>
                </div> 
            </div>
            <div className="golden-chain_navbar-contact">
                <button type="button">Contact Us</button>
            </div>
            <div className="golden-chain_navbar-menu">
                {toggleMenu 
                  ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
                  : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /> 
                }
                
            </div>
        </div>
    )
};

export default Navbar;
