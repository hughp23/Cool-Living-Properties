import React, { Component } from "react";
import "../../styling/Homepage/_our-team-section.scss";

class OurTeamSection extends Component {
  render() {
    const { ourTeam } = this.props;
    const ourTeamParsed = JSON.parse(ourTeam);
    return (
      <div id="our-team-section" className="our-team-section width-full">
        <section className="our-team-img-container"></section>
        <section className="text">
          <h3>{ourTeamParsed.title}</h3>
          <section className="text-container">
            <p>{ourTeamParsed.text1}</p>
            <p>{ourTeamParsed.text2}</p>
            <p>{ourTeamParsed.text3}</p>
            <p>{ourTeamParsed.text4}</p>
            <p>{ourTeamParsed.text5}</p>
          </section>
        </section>
      </div>
    );
  }
}

export default OurTeamSection;
