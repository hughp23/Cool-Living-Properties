import React from "react";
import { Link } from "@reach/router";
import "../styling/_nav-bar.scss";
import "../styling/_global.scss";
const coolLivingPropertiesLogo = require("../assets/cool-living-properties-logo.png");

const NavBar = () => {
  return (
    <div
      id="navBar-container"
      className="navBar-container navBar-height flex-box"
    >
      <Link to="/">
        <h6>HOME</h6>
      </Link>
      <Link to="/aboutUs">
        <h6>ABOUT US</h6>
      </Link>
      <Link to="/ourServices">
        <h6>OUR SERVICES</h6>
      </Link>
      <div id="logo-container" className="logo-container">
        <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
      </div>
      <Link to="/ourTeam">
        <h6>OUR TEAM</h6>
      </Link>
      <Link to="/photosOfOurWork">
        <h6>PHOTOS</h6>
      </Link>
      <Link to="/contactUs">
        <h6>CONTACT US</h6>
      </Link>
    </div>
  );
};

export default NavBar;
