import React, { Component } from "react";
import { sendEmail } from "../../functions.js";
import { addCustomerQuery } from "../../utils.js";
import $ from "jquery";
import { ReCaptcha } from 'react-recaptcha-google'
import { reCaptchaConfig } from "../../config.js"
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
const tickGif = require("../../assets/tick-gif-2-no-loop.gif");
const loadingHouse = require("../../assets/loading-house-2.gif");
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
    bodyMail: "",
    emailSent: false
  };
  render() {
    const { contactUs, developmentTitle, maintenanceTitle, keyHoldingTitle } = this.props;
    const contactUsParsed = JSON.parse(contactUs);
    const title = contactUsParsed.title;
    const openingTimes = contactUsParsed.openingTimes;
    const placeHolders = contactUsParsed.placeHolders;
    return (
      <div id="contact-us-section" className="contact-us-section half-screen">
        <section class="contact-us-flex flex-box">
          <section className="contact-us-container width-full">
            <h1>{title}</h1>
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
          <section className="img-container flex-box-column-around">
            <form id='contact-form' class='contact-form' onSubmit={() => this.sendEmailEnquriy()}>
              <div className="input-row row">
                <div className="width-full flex-box-column">
                  <input
                    id="firstNameMail"
                    className="form-input"
                    type="text"
                    onChange={this.handleChange}
                    required
                    placeholder={placeHolders.firstName}
                  />
                </div>
                <div className="width-full flex-box-column">
                  <input
                    id="lastNameMail"
                    className="form-input"
                    type="text"
                    onChange={this.handleChange}
                    required
                    placeholder={placeHolders.lastName}
                  />
                </div>
              </div>
              <div className="input-row row">
                <div className="width-full flex-box-column">
                  <input
                    id="emailMail"
                    className="form-input"
                    type="email"
                    onChange={this.handleChange}
                    required
                    placeholder={placeHolders.email}
                  />
                </div>
                <div className="width-full flex-box-column">
                  <input
                    id="phoneMail"
                    className="form-input"
                    type="phone"
                    onChange={this.handleChange}
                    required
                    placeholder={placeHolders.phone}
                  />
                </div>
              </div>
              <div className="width-full flex-box multi-checkbox-3">
                <div className="inner-container flex-box row">
                  <div onClick={() => this.changeOfQuerySubj("Development")} className="option developemt curved-left border-right-none" name="Development" value="1">
                    <label>{developmentTitle}</label>
                  </div>
                  <div onClick={() => this.changeOfQuerySubj("Maintenance")} className="option maintenance border-right-none" name="Maintenance">
                    <label>{maintenanceTitle}</label>
                  </div>
                  <div onClick={() => this.changeOfQuerySubj("Key-holding")} className="option key-holding curved-right" name="Key-holding">
                    <label>{keyHoldingTitle}</label>
                  </div>
                </div>
              </div>
              <div className="flex-box-column row">
                <section className="flex-box width-full">
                  <textarea
                    id="bodyMail"
                    className="form-input query-textarea width-full"
                    type="text"
                    onChange={this.handleChange}
                    required
                    placeholder={placeHolders.query}
                  />
                </section>
              </div>
              {/* <ReCaptcha
                ref={(el) => {this.captchaDemo = el;}}
                size="normal"
                data-theme="dark"            
                render="explicit"
                sitekey={reCaptchaConfig.siteKey}
                onloadCallback={this.onLoadRecaptcha}
                verifyCallback={this.verifyCallback}
              /> */}
              <div className="flex-box row">
                <button
                  id='form-submit'
                  type="button"
                  className="button-lrg"
                  onClick={() => this.sendEmailEnquriy()}
                >
                  {placeHolders.submit}
                </button>
              </div>
            </form>
            <section id='loading-icon-container' class='loading-icon-container flex-box-column-center hidden'>
              <div>
              <img id='loading-icon' src={loadingHouse} alt='Loading...' />
            </div>
            </section>
            <section id='form-completed-container' class='form-completed-container' hidden='hidden'>
              <img src={tickGif} alt='form is completed' />
              <section>
                <text>
                  {placeHolders.success1}
                </text>
                <br />
                <br />
                <text>
                  {placeHolders.success2}
                </text>
              </section>
            </section>
          </section>
        </section>
      </div>
    );
  }

  componentDidMount() {
  //   if (this.captchaDemo) {
  //     console.log("started, just a second...")
  //     this.captchaDemo.reset();
  // }
  }
  // handleApiLoaded(map, maps, places) {
  //   console.log("handling api");
  //   // // Get bounds by our places
  //   // const bounds = this.getMapBounds(map, maps, places);
  //   // // Fit map to bounds
  //   // map.fitBounds(bounds);
  //   // // Bind the resize listener
  //   // this.bindResizeListener(map, maps, bounds);
  // }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  changeOfQuerySubj = (emailSubj) => {
    this.setState({ subjMail: emailSubj });

    $(".option").each(function() {
      const _this = $(this)
      _this.removeClass("checked-subj");
    });

    $(`[name=${emailSubj}]`).addClass("checked-subj");
    
  }

//   onLoadRecaptcha = () => {
//     if (this.captchaDemo) {
//         this.captchaDemo.reset();
//     }
// }

  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }

  sendEmailEnquriy = async () => {
    $("#contact-form").attr("hidden", "hidden");
    $("#loading-icon-container").removeClass("hidden")
    const {
      firstNameMail,
      lastNameMail,
      emailMail,
      phoneMail,
      subjMail,
      bodyMail,
      emailSent
    } = this.state;

    const nameMail = `${firstNameMail} ${lastNameMail}`.trim();
    let queryId = "";
    let errMsg = "";
    if (emailSent === false) { 
    if (firstNameMail !== "") {
      errMsg += "First Name is required\n";
    }
    if (emailMail !== "") {
      errMsg += "Email is required\n";
    }
    if (subjMail !== "") {
      errMsg += "A subject is required\n";
    }
    if (bodyMail !== "") {
      errMsg += "Please write a query\n";
    }
    if (errMsg !== "") {
      try {
        try {
          console.log(subjMail, "subjMail");
          await addCustomerQuery(
            firstNameMail,
            lastNameMail,
            emailMail,
            phoneMail,
            subjMail,
            bodyMail
          ).then(result => {
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
            this.setState({ emailSent: true });
            $("#contact-form").attr("hidden", "hidden");
            $("#loading-icon-container").addClass("hidden")
            $("#form-completed-container").removeAttr("hidden");
          });
        }
      } catch (err) {
        alert('There was an error while submitting this query.');
      }
    } else {
      alert(errMsg);
    }
  }
  else {
    alert('Query has already been submitted.');
  }
  };
}

export default ContactUsSection;
