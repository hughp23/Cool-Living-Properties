import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { slide as Menu } from "react-burger-menu";
import NavBar from "../NavBar";
import TitleSection from "./TitleSection";
import ServiceSection from "./ServicesSection";
import AboutUsSection from "./AboutUsSection";
import OurTeamSection from "./OurTeamSection";
import PhotosOfWorkSection from "./PhotosOfWorkSection";
import ContactUsSection from "./ContactUsSection";
import "../../styling/_nav-bar.scss";
import "../../styling/_global.scss";
import {
  getHomePageContent,
  testFunction,
  getTitleSectionContent
} from "../../utils";
import "firebase/firestore";
const coolLivingPropertiesLogo = require("../../assets/cool-living-properties-logo.png");
const spanishFlag = require("../../assets/spain-flag.png");
const unitedKingdomFlag = require("../../assets/united-kingdom-flag.png");

class Homepage extends Component {
  state = {
    language: "English",
    links: {
      Nav1: "HOME",
      Nav2: "ABOUT US",
      Nav3: "OUR SERVICES",
      Nav4: "OUR TEAM",
      Nav5: "PHOTOS",
      Nav6: "CONTACT US"
    },
    titleSection: {
      section1: {
        title: "Our Mission Statement",
        text:
          'Our mission is to offer reliable, professional and friendly property maintenance, key-holding and development services whilst also providing a high level of customer service. We want to enable our clients to feel a "peace of mind" with their property / properties. We strive to also create and build upon lasting relationships with all of our clients.'
      },
      section2: {
        title: "Our Core Values",
        text: {
          text1: "Customer Service",
          text2: "Commitment to Quality",
          text3: "Affordability",
          text4: "Reliability"
        }
      }
    },
    ourServices: {
      development: {
        title: "Development",
        text:
          "Our Development Team with over 10 years’ experience on the Island, sources sites and co- ordinates either new build, refurbishment or modernisation projects with our team of        lawyers, architects and developers. This ranges from        apartments through to country estates."
      },
      maintenance: {
        title: "Maintenance",
        text1:
          "Our Property maintenance division offers a range of services to keep your home in excellent condition. We can fix, repair and revitalise. We carry out the odd jobs as well as taking on the larger projects. No project is too small! Our “Mr fix it” team can tackle most issues ranging from…",
        text2:
          "And more. We can also help to co-ordinate contractors required for the larger projects as well.",
        list: [
          "Gardening & watering maintenance",
          "Fencing",
          "Pool cleaning & maintenance",
          "Painting & decorating",
          "Odd-jobs around your home",
          "Rubbish clearance",
          "Jet washing"
        ]
      },
      keyHolding: {
        title: "Key-holding",
        text:
          "Our Key-holding service involves your “peace of mind” package whereby we will hold your keys, visit your property once a month, inspect and check to see if there are any problems and  we will send you a monthly report to update you. Call us now     to find out more…"
      }
    },
    aboutUs: {
      title: "About Us",
      text:
        "We are a family run property maintenance, development and key-holding business established in Palma, Mallorca. We represent a team of professionals with a passion and commitment to provide high standards of service to our clients and to offer a “peace of mind” in their home."
    },
    ourTeam: {
      title: "Our Team",
      text: [
        "Hi there, we are Jess and Antonio",
        "With Jess’s background in business management and property and Antonio’s background in property maintenance, we are the ideal team to provide all the support and solutions for your property requirements.",
        "So, call us now on +34 648 711 395",
        "Come join the team!",
        "If you would like to come work with us and join our team, please send us your CV to coollivingproperties@gmail.com"
      ]
    },
    contactUs: {
      title: "Contact Us",
      openingTimes: "Mon-Fri 09:00-17:00"
    }
  };
  render() {
    const {
      language,
      links,
      titleSection,
      ourServices,
      aboutUs,
      ourTeam,
      contactUs
    } = this.state;
    const coreValues = titleSection.section2;
    return (
      <div>
        <div
          id="navBar-container"
          className="navBar-container navBar-height flex-box"
        >
          <section class="flags-container">
            <section
              id="language-choices-container"
              class="language-choices-container flex-box"
            >
              <div
                id="en"
                className="flag left checked"
                onClick={() => this.changeLanguage("English")}
              >
                {/* <img src={unitedKingdomFlag} alt="English" /> */}
                <h3>EN</h3>
              </div>
              <div
                id="es"
                className="flag right"
                onClick={() => this.changeLanguage("Spanish")}
              >
                {/* <img src={spanishFlag} alt="Spanish" /> */}
                <h3>ES</h3>
              </div>
            </section>
          </section>
          <div className="link-container flex-box-column">
            <h4 onClick={() => this.scrollIntoView("home")}>{links.Nav1}</h4>
          </div>
          <div className="link-container flex-box-column">
            <h4 onClick={() => this.scrollIntoView("aboutUs")}>{links.Nav2}</h4>
          </div>
          <div className="link-container flex-box-column">
            <h4 onClick={() => this.scrollIntoView("ourServices")}>
              {links.Nav3}
            </h4>
          </div>
          <div id="logo-container" className="logo-container">
            <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
          </div>
          <div className="link-container flex-box-column">
            <h4 onClick={() => this.scrollIntoView("aboutUs")}>{links.Nav4}</h4>
          </div>
          <div className="link-container flex-box-column">
            <h4 onClick={() => this.scrollIntoView("photosOfOurWork")}>
              {links.Nav5}
            </h4>
          </div>
          <div className="link-container flex-box-column">
            <h4 onClick={() => this.scrollIntoView("contactUs")}>
              {links.Nav6}
            </h4>
          </div>
          <div class="slideInMenu">
            <Menu right>
              <ul>
                <li>
                  <h5 onClick={() => this.scrollIntoView("home")}>
                    {links.Nav1}
                  </h5>
                </li>
                <li>
                  <h5 onClick={() => this.scrollIntoView("aboutUs")}>
                    {links.Nav2}
                  </h5>
                </li>
                <li>
                  <h5 onClick={() => this.scrollIntoView("ourServices")}>
                    {links.Nav3}
                  </h5>
                </li>
                <li>
                  <h5 onClick={() => this.scrollIntoView("aboutUs")}>
                    {links.Nav4}
                  </h5>
                </li>
                <li>
                  <h5 onClick={() => this.scrollIntoView("photosOfOurWork")}>
                    {links.Nav5}
                  </h5>
                </li>
                <li>
                  <h5 onClick={() => this.scrollIntoView("contactUs")}>
                    {links.Nav6}
                  </h5>
                </li>
                <li>
                  <section
                    id="language-choices-container"
                    class="language-choices-container flex-box"
                  >
                    <div
                      id="en-side"
                      className="flag left checked"
                      onClick={() => this.changeLanguage("English")}
                    >
                      {/* <img src={unitedKingdomFlag} alt="English" /> */}
                      <h3>EN</h3>
                    </div>
                    <div
                      id="es-side"
                      className="flag right"
                      onClick={() => this.changeLanguage("Spanish")}
                    >
                      {/* <img src={spanishFlag} alt="Spanish" /> */}
                      <h3>ES</h3>
                    </div>
                  </section>
                </li>
              </ul>
            </Menu>
          </div>
        </div>
        {/* <NavBar /> */}
        <section id="home">
          <TitleSection
            section1={JSON.stringify(titleSection.section1)}
            section2={JSON.stringify(titleSection.section2)}
            language={language}
            changeLanguage={this.changeLanguage}
          />
        </section>
        <section id="ourServices">
          <ServiceSection
            development={JSON.stringify(ourServices.development)}
            maintenance={JSON.stringify(ourServices.maintenance)}
            keyHolding={JSON.stringify(ourServices.keyHolding)}
          />
        </section>
        <section id="aboutUs" path="/aboutUs" class="aboutUs">
          <AboutUsSection
            aboutUs={JSON.stringify(aboutUs)}
            coreValues={JSON.stringify(coreValues)}
          />
          <OurTeamSection ourTeam={JSON.stringify(ourTeam)} />
        </section>
        <section id="photosOfOurWork">
          <PhotosOfWorkSection />
        </section>
        <section id="contactUs" className="contact-us">
          <ContactUsSection contactUs={JSON.stringify(contactUs)} />
        </section>
      </div>
    );
  }

