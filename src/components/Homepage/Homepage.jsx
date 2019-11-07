import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import NavBar from "../NavBar";
import TitleSection from "./TitleSection";
import ServiceSection from "./ServicesSection";
import AboutUsSection from "./AboutUsSection";
import OurTeamSection from "./OurTeamSection";
import PhotosOfWorkSection from "./PhotosOfWorkSection";
import ContactUsSection from "./ContactUsSection";
import "../../styling/_nav-bar.scss";
import "../../styling/_global.scss";
const coolLivingPropertiesLogo = require("../../assets/cool-living-properties-logo.png");

class Homepage extends Component {
  render() {
    return (
      <div>
        <div
          id="navBar-container"
          className="navBar-container navBar-height flex-box"
        >
          <h6 onClick={() => this.scrollIntoView("home")}>HOME</h6>
          <h6 onClick={() => this.scrollIntoView("aboutUs")}>ABOUT US</h6>
          <h6 onClick={() => this.scrollIntoView("ourServices")}>
            OUR SERVICES
          </h6>
          <div id="logo-container" className="logo-container">
            <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
          </div>
          <h6 onClick={() => this.scrollIntoView("aboutUs")}>OUR TEAM</h6>
          <h6 onClick={() => this.scrollIntoView("photosOfOurWork")}>PHOTOS</h6>
          <h6 onClick={() => this.scrollIntoView("contactUs")}>CONTACT US</h6>
        </div>
        {/* <NavBar /> */}
        <section id="home">
          <TitleSection />
        </section>
        <section id="ourServices">
          <ServiceSection />
        </section>
        <section id="aboutUs" path="/aboutUs" class="full-screen flex-box">
          <AboutUsSection />
          <OurTeamSection />
        </section>
        <section id="photosOfOurWork">
          <PhotosOfWorkSection />
        </section>
        <section id="contactUs">
          <ContactUsSection />
        </section>
      </div>
    );
  }

  componentDidMount() {
    let link = this.props;
    console.log(link, "link");
    // document.getElementById(link).scrollIntoView();
  }

  scrollIntoView = id => {
    document.getElementById(id).scrollIntoView();
  };
}

export default Homepage;
