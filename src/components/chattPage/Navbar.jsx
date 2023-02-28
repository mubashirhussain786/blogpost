import React from "react";
import "./Navbar.css";
import { FaUsers } from "react-icons/fa";
import { MdOutlineMotionPhotosOn } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAddIcCall } from "react-icons/md";
import { MdVideoCall } from "react-icons/md";
function Navbar() {
  return (
    <>
      <div className="navbar_main">
        <div className="profile_side">
          <div className="user_profile">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd1eXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="image"
            />
            <h1>hello bro</h1>
          </div>
          <div className="user_profile_icons">
            <FaUsers className="user_icon" />
            <MdOutlineMotionPhotosOn className="user_icon" />
            <MdMessage className="user_icon" />
            <BsThreeDotsVertical className="user_icon" />
          </div>
        </div>
        <div className="userProfile_call_main">
          <div className="userProfile_name">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd1eXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="image"
            />
            <h1>Nusrat Fateh Ali</h1>
          </div>
          <div className="calling_icon">
            <MdAddIcCall className="audiocall_icon" />
            <MdVideoCall className="videocall_icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
