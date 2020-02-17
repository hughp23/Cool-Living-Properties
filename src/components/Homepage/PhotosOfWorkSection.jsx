import React, { Component } from "react";
import "../../styling/Homepage/_photo-gallery-section.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const img_1 = require("../../assets/photo-gallery/photo_1.PNG");
const img_2 = require("../../assets/photo-gallery/photo_2.PNG");
const img_3 = require("../../assets/photo-gallery/photo_3.PNG");
const img_4 = require("../../assets/photo-gallery/photo_4.PNG");
const img_5 = require("../../assets/photo-gallery/photo_5.PNG");
const img_6 = require("../../assets/photo-gallery/photo_6.PNG");
const img_7 = require("../../assets/photo-gallery/photo_7.PNG");
const img_8 = require("../../assets/photo-gallery/photo_8.PNG");
const img_9 = require("../../assets/photo-gallery/photo_9.PNG");
const img_10 = require("../../assets/photo-gallery/photo_10.PNG");
const img_11 = require("../../assets/photo-gallery/photo_11.PNG");

class PhotosOfWorkSection extends Component {
  render() {
    return (
      <div id="photo-gallery-section" className="photo-gallery-section">
        {/* <h3>Photo Gallery</h3> */}
        <Carousel className="photo-carousel">
          <div className="carousel-img-container">
            <img alt="1" src={img_1} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="2" src={img_2} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="3" src={img_3} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="4" src={img_4} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="5" src={img_5} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="6" src={img_6} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="7" src={img_7} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="8" src={img_8} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="9" src={img_9} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="10" src={img_10} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
          <div className="carousel-img-container">
            <img alt="11" src={img_11} />
            {/* <p className="legend">Cool Living Properties</p> */}
          </div>
        </Carousel>
      </div>
    );
  }
}

export default PhotosOfWorkSection;
