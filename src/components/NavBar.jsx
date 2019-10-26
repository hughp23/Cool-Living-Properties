import React from "react";
import "../styling/_nav-bar.scss";
import "../styling/_global.scss";

const NavBar = () => {
  return (
    <div
      id="navBar-container"
      className="navBar-container navBar-height flex-box"
    >
      <h2>HOME</h2>
      <h2>ABOUT US</h2>
      <h2>OUR SERVICES</h2>
      <h2>OUR TEAM</h2>
      <h2>PHOTOS</h2>
      <h2>CONTACT US</h2>
    </div>
  );
};

export default NavBar;
