import React from "react";
import "./SignInUserProfile.css";
import Navbar from "../components/Navbar";
import CoverPhoto from "../components/CoverPhoto";
import ProfilePic from "../components/ProfilePic";
import StoriesButton from "../components/StoriesButton";
import UserSidebar from "../components/UserSidebar";
import UserPosts from "../components/UserPosts";
import FrendsSection from "../components/FrendsSection";
const SignInUserProfile = () => {
  return (

    <div className="signiuser">
    <div>
      <Navbar />
    </div>
      <div className="signedin--user--profile">
      <CoverPhoto />
      <div className="profile">
        <ProfilePic />
        <StoriesButton />
      </div>
      <div className="signedin--user--profile_main">
        <div className="signedin--user--profile_left">
          <UserSidebar />
        </div>
        <div className="signedin--user--profile_center">
          <div className="signedin--user--profile_responsive" >
          <div className="user-sidebar_userdetails-responsive">
        <div className="user-sidebar_userdetails_heading">
          <h1>Work :</h1>
          <h1>Education :</h1>
          <h1>Work :</h1>
          <h1>Work :</h1>
        </div>
        <div className="user-sidebar_userdetails_text" >
          <p>Comrex Private Limited</p>
          <p>Bachlor's</p>
          <p>Islamabad</p>
          <p>Pakistan</p>
        </div>
      </div>
          </div>
          <UserPosts />
        </div>
        <div className="signedin--user--profile_right">
          <FrendsSection />
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default SignInUserProfile;
