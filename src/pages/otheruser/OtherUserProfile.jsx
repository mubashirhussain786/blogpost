import React from "react";
import "./OtherUserProfile.css";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/profilePic/Profile";
import SignInUserSideBar from "../../components/signinusersidebar/SignInUserSideBar";
import Index from "../../components/coverposts/Index";
import FreindsSection from "../../components/FreindsSection/FreindsSection";
import Addfreind from "../../components/buttons/addfreind/Addfreind";
import Coverphoto from "../../components/coverPhoto/Coverphoto";
import Message from "../../components/buttons/message/Message";

const OtherUserProfile = () => {
  return (
    <div>
      <Navbar />
      <Coverphoto />

      <div className="profile_section">
        <div className="user-pic_details">
          <Profile />
          {/* <UserDetails /> */}
        </div>
        <div className="bton">
          <Addfreind />
          <Message />
        </div>
      </div>

      <div className="other-user">
        <SignInUserSideBar />
        <Index />
        <FreindsSection />
      </div>
    </div>
  );
};

export default OtherUserProfile;
