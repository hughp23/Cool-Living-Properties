import React, { Component } from "react";
import "../../styling/Homepage/_about-us-section.scss";

class AboutUsSection extends Component {
  render() {
    return (
      <div id="about-us-section" className="about-us-section width-full">
        <h3>About Us</h3>
        <p>
          We are a family run property maintenance, development and key-holding
          business established in Palma, Mallorca. We represent a team of
          professionals with a passion and commitment to provide high standards
          of service to our clients and to offer a “peace of mind” in their
          home.
        </p>
      </div>
    );
  }
}

export default AboutUsSection;
