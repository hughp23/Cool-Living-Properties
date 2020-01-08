import React, { Component } from "react";
import Popup from "reactjs-popup";
import ReactCardFlip from "react-card-flip";
import "../../styling/Homepage/_service-section.scss";
const maintenanceImage = require("../../assets/maintenance-img.png");
const keyHoldingImage = require("../../assets/key-holding-img.png");
const developmentImage = require("../../assets/development-img.png");

class ServicesSection extends Component {
  state = {
    open1: false,
    open2: false,
    open3: false
  };
  render() {
    const { development, maintenance, keyHolding } = this.props;
    const developmentParsed = JSON.parse(development);
    const maintenanceParsed = JSON.parse(maintenance);
    const keyHoldingParsed = JSON.parse(keyHolding);
    return (
      <div id="service-section-container" className="service-section-container">
        <section className="main-header flex-box-column-around">
          <section className="text-container flex-box-column-around">
            <h2>Our Services</h2>
          </section>
        </section>
        <section id="services-grid" className="services-grid">
          <section className="development">
            <background>
              <header>
                <h3>{developmentParsed.title}</h3>
              </header>
              <imagecontainer>
                <img src={developmentImage} alt="development" />
              </imagecontainer>
              <text>{developmentParsed.text}</text>
            </background>
            {/* <ReactCardFlip
              isFlipped={this.state.open3}
              flipDirection="horizontal"
            >
              <background
                key="front"
                onClick={() => this.openModal(3)}
                className="pointer"
              >
                <imagecontainer>
                  <img src={developmentImage} alt="development" />
                </imagecontainer>
                <h3>{developmentParsed.title}</h3>
              </background>
              <background
                key="back"
                onClick={() => this.closeModal(3)}
                className="pointer"
              >
                <header>
                  <h4>{developmentParsed.title}</h4>
                </header>
                <text>{developmentParsed.text}</text>
              </background>
            </ReactCardFlip> */}
          </section>
          <section className="maintenance">
            <background>
              <header>
                <h3>{maintenanceParsed.title}</h3>
              </header>
              <imagecontainer>
                <img src={maintenanceImage} alt="development" />
              </imagecontainer>
              <text>{maintenanceParsed.text1}</text>
              <list>
                <ul>
                  {maintenanceParsed.list.map(item => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </list>
              <text>{maintenanceParsed.text2}</text>
            </background>
            {/* <ReactCardFlip
              isFlipped={this.state.open1}
              flipDirection="horizontal"
            >
              <background
                key="front"
                onClick={() => this.openModal(1)}
                className="pointer"
              >
                <imagecontainer>
                  <img src={maintenanceImage} alt="maintenance" />
                </imagecontainer>
                <h3>{maintenanceParsed.title}</h3>
              </background>
              <background
                key="back"
                onClick={() => this.closeModal(1)}
                className="pointer"
              >
                <header>
                  <h4>{maintenanceParsed.title}</h4>
                </header>
                <text>{maintenanceParsed.text1}</text>
                <list>
                  <ul>
                    {maintenanceParsed.list.map(item => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </list>
                <text>{maintenanceParsed.text2}</text>
              </background>
            </ReactCardFlip> */}
          </section>
          <section className="key-holding">
            <background>
              <header>
                <h3>{keyHoldingParsed.title}</h3>
              </header>
              <imagecontainer>
                <img src={keyHoldingImage} alt="development" />
              </imagecontainer>
              <text>{keyHoldingParsed.text}</text>
            </background>
            {/* <ReactCardFlip
              isFlipped={this.state.open2}
              flipDirection="horizontal"
            >
              <background
                key="front"
                onClick={() => this.openModal(2)}
                className="pointer"
              >
                <imagecontainer>
                  <img src={keyHoldingImage} alt="key-holding" />
                </imagecontainer>
                <h3>{keyHoldingParsed.title}</h3>
              </background>
              <background
                key="back"
                onClick={() => this.closeModal(2)}
                className="pointer"
              >
                <header>
                  <h4>{keyHoldingParsed.title}</h4>
                </header>
                <text>{keyHoldingParsed.text}</text>
              </background>
            </ReactCardFlip> */}
          </section>
        </section>
      </div>
    );
  }

  componentDidMount() {}

  componentDidUpdate() {}

  openModal = num => {
    console.log("in open popup");
    if (num === 1) {
      this.setState({ open1: true });
    } else if (num === 2) {
      this.setState({ open2: true });
    } else if (num === 3) {
      this.setState({ open3: true });
    } else this.setState({ open1: false });
  };

  closeModal = num => {
    if (num === 1) {
      this.setState({ open1: false });
    } else if (num === 2) {
      this.setState({ open2: false });
    } else if (num === 3) {
      this.setState({ open3: false });
    } else return false;
  };
}

export default ServicesSection;
