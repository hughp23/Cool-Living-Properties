import React, { Component } from "react";
import "../../styling/Homepage/_service-section.scss";

class ServicesSection extends Component {
  render() {
    return (
      <div
        id="service-section-container"
        className="service-section-container full-screen"
      >
        <h2>Our Services</h2>
        <section id="services-grid" className="services-grid">
          <section className="maintenance">
            <h3>Maintenance</h3>
          </section>
          <section className="key-holding">
            <h3>Key-holding</h3>
          </section>
          <section className="development">
            <h3>Development</h3>
          </section>
        </section>
      </div>
    );
  }
}

export default ServicesSection;
