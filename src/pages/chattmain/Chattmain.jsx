import React from "react";
import "./Chattmain.css";
// import profile from "./assets/msgProfile.png";

import Navbar from "../../components/chattPage/chatnavbar/Navbar";
import UserSide from "../../components/chattPage/chattuserside/UserSide";
import Message from "../../components/chattPage/message/Message";
function Chattmain() {
  return (
    <>
      <div className="chatt_main_page">
        <Navbar />
        <div className="userSide_msgs">
          {/* user Section */}
          <UserSide />
          {/* user Section */}
          <Message />
        </div>
      </div>
    </>
  );
}

export default Chattmain;
