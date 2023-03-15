import React from "react";
import "./UserSide.css";
import profile from "../../../Assets/msgProfile.png";

import "../message/Message.css";
import { useNavigate } from "react-router-dom";

function UserSide() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/mymessage");
  };
 
  return (
    <>
      <div className="user_side">
        <div className="message_sec"></div>
        <div className="search">
          <input type="search" placeholder="search or start new chatt" />
        </div>
        <div className="useprofile_name" onClick={handleClick}>
          <img src={profile} alt="img" />
          <h1>Lorem Ipsum dollar</h1>
        </div>
        <div className="useprofile_name" onClick={handleClick}>
          <img src={profile} alt="img" />
          <h1>Lorem Ipsum bc</h1>
        </div>
        <div className="useprofile_name" onClick={handleClick}>
          <img src={profile} alt="img" />
          <h1>John Elia</h1>
        </div>
        <div className="useprofile_name" onClick={handleClick}>
          <img src={profile} alt="img" />
          <h1>Nusrat Fateh ali</h1>
        </div>
        <div className="useprofile_name" onClick={handleClick}>
          <img src={profile} alt="img" />
          <h1>Atif Aslam</h1>
        </div>
        <div className="useprofile_name" onClick={handleClick}>
          <img src={profile} alt="img" />
          <h1>Nora Fathe</h1>
        </div>
        <div className="useprofile_name" onClick={handleClick}>
          <img src={profile} alt="img" />
          <h1>American Boy</h1>
        </div>
      </div>
    </>
  );
}

export default UserSide;
