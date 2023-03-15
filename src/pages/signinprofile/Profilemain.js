import React from "react";
import Coverphoto from "../../components/coverPhoto/Coverphoto";
import Profile from "../../components/profilePic/Profile";
import Addstories from "../../components/buttons/addstories/Addstories";
import "./Profilemain.css";
import Index from "../../components/coverposts/Index";
import SignInUserSideBar from "../../components/signinusersidebar/SignInUserSideBar";
import FreindsSection from "../../components/FreindsSection/FreindsSection";
import Editprofile from "../../components/buttons/editprofile/Editprofile";

const Profilemain = () => {
  return (
    <div>
      <Coverphoto />
      <div className="profileinfo">
        <Profile />
        <div className="buttons">
          <Addstories />
          <Editprofile />
        </div>
      </div>
      <div className="main-content">
        <SignInUserSideBar />
        <Index />
        <FreindsSection />
      </div>
    </div>
  );
};

export default Profilemain;
