import React from "react";
import "./Timeline.css";

import Index from "../../components/coverposts/Index";
import Stories from "../../components/Stories/Stories";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UploadPost from "../../components/upload-post/UploadPost";

const TimeLine = () => {
  return (
    <div>
      <div className="top">
        <Navbar />
      </div>
      <div className="component">
        <div className="left">
          <Sidebar />
        </div>
        <div className="center">
          <UploadPost />
          <Index />
          <Index />
        </div>
        <div className="right">
          <Stories />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
