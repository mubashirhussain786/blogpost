import React from "react";
import "./CoverpostContent.css";
import image from "../../../Assets/Group 4.png";

const CoverpostContent = () => {
  return (
    <div>
      <img src={image} alt="" className="cover-post-img" />
    </div>
  );
};

export default CoverpostContent;
