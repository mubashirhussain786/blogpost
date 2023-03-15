import React from "react";
import "./FreindsContent.css";
import { infoData } from "../../../pages/json files/Data";
const FreindsContent = () => {
  return (
    <div>
      {infoData.map((user) => (
        <>
          <div className="freinds--section_details" key={user.id}>
            <img
              src={user.ProfilePic}
              alt=""
              className="freinds--sections_img"
            />
            <div className="freinds--section_name">
              <h1 className="freinds--section_name">{user.DisplayName}</h1>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FreindsContent;
