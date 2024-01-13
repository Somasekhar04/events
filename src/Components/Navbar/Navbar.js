import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="Title">
      <div className="logo">
        <h1 style={{ font: "icon", fontStyle: "italic", fontSize: "3rem" }}>
          Event Management
        </h1>
      </div>
      <div className="menu">
        <ul style={{ listStyleType: "none" }}>
          <Link spy={true} to='Home' activeClass="activeClass">
          <li>Home</li>
          </Link>
          <Link spy={true} to='Services' activeClass="activeClass">
          <li>Services</li>
          </Link>
          <Link spy={true} to='./About.js' activeClass="activeClass">
          <li>About</li>
          </Link>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
