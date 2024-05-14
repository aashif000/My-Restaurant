import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
 

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
          The kitchen is seasoned with love.
          </p>
        </div>
        <p className="p__opensans">
        Cooking is like love. It should be entered into with abandon or not at all.
        The secret of success in life is to eat what you like and let the food fight it out inside,
        You don't have to cook fancy or complicated masterpieces - just good food from fresh ingredients,
        
        </p>
      </div>


      <div className="app__chef-sign">
        <p> Aashif </p>
        <p className="p__opensans">Chef & Founder</p> 
         
      </div>
    </div>
  </div>
);

export default Chef;
