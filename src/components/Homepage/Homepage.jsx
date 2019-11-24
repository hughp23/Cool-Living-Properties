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
import {
  getHomePageContent,
  testFunction,
  getTitleSectionContent
} from "../../utils";
import "firebase/firestore";
const coolLivingPropertiesLogo = require("../../assets/cool-living-properties-logo.png");

class Homepage extends Component {
  state = {
    language: "English",
    links: {
      Nav1: "HOME",
      Nav2: "ABOUT US",
      Nav3: "OUR SERVICES",
      Nav4: "OUR TEAM",
      Nav5: "PHOTOS",
      Nav6: "CONTACT US"
    },
    titleSection: {
      section1: {
        title: "Our Mission Statement",
        text:
          'Our mission is to offer reliable, professional and friendly property maintenance, key-holding and development services whilst also providing a high level of customer service. We want to enable our clients to feel a "peace of mind" with their property / properties. We strive to also create and build upon lasting relationships with all of our clients.'
      },
      section2: {
        title: "Our Core Values",
        text: {
          text1: "Customer Service",
          text2: "Commitment to Quality",
          text3: "Affordability",
          text4: "Reliability"
        }
      }
    }
  };
  render() {
    const { language, links, titleSection } = this.state;
    console.log(links, "links");
    return (
      <div>
        <div
          id="navBar-container"
          className="navBar-container navBar-height flex-box"
        >
          <h6 onClick={() => this.scrollIntoView("home")}>{links.Nav1}</h6>
          <h6 onClick={() => this.scrollIntoView("aboutUs")}>{links.Nav2}</h6>
          <h6 onClick={() => this.scrollIntoView("ourServices")}>
            {links.Nav3}
          </h6>
          <div id="logo-container" className="logo-container">
            <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
          </div>
          <h6 onClick={() => this.scrollIntoView("aboutUs")}>{links.Nav4}</h6>
          <h6 onClick={() => this.scrollIntoView("photosOfOurWork")}>
            {links.Nav5}
          </h6>
          <h6 onClick={() => this.scrollIntoView("contactUs")}>{links.Nav6}</h6>
        </div>
        {/* <NavBar /> */}
        <section id="home">
          <TitleSection
            section1={JSON.stringify(titleSection.section1)}
            section2={JSON.stringify(titleSection.section2)}
          />
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
    const { language } = this.state;

    //NavBar
    getHomePageContent(language, "NavBar", "Links").then(data => {
      this.setState({
        links: {
          Nav1: data[0].Nav1,
          Nav2: data[0].Nav2,
          Nav3: data[0].Nav3,
          Nav4: data[0].Nav4,
          Nav5: data[0].Nav5,
          Nav6: data[0].Nav6
        }
      });
    });

    //TitleSection
    getHomePageContent(language, "TitleSection").then(data => {
      console.log(data, "data");
      // this.setState({ links: data });
    });

    // testFunction();
  }

  scrollIntoView = id => {
    document.getElementById(id).scrollIntoView();
  };
}

export default Homepage;
