import React, { Component } from "react";
import "../../styling/Homepage/_our-team-section.scss";

class OurTeamSection extends Component {
  render() {
    return (
      <div id="our-team-section" className="our-team-section width-full">
        <section className="our-team-img-container half-screen"></section>
        <section className="text half-screen">
          <h3>Our Team</h3>
          <section className="text-container">
            <p>Hi there, we are Jess and Antonio</p>
            <p>
              With Jess’s background in business management and property and
              Antonio’s background in property maintenance, we are the ideal
              team to provide all the support and solutions for your property
              requirements.
            </p>
            <p>So, call us now on +34 659 161 555</p>
            <p>Come join the team!</p>
            <p>
              If you would like to come work with us and join our team, please
              send us your CV to coollivingproperties@gmail.com
            </p>
          </section>
        </section>
      </div>
    );
  }
}

export default OurTeamSection;
