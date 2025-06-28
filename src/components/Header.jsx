import React from "react";
import "./Header.css";
import logo from '../assets/7804145.jpg'

const Header = () => {
  return (
    <div className="header">

      <div className="logo-container ">
        <img src={logo} alt="A logo Icon" className="logo" />
      </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>
      
    </div>
  );
};

export default Header;
