import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../../styling/Homepage/_contact-us-section.scss";
import Marker from "./Marker";
const phoneImg = require("../../assets/phone.png");
const emailImg = require("../../assets/email.png");
const facebookLogo = require("../../assets/social-media-logos/facebook.png");
const instaLogo = require("../../assets/social-media-logos/instagram.png");
const linkedinLogo = require("../../assets/social-media-logos/linkedin.png");
const openDoor = require("../../assets/open-door.png");
const openSign = require("../../assets/open-sign.png");
const mallorcaMap = require("../../assets/mallorca-map.png");

class ContactUsSection extends Component {
  state = {
    center: { lat: 39.56, lng: 3.046869 },
    zoom: 9
  };
  render() {
    const { contactUs } = this.props;
    const contactUsParsed = JSON.parse(contactUs);
    const title = contactUsParsed.title;
    const openingTimes = contactUsParsed.openingTimes;
    return (
      <div id="contact-us-section" className="contact-us-section half-screen">
        <section className="contact-us-container width-full">
          <h3>{title}</h3>
          <section className="contact-container flex-box-column">
            <a>
              <contact className="flex-box-between">
                <img alt="phone" src={phoneImg} />
                <h4>+34 648 711 395</h4>
              </contact>
            </a>
            <a className="pointer" href="mailto:coollivingproperties@gmail.com">
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
        <section className="map-size">
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
          <section className="img-container">
            <img src={mallorcaMap} alt="Map of Mallorca" />
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
}

export default ContactUsSection;
