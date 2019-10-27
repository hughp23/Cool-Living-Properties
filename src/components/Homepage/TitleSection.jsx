import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styling/Homepage/_title-section.scss";

class TitleSection extends Component {
  render() {
    return (
      <div className="full-screen">
        <section>
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
        <section>
          <h2>Our Core Values</h2>
          <section>
            <h3>
              <i class="far fa-check-circle"></i> Customer Service
            </h3>
            <h3>
              <i class="far fa-check-circle"></i> Commitment to Quality
            </h3>
            <h3>
              <i class="far fa-check-circle"></i> Affordability
            </h3>
            <h3>
              <i class="far fa-check-circle"></i> Reliability
            </h3>
          </section>
        </section>
      </div>
    );
  }
}

export default TitleSection;
