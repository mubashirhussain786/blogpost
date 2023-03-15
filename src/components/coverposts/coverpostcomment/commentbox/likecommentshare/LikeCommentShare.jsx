import React, { useState } from "react";
import "./LikeCommentShare.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";

const LikeCommentShare = () => {
  const [fillheart, setFillheart] = useState(false);
  return (
    <div className="LikeCommentShare">
      <AiOutlineHeart
        className={fillheart ? <AiFillHeart /> : ""}
        onClick={() => setFillheart(!fillheart)}
      />

      <BsFillChatRightDotsFill />
      <FaShare />
    </div>
  );
};

export default LikeCommentShare;
