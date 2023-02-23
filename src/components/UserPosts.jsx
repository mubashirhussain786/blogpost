import React from "react";
import "./UserPosts.css";
import { infoData } from "../pages/Data";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import image from "../Assets/2.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SendIcon from "@mui/icons-material/Send";

const UserPosts = () => {
  const data = infoData;
  // console.log(data);
  return (
    <>
      {data.map((user) => (
        <div className="display--post" key={user.id}>
          <div className="display--post__wrapper">
            <div className="display--post_top">
              <div className="top_left">
                <img src={user.ProfilePic} alt="" className="top_left_img" />

                <div className="name_time">
                  <h1> {user.DisplayName}</h1>

                  <p>2 days ago</p>
                </div>
              </div>
              <div className="top_right">
                <MoreHorizIcon />
              </div>
            </div>
            <div className="display--post_caption">
              <p>{user.caption}</p>
            </div>
            <div className="display--post__image">
              <img src={user.postImage} alt="" className="image" />
            </div>
            <div className="display--post_like-comment-share">
              <div className="icons">
                <FavoriteIcon />
                <CommentIcon />
                <ShareIcon />
              </div>
            </div>
            <div className="display--post_comment_box">
              <img
                src={user.ProfilePic}
                alt=""
                className="display--post_comment_box-img"
              />
              <div className="display--post_comment_box_input">
                <input type="text" placeholder="Write your comment...." />
                <PhotoLibraryIcon className="iconss" />
                <SendIcon className="iconss" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserPosts;
