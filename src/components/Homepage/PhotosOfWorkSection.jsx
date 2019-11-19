import React, { Component } from "react";
import "../../styling/Homepage/_photo-gallery-section.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const coolLivingPropertiesLogo = require("../../assets/cool-living-properties-logo.png");
const sampleImage = require("../../assets/sample-image.png");

class PhotosOfWorkSection extends Component {
  render() {
    return (
      <div
        id="photo-gallery-section"
        className="photo-gallery-section three-quarters-screen"
      >
        {/* <h3>Photo Gallery</h3> */}
        <Carousel className="photo-carousel">
          <div className="carousel-img-container">
            <img alt="Cool Living Properties" src={coolLivingPropertiesLogo} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          {/* <div>
            <img alt="Cool Living Properties" src={sampleImage} />
            <p className="legend">Cool Living Properties</p>
          </div> */}
        </Carousel>
      </div>
    );
  }
}

export default PhotosOfWorkSection;
