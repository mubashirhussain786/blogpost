import React from "react";
import "./CoverpostComment.css";
import LikeCommentShare from "./commentbox/likecommentshare/LikeCommentShare";
import Commentbox from "./commentbox/Commentbox";

const CoverpostComment = () => {
  return (
    <div>
      <LikeCommentShare />
      <Commentbox />
    </div>
  );
};

export default CoverpostComment;
