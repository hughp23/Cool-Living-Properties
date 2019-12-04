import React, { Component } from "react";
import "../../styling/Homepage/_about-us-section.scss";

class AboutUsSection extends Component {
  render() {
    const { aboutUs } = this.props;
    const aboutUsParsed = JSON.parse(aboutUs);
    const title = aboutUsParsed.title;
    const text = aboutUsParsed.text;
    return (
      <div id="about-us-section" className="about-us-section width-full">
        <section className="text">
          <h3>{title}</h3>
          <section className="text-container">
            <p>{text}</p>
          </section>
        </section>
        <section className="about-us-img-container"></section>
      </div>
    );
  }
}

export default AboutUsSection;
