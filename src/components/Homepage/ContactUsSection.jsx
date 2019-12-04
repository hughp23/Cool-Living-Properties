import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../../styling/Homepage/_contact-us-section.scss";
import Marker from "./Marker";
const phoneImg = require("../../assets/phone.png");
const emailImg = require("../../assets/email.png");
const facebookLogo = require("../../assets/social-media-logos/facebook.png");
const instaLogo = require("../../assets/social-media-logos/instagram.png");
const linkedinLogo = require("../../assets/social-media-logos/linkedin.png");

class ContactUsSection extends Component {
  state = {
    center: { lat: 39.56, lng: 3.046869 },
    zoom: 10
  };
  render() {
    const { contactUs } = this.props;
    const contactUsParsed = JSON.parse(contactUs);
    const title = contactUsParsed.title;
    return (
      <div id="contact-us-section" className="contact-us-section half-screen">
        <section className="contact-us-container">
          <h3>{title}</h3>
          <section className="contact-container flex-box-column">
            <contact className="flex-box-between">
              <img alt="phone" src={phoneImg} />
              <h4>+34 648 711 395</h4>
            </contact>
            <a href="mailto:coollivingproperties@gmail.com">
              <contact className="flex-box-between">
                <img alt="email" src={emailImg} />
                <h4>coollivingproperties@gmail.com</h4>
              </contact>
            </a>
            <contact className="flex-box-between">
              <img alt="facebook" src={facebookLogo} />
              <h4>Facebook</h4>
            </contact>
            <contact className="flex-box-between">
              <img alt="instagram" src={instaLogo} />
              <h4>Instagram</h4>
            </contact>
            <contact className="flex-box-between">
              <img alt="linkedin" src={linkedinLogo} />
              <h4>Linkedin</h4>
            </contact>
          </section>
        </section>
        <section className="map-size" style={{ height: "100%", width: "100%" }}>
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
          <GoogleMapReact
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
          </GoogleMapReact>
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
