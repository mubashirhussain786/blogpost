import React from "react";
import "./CoverpostTop.css";
import { BiDotsHorizontal } from "react-icons/bi";
import image from "../../../Assets/avatar.png";
import { useNavigate } from "react-router-dom";

const CoverpostTop = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cover-post-top">
        <div className="name-img" onClick={() => navigate("/otheruser")}>
          <img src={image} alt="" />
          <h3>display Name</h3>
        </div>
        <BiDotsHorizontal />
      </div>
      <div className="caption">
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          repellat quod ipsa?
        </h3>
      </div>
    </>
  );
};

export default CoverpostTop;
