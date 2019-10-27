import React from "react";
import "../styling/_nav-bar.scss";
import "../styling/_global.scss";

const NavBar = () => {
  return (
    <div
      id="navBar-container"
      className="navBar-container navBar-height flex-box"
    >
      <h4>HOME</h4>
      <h4>ABOUT US</h4>
      <h4>OUR SERVICES</h4>
      <h4>OUR TEAM</h4>
      <h4>PHOTOS</h4>
      <h4>CONTACT US</h4>
    </div>
  );
};

export default NavBar;
