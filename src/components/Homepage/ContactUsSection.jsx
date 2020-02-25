import React, { Component } from "react";
import { sendEmail } from "../../functions.js";
import { addCustomerQuery } from "../../utils.js";
//import GoogleMapReact from "google-map-react";
import "../../styling/Homepage/_contact-us-section.scss";
//import Marker from "./Marker";
const phoneImg = require("../../assets/phone.png");
const emailImg = require("../../assets/email.png");
const facebookLogo = require("../../assets/social-media-logos/facebook.png");
const instaLogo = require("../../assets/social-media-logos/instagram.png");
const linkedinLogo = require("../../assets/social-media-logos/linkedin.png");
//const openDoor = require("../../assets/open-door.png");
const openSign = require("../../assets/open-sign.png");
// const mallorcaMap = require("../../assets/mallorca-map.png");

class ContactUsSection extends Component {
  state = {
    center: { lat: 39.56, lng: 3.046869 },
    zoom: 9,
    firstNameMail: "",
    lastNameMail: "",
    emailMail: "",
    phoneMail: "",
    subjMail: "",
    bodyMail: ""
  };
  render() {
    const { contactUs } = this.props;
    const contactUsParsed = JSON.parse(contactUs);
    const title = contactUsParsed.title;
    const openingTimes = contactUsParsed.openingTimes;
    return (
      <div id="contact-us-section" className="contact-us-section half-screen">
        <section class="contact-us-flex flex-box">
          <section className="contact-us-container width-full">
            <h3>{title}</h3>
            <section className="contact-container flex-box-column">
              <a>
                <contact className="flex-box-between">
                  <img alt="phone" src={phoneImg} />
                  <h4>+34 648 711 395</h4>
                </contact>
              </a>
              <a
                className="pointer"
                href="mailto:coollivingproperties@gmail.com"
              >
                <contact className="flex-box-between">
                  <img alt="email" src={emailImg} />
                  <h4>coollivingproperties@gmail.com</h4>
                </contact>
              </a>
              <a
                className="pointer"
                href="https://www.facebook.com/Coollivingproperties/"
              >
                <contact className="flex-box-between">
                  <img alt="facebook" src={facebookLogo} />
                  <h4>@Coollivingproperties</h4>
                </contact>
              </a>
              <a
                className="pointer"
                href="https://www.instagram.com/coollivingproperties/"
              >
                <contact className="flex-box-between">
                  <img alt="instagram" src={instaLogo} />
                  <h4>@coollivingproperties</h4>
                </contact>
              </a>
              <a
                className="pointer"
                href="https://www.linkedin.com/in/cool-living-properties-93a512196/"
              >
                <contact className="flex-box-between">
                  <img alt="linkedin" src={linkedinLogo} />
                  <h4>Cool Living Properties</h4>
                </contact>
              </a>
              <a>
                <contact className="flex-box-between">
                  <img alt="Opening Times" src={openSign} />
                  <h4>{openingTimes}</h4>
                </contact>
              </a>
            </section>
          </section>
        </section>
        <section className="map-size width-full flex-box-column-around">
          {/* <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDGCuXe-BpifRSBcMOsWAn-aALXQWFfPXs"
            }}
            defaultCenter={[34.0522, -118.2437]}
            // defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals={true}
            // onGoogleApiLoaded={({ map, maps, places }) =>
            //   this.handleApiLoaded(map, maps, places)
            // }
          ></GoogleMapReact> */}
          {/* <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDGCuXe-BpifRSBcMOsWAn-aALXQWFfPXs"
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) =>
              this.handleApiLoaded(map, maps)
            }
          >
            <Marker
              lat={39.84}
              lng={2.53}
              text="My Marker"
              className="map-marker-container"
            />
          </GoogleMapReact> */}
          <section className="img-container flex-box-column-around">
            {/* <img
              title="See shaded area for where we work"
              src={mallorcaMap}
              alt="Map of Mallorca"
            /> */}
            <form>
              <div className="flex-box">
                <div className="width-full flex-box-column">
                  <label>First Name</label>
                  <input
                    id="firstNameMail"
                    className="form-input"
                    type="text"
                    onChange={this.hanedlChange}
                    required
                  />
                </div>
                <div className="width-full flex-box-column">
                  <label>Last Name</label>
                  <input
                    id="lastNameMail"
                    className="form-input"
                    type="text"
                    onChange={this.hanedlChange}
                    required
                  />
                </div>
              </div>
              <div className="flex-box">
                <div className="width-full flex-box-column">
                  <label>Email</label>
                  <input
                    id="emailMail"
                    className="form-input"
                    type="email"
                    onChange={this.hanedlChange}
                    required
                  />
                </div>
                <div className="width-full flex-box-column">
                  <label>Phone</label>
                  <input
                    id="phoneMail"
                    className="form-input"
                    type="phone"
                    onChange={this.hanedlChange}
                    required
                  />
                </div>
              </div>
              <div className="width-full flex-box-column">
                <label>Subject</label>
                <input
                  id="subjMail"
                  className="form-input"
                  type="text"
                  onChange={this.hanedlChange}
                  required
                />
              </div>
              <div className=" width-full flex-box-column">
                <label>Query</label>
                <textarea
                  id="bodyMail"
                  className="form-input query-textarea"
                  type="text"
                  onChange={this.hanedlChange}
                  required
                />
              </div>
              <div class="g-recaptcha" data-sitekey="your_site_key"></div>
              <button
                type="button"
                className="button-lrg"
                onClick={() => this.sendEmailEnquriy()}
              >
                Send Query
              </button>
            </form>
          </section>
        </section>
      </div>
    );
  }

  componentDidMount() {}
  handleApiLoaded(map, maps, places) {
    console.log("handling api");
    // // Get bounds by our places
    // const bounds = this.getMapBounds(map, maps, places);
    // // Fit map to bounds
    // map.fitBounds(bounds);
    // // Bind the resize listener
    // this.bindResizeListener(map, maps, bounds);
  }

  hanedlChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  sendEmailEnquriy = async () => {
    const {
      firstNameMail,
      lastNameMail,
      emailMail,
      phoneMail,
      subjMail,
      bodyMail
    } = this.state;

    const nameMail = `${firstNameMail} ${lastNameMail}`.trim();
    let queryId = "";
    if (
      firstNameMail !== "" &&
      lastNameMail !== "" &&
      emailMail !== "" &&
      phoneMail !== "" &&
      subjMail !== "" &&
      bodyMail !== ""
    ) {
      try {
        try {
          await addCustomerQuery(
            firstNameMail,
            lastNameMail,
            emailMail,
            phoneMail,
            subjMail,
            bodyMail
          ).then(result => {
            console.log(result, "result");
            queryId = result;
          });
        } finally {
          await sendEmail(
            queryId,
            nameMail,
            emailMail,
            phoneMail,
            subjMail,
            bodyMail
          ).then(result => {
            console.log(result, "result");
          });
        }
      } catch (err) {
        console.log(err, "err");
      }
    } else {
      alert("All fields are required to be filled in.");
    }
  };
}

export default ContactUsSection;
