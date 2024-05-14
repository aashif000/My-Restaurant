import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        CuisineHaven Restaurant, where passion meets palate in every dish we serve. Nestled in the heart of Coimbatore, Aashif's Restaurant is more than just a dining destination; it's a culinary journey infused with tradition, innovation, and heartfelt hospitality.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Since 2024, CuisineHaven Restaurant has been a culinary beacon, drawing inspiration from the rich tapestry of flavors found in India's diverse culinary landscape. Founded by Aashif, our restaurant is a labor of love, born from a deep-seated passion for exceptional food and genuine hospitality.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
