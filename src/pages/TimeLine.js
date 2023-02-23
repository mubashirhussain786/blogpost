import React from "react";
import "./Timeline.css";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import Stories from "../components/Stories";
import Navbar from "../components/Navbar";

const TimeLine = () => {
  return (
    <div>
      <div className="top">
       <Navbar/>
      </div>
      <div className="component">
        <div className="left">
          <Sidebar />
        </div>
        <div className="center">
          <Posts />
        </div>
        <div className="right">
          <Stories/>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
