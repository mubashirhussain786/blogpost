import React from "react";
import "./Chattmain.css";
// import profile from "./assets/msgProfile.png";

import Navbar from "../components/chattPage/Navbar";
import UserSide from "../components/chattPage/UserSide";
import Message from "../components/chattPage/Message";
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
