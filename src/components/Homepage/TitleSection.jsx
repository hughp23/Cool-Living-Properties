import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styling/Homepage/_title-section.scss";
const coolLivingPropertiesLogo = require("../../assets/cool-living-properties-logo.png");

class TitleSection extends Component {
  render() {
    return (
      <div id="title-section" className="title-section full-screen">
        <section class="mission-statement-container">
          <h2>Our Mission Statement</h2>
          <p>
            Our mission is to offer reliable, professional and friendly property
            maintenance, key-holding and development services whilst also
            providing a high level of customer service. We want to enable our
            clients to feel a “peace of mind” with their property / properties.
            We strive to also create and build upon lasting relationships with
            all of our clients.
          </p>
        </section>
        <section class="core-values-container">
          <h2>Our Core Values</h2>
          <section class="core-values-list flex-box">
            <h3>Customer Service</h3>
            <h3>Commitment to Quality</h3>
            <h3>Affordability</h3>
            <h3>Reliability</h3>
          </section>
          {/* <div id="logo-container" className="logo-container">
            <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
          </div> */}
        </section>
      </div>
    );
  }
}

export default TitleSection;
