import React from "react";
import "./FreindsSection.css";
import { infoData } from "../pages/Data";

const FrendsSection = () => {
  return (
      <>
          <div className="freinds--section" >
              <h1 className="freinds--section_title" >Freinds</h1>
      {infoData.map((user) => (
        <>
            <div className="freinds--section_details" key={user.id}>
              <img src={user.ProfilePic} alt="" className="freinds--sections_img" />
              <div className="freinds--section_name">
              <h1 className="freinds--section_name">{user.DisplayName}</h1>

              </div>
            </div>
        </>
      ))}
      </div>
    </>
  );
};

export default FrendsSection;
