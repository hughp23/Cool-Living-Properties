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
    return (
      <div
        id="service-section-container"
        className="service-section-container full-screen"
      >
        {/* <h2>Our Services</h2> */}
        <section id="services-grid" className="services-grid">
          <section className="maintenance">
            <ReactCardFlip
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
                <h3>Maintenance</h3>
              </background>
              <background
                key="back"
                onClick={() => this.closeModal(1)}
                className="pointer"
              >
                <header>
                  <h4>Maintenance</h4>
                </header>
                <text>
                  Our Property maintenance division offers a range of services
                  to keep your home in excellent condition. We can fix, repair
                  and revitalise. We carry out the odd jobs as well as taking on
                  the larger projects. No project is too small! Our “Mr fix it”
                  team can tackle most issues ranging from…
                </text>
                <list>
                  <ul>
                    <li>Gardening &amp; watering maintenance</li>
                    <li>Fencing</li>
                    <li>Pool cleaning &amp; maintenance</li>
                    <li>Painting &amp; decorating</li>
                    <li>Odd-jobs around your home</li>
                    <li>Rubbish clearance</li>
                    <li>Jet washing</li>
                  </ul>
                </list>
                <text>
                  And more. We can also help to co-ordinate contractors required
                  for the larger projects as well.
                </text>
              </background>
            </ReactCardFlip>
          </section>
          <section className="key-holding">
            <ReactCardFlip
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
                <h3>Key-holding</h3>
              </background>
              <background
                key="back"
                onClick={() => this.closeModal(2)}
                className="pointer"
              >
                <header>
                  <h4>Key-holding</h4>
                </header>
                <text>
                  Our Key-holding service involves your “peace of mind” package
                  whereby we will hold your keys, visit your property once a
                  month, inspect and check to see if there are any problems and
                  we will send you a monthly report to update you. Call us now
                  to find out more…
                </text>
              </background>
            </ReactCardFlip>
          </section>
          <section className="development">
            <ReactCardFlip
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
                <h3>Development</h3>
              </background>
              <background
                key="back"
                onClick={() => this.closeModal(3)}
                className="pointer"
              >
                <header>
                  <h4>Development</h4>
                </header>
                <text>
                  Our Development Team with over 10 years’ experience on the
                  Island, sources sites and co- ordinates either new build,
                  refurbishment or modernisation projects with our team of
                  lawyers, architects and developers. This ranges from
                  apartments through to country estates.
                </text>
              </background>
            </ReactCardFlip>
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
