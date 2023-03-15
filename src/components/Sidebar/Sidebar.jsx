import React from "react";
import "./Sidebar.css";
import User from "./user/User";
import Feed from "./feed/Feed";
import PageYoulike from "./pagesYouLike/PagesYoulike";
import Logout from "../buttons/Logoutbtn/Logout";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <User />
        <Feed />
        <PageYoulike />
        <Logout />
      </div>
    </>
  );
};

export default Sidebar;
