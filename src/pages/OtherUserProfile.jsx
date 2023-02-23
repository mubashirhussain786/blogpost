import React from "react";
import "./OtherUserProfile.css";
import Navbar from "../components/Navbar";
import CoverPhoto from "../components/CoverPhoto";
import ProfilePic from "../components/ProfilePic";
import StoriesButton from "../components/StoriesButton";
import UserSidebar from "../components/UserSidebar";
import UserPosts from "../components/UserPosts";
import FrendsSection from "../components/FrendsSection";

const OtherUserProfile = () => {
  return (
    <div className="other-user-profile">
      <Navbar />
      <CoverPhoto />
      <div className="other-user-buttons">
        <ProfilePic />
        <StoriesButton />
      </div>
      <div className="user-details">
        <div className="usersidebar">
          <UserSidebar />
        </div>
        <div className="userPost">
          <UserPosts />
        </div>
        <div className="userfreind">
          <FrendsSection />
        </div>
      </div>
    </div>
  );
};

export default OtherUserProfile;