  changeLanguage = language => {
    localStorage.setItem("language", language);
    window.location.replace("/");
  };

  componentDidMount() {
    let { language } = this.state;

    language =
      localStorage.getItem("language") === null
        ? "English"
        : localStorage.getItem("language");

    if (language !== "English") {
      document.getElementById("en").classList.remove("checked");
      document.getElementById("es").classList.add("checked");
      document.getElementById("en-side").classList.remove("checked");
      document.getElementById("es-side").classList.add("checked");

      getHomePageContent(language).then(data => {
        this.setState({
          links: {
            Nav1: data.navBar[0].Nav1,
            Nav2: data.navBar[0].Nav2,
            Nav3: data.navBar[0].Nav3,
            Nav4: data.navBar[0].Nav4,
            Nav5: data.navBar[0].Nav5,
            Nav6: data.navBar[0].Nav6
          },
          titleSection: {
            section1: {
              title: data.titleSection[0].Title,
              text: data.titleSection[0].Text
            },
            section2: {
              title: data.titleSection[1].Title,
              text: {
                text1: data.titleSection[1].Text1,
                text2: data.titleSection[1].Text2,
                text3: data.titleSection[1].Text3,
                text4: data.titleSection[1].Text4
              }
            }
          },
          ourServices: {
            development: {
              title: data.ourServices[0].Title,
              text: data.ourServices[0].Text
            },
            maintenance: {
              title: data.ourServices[2].Title,
              text1: data.ourServices[2].Text1,
              text2: data.ourServices[2].Text1,
              list: [
                data.ourServices[2].List1,
                data.ourServices[2].List2,
                data.ourServices[2].List3,
                data.ourServices[2].List4,
                data.ourServices[2].List5,
                data.ourServices[2].List6,
                data.ourServices[2].List7
              ]
            },
            keyHolding: {
              title: data.ourServices[1].Title,
              text: data.ourServices[1].Text
            }
          },
          aboutUs: {
            title: data.aboutUs[0].Title,
            text: data.aboutUs[0].Text
          },
          ourTeam: {
            title: data.ourTeam[0].Title,
            text: [
              data.ourTeam[0].Text1,
              data.ourTeam[0].Text2,
              data.ourTeam[0].Text3,
              data.ourTeam[0].Text4,
              data.ourTeam[0].Text5
            ]
          },
          contactUs: {
            title: data.contactUs[0].Title,
            openingTimes: data.contactUs[0].OpeningTimes
          }
        });
      });
    }
  }

  // componentDidUpdate() {
  //   const { language } = this.state;
  //   console.log(language, "language on mount");
  // }

  scrollIntoView = id => {
    document.getElementById(id).scrollIntoView();
  };
}

export default Homepage;
