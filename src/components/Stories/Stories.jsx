import React from "react";
import "./Stories.css";
import StoriesMain from "./storiesMain/StoriesMain";
import StoriesTop from "./stories-top/StoriesTop";

const Stories = () => {
  return (
    <div className="stories--section">
      <StoriesTop />
      <StoriesMain />
    </div>
  );
};

export default Stories;
