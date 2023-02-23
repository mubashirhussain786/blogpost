import React from "react";
import "./ProfilePic.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import profilepic from "../Assets/3.jpg";

const ProfilePic = () => {
  return (
    <>
      <div className="profile--pic">
        <div className="profile--pic_story">
          <div className="profile--pic_img">
            <img src={profilepic} alt="" className="profile--pic_img" />
          </div>
        </div>
        <div className="camera-icon_box">

          <CameraAltIcon className="camera-icon" />
        </div>

      </div>
    </>
  );
};

export default ProfilePic;
