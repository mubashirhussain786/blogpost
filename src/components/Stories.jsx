import React from "react";
import image from "../Assets/3.jpg";
import "./Stories.css";

const Stories = () => {
  return (
    <div className="stories--section">
      <h1 className="stories--section_heading">stories</h1>
      <div className="stories--section_peoples">
        <div className="stories--section__border">
        <img src={image} alt="" className="stories--image" />
        </div>
        <h1>Lorem Ipsum</h1>
      </div>
      <div className="stories--section_peoples">
        <div className="stories--section__border">
        <img src={image} alt="" className="stories--image" />
        </div>
        <h1>Lorem Ipsum</h1>
      </div>
      <div className="stories--section_peoples">
        <div className="stories--section__border">
        <img src={image} alt="" className="stories--image" />
        </div>
        <h1>Lorem Ipsum</h1>
      </div>
      <div className="stories--section_peoples">
        <div className="stories--section__border">
        <img src={image} alt="" className="stories--image" />
        </div>
        <h1>Lorem Ipsum</h1>
      </div>
      <div className="stories--section_peoples">
        <div className="stories--section__border">
        <img src={image} alt="" className="stories--image" />
        </div>
        <h1>Lorem Ipsum</h1>
      </div>
      <div className="stories--section_peoples">
        <div className="stories--section__border">
        <img src={image} alt="" className="stories--image" />
        </div>
        <h1>Lorem Ipsum</h1>
      </div>
      <div className="stories--section_peoples">
        <div className="stories--section__border">
        <img src={image} alt="" className="stories--image" />
        </div>
        <h1>Lorem Ipsum</h1>
      </div>
   
      
    </div>
  );
};

export default Stories;
