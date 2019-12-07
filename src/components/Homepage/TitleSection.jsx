import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styling/Homepage/_title-section.scss";
const coolLivingPropertiesLogo = require("../../assets/cool-living-properties-logo.png");
const checkmark = require("../../assets/check-mark.png");

class TitleSection extends Component {
  render() {
    const { section1, section2 } = this.props;
    const section1Parsed = JSON.parse(section1);
    const section2Parsed = JSON.parse(section2);
    console.log(section1Parsed);
    return (
      <div id="title-section" className="title-section full-screen">
        <section className="text-container flex-box-column-around">
          <section class="mission-statement-container">
            <h2>{section1Parsed.title}</h2>
            <p>{section1Parsed.text}</p>
          </section>
          <section class="core-values-container">
            <h2>{section2Parsed.title}</h2>
            <section class="core-values-list flex-box">
              <section className="checkmark-and-text flex-box">
                <img class="checkmark" src={checkmark} alt="checkmark" />
                <h3>{section2Parsed.text.text1}</h3>
              </section>
              <section className="checkmark-and-text flex-box">
                <img class="checkmark" src={checkmark} alt="checkmark" />
                <h3>{section2Parsed.text.text2}</h3>
              </section>
              <section className="checkmark-and-text flex-box">
                <img class="checkmark" src={checkmark} alt="checkmark" />
                <h3>{section2Parsed.text.text3}</h3>
              </section>
              <section className="checkmark-and-text flex-box">
                <img class="checkmark" src={checkmark} alt="checkmark" />
                <h3>{section2Parsed.text.text4}</h3>
              </section>
            </section>
            {/* <div id="logo-container" className="logo-container">
            <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
          </div> */}
          </section>
        </section>
      </div>
    );
  }
}

export default TitleSection;
