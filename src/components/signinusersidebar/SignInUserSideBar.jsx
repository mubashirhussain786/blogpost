import React from "react";
import "./SignInUserSideBar.css";
import Feed from "./feed/Feed";
import PagesYoulike from "./pagesYouLike/PagesYoulike";

const SignInUserSideBar = () => {
  return (
    <div className="SignInUserSideBar">
      <Feed />
      <PagesYoulike />
    </div>
  );
};

export default SignInUserSideBar;
