import React from "react";
import coverphoto from "../../Assets/Group 4.png";
import "./Coverphoto.css";

const Coverphoto = () => {
  return (
    <div>
      <img src={coverphoto} alt="CoverPhoto" className="cover-photo" />
    </div>
  );
};

export default Coverphoto;
