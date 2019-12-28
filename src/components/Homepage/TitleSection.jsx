import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styling/Homepage/_title-section.scss";
const coolLivingPropertiesLogo = require("../../assets/cool-living-properties-logo.png");
const checkmark = require("../../assets/check-mark.png");
const spanishFlag = require("../../assets/spain-flag.png");
const unitedKingdomFlag = require("../../assets/united-kingdom-flag.png");

class TitleSection extends Component {
  render() {
    const { section1, section2 } = this.props;
    const section1Parsed = JSON.parse(section1);
    const section2Parsed = JSON.parse(section2);
    return (
      <div id="title-section" className="title-section full-screen">
        {/* <section class="flags-container">
          <section
            id="language-choices-container"
            class="language-choices-container flex-box"
          >
            <div
              className="flag"
              onClick={() => this.changeLanguage("English")}
            >
              <img src={unitedKingdomFlag} alt="English" />
              <h3>EN</h3>
            </div>
            <div
              className="flag"
              onClick={() => this.changeLanguage("Spanish")}
            >
              <img src={spanishFlag} alt="Spanish" />
              <h3>ES</h3>
            </div>
          </section>
        </section> */}
        <section className="text-container flex-box-column-around">
          <section class="mission-statement-container">
            {/* <h2>{section1Parsed.title}</h2> */}
            <p>{section1Parsed.text}</p>
          </section>
          {/* <section class="core-values-container">
            <h2>{section2Parsed.title}</h2>
            <section class="core-values-list">
              <section className="checkmark-and-text flex-box-between">
                <img class="checkmark" src={checkmark} alt="checkmark" />
                <h3>{section2Parsed.text.text1}</h3>
              </section>
              <section className="checkmark-and-text flex-box-between">
                <img class="checkmark" src={checkmark} alt="checkmark" />
                <h3>{section2Parsed.text.text2}</h3>
              </section>
              <section className="checkmark-and-text flex-box-between">
                <img class="checkmark" src={checkmark} alt="checkmark" />
                <h3>{section2Parsed.text.text3}</h3>
              </section>
              <section className="checkmark-and-text flex-box-between">
                <img class="checkmark" src={checkmark} alt="checkmark" />
                <h3>{section2Parsed.text.text4}</h3>
              </section>
            </section>
            <div id="logo-container" className="logo-container">
            <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
          </div>
          </section> */}
        </section>
      </div>
    );
  }

  changeLanguage = language => {
    this.props.changeLanguage(language);
  };
}

export default TitleSection;
