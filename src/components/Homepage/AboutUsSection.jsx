import React, { Component } from "react";
import "../../styling/Homepage/_about-us-section.scss";
const aboutUsImg = require("../../assets/about-us-img.jpg");
const checkmark = require("../../assets/check-mark.png");

class AboutUsSection extends Component {
  render() {
    const { aboutUs, coreValues } = this.props;
    const aboutUsParsed = JSON.parse(aboutUs);
    const coreValuesParsed = JSON.parse(coreValues);
    const title = aboutUsParsed.title;
    const text = aboutUsParsed.text;
    return (
      <div id="about-us-section" className="about-us-section width-full">
        <section className="text flex-box-column-around">
          <h3>{title}</h3>
          <section className="text-container flex-box-column-around">
            <p>{text}</p>
          </section>
          <section class="core-values-container flex-box-column-around">
            <h3>{coreValuesParsed.title}</h3>
            {/* Row styling of Core Values */}
            <section class="core-values-list">
              <section className="checkmark-and-text flex-box-between">
                <div className="img-container flex-box-column-around">
                  <img class="checkmark" src={checkmark} alt="checkmark" />
                </div>
                <div className="text-container flex-box-column-around">
                  <h3>{coreValuesParsed.text.text1}</h3>
                </div>
              </section>
              <section className="checkmark-and-text flex-box-between">
                <div className="img-container flex-box-column-around">
                  <img class="checkmark" src={checkmark} alt="checkmark" />
                </div>
                <div className="text-container flex-box-column-around">
                  <h3>{coreValuesParsed.text.text2}</h3>
                </div>
              </section>
              <section className="checkmark-and-text flex-box-between">
                <div className="img-container flex-box-column-around">
                  <img class="checkmark" src={checkmark} alt="checkmark" />
                </div>
                <div className="text-container flex-box-column-around">
                  <h3>{coreValuesParsed.text.text3}</h3>
                </div>
              </section>
              <section className="checkmark-and-text flex-box-between">
                <div className="img-container flex-box-column-around">
                  <img class="checkmark" src={checkmark} alt="checkmark" />
                </div>
                <div className="text-container flex-box-column-around">
                  <h3>{coreValuesParsed.text.text4}</h3>
                </div>
              </section>
            </section>
            {/* Box styling of Core Values */}
            <section class="core-values-list-box">
              <section className="flex-box-column-around">
                <section className="checkmark-and-text flex-box-between">
                  <div className="img-container flex-box-column-around">
                    <img class="checkmark" src={checkmark} alt="checkmark" />
                  </div>
                  <div className="text-container flex-box-column-around">
                    <h3>{coreValuesParsed.text.text1}</h3>
                  </div>
                </section>
                <section className="checkmark-and-text flex-box-between">
                  <div className="img-container flex-box-column-around">
                    <img class="checkmark" src={checkmark} alt="checkmark" />
                  </div>
                  <div className="text-container flex-box-column-around">
                    <h3>{coreValuesParsed.text.text2}</h3>
                  </div>
                </section>
              </section>
              <section className="flex-box-column-around">
                <section className="checkmark-and-text flex-box-between">
                  <div className="img-container flex-box-column-around">
                    <img class="checkmark" src={checkmark} alt="checkmark" />
                  </div>
                  <div className="text-container flex-box-column-around">
                    <h3>{coreValuesParsed.text.text3}</h3>
                  </div>
                </section>
                <section className="checkmark-and-text flex-box-between">
                  <div className="img-container flex-box-column-around">
                    <img class="checkmark" src={checkmark} alt="checkmark" />
                  </div>
                  <div className="text-container flex-box-column-around">
                    <h3>{coreValuesParsed.text.text4}</h3>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className="about-us-img-container">
          <img src={aboutUsImg} alt="About Us" />
        </section>
      </div>
    );
  }
}

export default AboutUsSection;
