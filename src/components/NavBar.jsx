import React from "react";
import "../styling/_nav-bar.scss";
import "../styling/_global.scss";
const coolLivingPropertiesLogo = require("../assets/cool-living-properties-logo.png");

const NavBar = () => {
  return (
    <div
      id="navBar-container"
      className="navBar-container navBar-height flex-box"
    >
      <h6>HOME</h6>
      <h6>ABOUT US</h6>
      <h6>OUR SERVICES</h6>
      <div id="logo-container" className="logo-container">
        <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
      </div>
      <h6>OUR TEAM</h6>
      <h6>PHOTOS</h6>
      <h6>CONTACT US</h6>
    </div>
  );
};

export default NavBar;
