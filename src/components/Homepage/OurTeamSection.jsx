import React, { Component } from "react";
import "../../styling/Homepage/_our-team-section.scss";
const ourTeamImg = require("../../assets/our-team-img.JPG");

class OurTeamSection extends Component {
  render() {
    const { ourTeam } = this.props;
    const ourTeamParsed = JSON.parse(ourTeam);
    console.log(ourTeamParsed, "ourTeamParsed");
    return (
      <div id="our-team-section" className="our-team-section width-full">
        <section className="our-team-img-container">
          <img src={ourTeamImg} alt="Jess and Antonio" />
        </section>
        <section className="text">
          <h3>{ourTeamParsed.title}</h3>
          <section className="text-container">
            <p>{ourTeamParsed.text[0]}</p>
            <p>{ourTeamParsed.text[1]}</p>
            <p>{ourTeamParsed.text[2]}</p>
            <p>{ourTeamParsed.text[3]}</p>
            <p>{ourTeamParsed.text[4]}</p>
          </section>
        </section>
      </div>
    );
  }
}

export default OurTeamSection;
