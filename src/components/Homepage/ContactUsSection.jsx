import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../../styling/Homepage/_contact-us-section.scss";
import Marker from "./Marker";
const phoneImg = require("../../assets/phone.png");
const emailImg = require("../../assets/email.png");

class ContactUsSection extends Component {
  state = {
    center: { lat: 39.460537, lng: 3.046869 },
    zoom: 9
  };
  render() {
    return (
      <div
        id="contact-us-section"
        className="contact-us-section half-screen flex-box"
      >
        <section className="half-screen-width">
          <h3>Do Not Hesitate to Contact Us</h3>
          <section className="flex-box-column">
            <contact className="flex-box-between">
              <img alt="phone" src={phoneImg} />
              <h4>+34 648 711 395</h4>
            </contact>
            <contact className="flex-box-between">
              <a href="mailto:coollivingproperties@gmail.com">
                <img alt="email" src={emailImg} />
                <h4>coollivingproperties@gmail.com</h4>
              </a>
            </contact>
          </section>
        </section>
        <section style={{ height: "100%", width: "50vw" }}>
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
              lat={39.7}
              lng={2.745341}
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
