import React, { Component } from "react";
import NavBar from "../NavBar";
import TitleSection from "./TitleSection";
import ServiceSection from "./ServicesSection";
import AboutUsSection from "./AboutUsSection";
import OurTeamSection from "./OurTeamSection";
import PhotosOfWorkSection from "./PhotosOfWorkSection";
import ContactUsSection from "./ContactUsSection";

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TitleSection />
        <ServiceSection />
        <AboutUsSection />
        <OurTeamSection />
        <PhotosOfWorkSection />
        <ContactUsSection />
      </div>
    );
  }
}

export default Homepage;
