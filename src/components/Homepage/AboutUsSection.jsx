import React, { Component } from "react";
import "../../styling/Homepage/_about-us-section.scss";
const aboutUsImg = require("../../assets/about-us-img.jpg");
const checkmark = require("../../assets/check-mark.png");

class AboutUsSection extends Component {
  render() {
    const { aboutUs } = this.props;
    const aboutUsParsed = JSON.parse(aboutUs);
    const title = aboutUsParsed.title;
    const text = aboutUsParsed.text;
    return (
      <div id="about-us-section" className="about-us-section width-full">
        <section className="text flex-box-column-around">
          <section className="flex-box-column-around">
            <h1>{title}</h1>
          </section>
          <section className="text-container flex-box-column-around">
            <p>{text}</p>
          </section>
          <section class="core-values-container flex-box-column-around">
            <div className="bottom-padding2vh">
              <h3>{aboutUsParsed.ourCoreValuesTitle}</h3>
            </div>
            {/* Row styling of Core Values */}
            <section class="core-values-list">
              {aboutUsParsed.ourCoreValuesList.map((item, i) => {
                return (
                  <section key={i} className="checkmark-and-text flex-box-between">
                    <div className="img-container flex-box-column-around">
                      <img class="checkmark" src={checkmark} alt="checkmark" />
                    </div>
                    <div className="text-container flex-box-column-around">
                      <h4>{item}</h4>
                    </div>
                  </section>
                );
              })}
            </section>
            {/* Box styling of Core Values */}
            <section class="core-values-list-box">
              <section className="flex-box-column-around">
                <section className="checkmark-and-text flex-box-between">
                  <div className="img-container flex-box-column-around">
                    <img class="checkmark" src={checkmark} alt="checkmark" />
                  </div>
                  <div className="text-container flex-box-column-around">
                    <h4>{aboutUsParsed.ourCoreValuesList[0]}</h4>
                  </div>
                </section>
                <section className="checkmark-and-text flex-box-between">
                  <div className="img-container flex-box-column-around">
                    <img class="checkmark" src={checkmark} alt="checkmark" />
                  </div>
                  <div className="text-container flex-box-column-around">
                    <h4>{aboutUsParsed.ourCoreValuesList[1]}</h4>
                  </div>
                </section>
              </section>
              <section className="flex-box-column-around">
                <section className="checkmark-and-text flex-box-between">
                  <div className="img-container flex-box-column-around">
                    <img class="checkmark" src={checkmark} alt="checkmark" />
                  </div>
                  <div className="text-container flex-box-column-around">
                    <h4>{aboutUsParsed.ourCoreValuesList[2]}</h4>
                  </div>
                </section>
                <section className="checkmark-and-text flex-box-between">
                  <div className="img-container flex-box-column-around">
                    <img class="checkmark" src={checkmark} alt="checkmark" />
                  </div>
                  <div className="text-container flex-box-column-around">
                    <h4>{aboutUsParsed.ourCoreValuesList[3]}</h4>
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
