import React, { Component } from "react";
import "../styling/_footer.scss";
const coolLivingPropertiesLogo = require("../assets/cool-living-properties-logo.png");
const facebookLogo = require("../assets/social-media-logos/facebook.png");
const instaLogo = require("../assets/social-media-logos/instagram.png");
const linkedinLogo = require("../assets/social-media-logos/linkedin.png");

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="footer quarter-screen">
        <div id="logo-container" className="logo-container">
          <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
        </div>
        <section
          id="footer-nav-container"
          className="footer-nav-container flex-box"
        >
          <p onClick={() => this.scrollIntoView("home")}>Home</p>
          <p> | </p>
          <p onClick={() => this.scrollIntoView("aboutUs")}>About Us</p>
          <p> | </p>
          <p onClick={() => this.scrollIntoView("ourServices")}>Our Services</p>
          <p> | </p>
          <p onClick={() => this.scrollIntoView("aboutUs")}>Our Team</p>
          <p> | </p>
          <p onClick={() => this.scrollIntoView("photosOfOurWork")}>Photos</p>
          <p> | </p>
          <p onClick={() => this.scrollIntoView("contactUs")}>Contact Us</p>
        </section>
        <section
          id="social-media-links-container"
          className="social-media-links-container flex-box"
        >
          <div className="social-logo-container">
            <a
              href="https://www.facebook.com/Coollivingproperties/"
              className="pointer"
            >
              <img alt="facebook" src={facebookLogo} />
            </a>
          </div>
          <div className="social-logo-container">
            <a
              href="https://www.instagram.com/coollivingproperties/"
              className="pointer"
            >
              <img alt="instagram" src={instaLogo} />
            </a>
          </div>
          <div className="social-logo-container">
            <a
              href="linkedin.com/in/cool-living-properties-93a512196 "
              className="pointer"
            >
              <img alt="linkedin" src={linkedinLogo} />
            </a>
          </div>
        </section>
      </div>
    );
  }

  scrollIntoView = id => {
    document.getElementById(id).scrollIntoView();
  };
}

export default Footer;
