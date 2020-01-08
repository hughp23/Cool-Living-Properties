import React, { Component } from "react";
import "../../styling/Homepage/_our-team-section.scss";
const ourTeamImg = require("../../assets/our-team-img.JPG");

class OurTeamSection extends Component {
  render() {
    const { ourTeam } = this.props;
    const ourTeamParsed = JSON.parse(ourTeam);
    // console.log(ourTeamParsed, "ourTeamParsed");
    return (
      <div id="our-team-section" className="our-team-section width-full">
        <section className="our-team-img-container flex-box">
          <section className="img-container flex-box-column-around">
            <img src={ourTeamImg} alt="Jess and Antonio" />
          </section>
        </section>
        <section className="text flex-box-column">
          <div className="header-container flex-box-column-around">
            <h3>{ourTeamParsed.title}</h3>
          </div>
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
