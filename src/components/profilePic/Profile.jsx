import React from "react";
import profileImage from "../../Assets/Group 4.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img src={profileImage} alt="" className="profile-image" />
      <h1>Mubashir</h1>
    </div>
  );
};

export default Profile;
