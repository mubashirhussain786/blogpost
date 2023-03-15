import React from "react";
import "./Commentbox.css";
import { MdSend } from "react-icons/md";
import avatar from "../../../../Assets/avatar.png";

const Commentbox = () => {
  return (
    <div className="comment-box">
      <img src={avatar} alt="" className="comment-img" />
      <div className="input-box">
        <input type="text" placeholder="place your comment" />
        <MdSend style={{ width: "20px", height: "20px" }} />
      </div>
    </div>
  );
};

export default Commentbox;
