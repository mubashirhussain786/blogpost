import React, { useState } from "react";
import "./DisplayPosts.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import image from "../Assets/2.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";

const DisplayPosts = ({id, pic, name, caption, image}) => {
  const [color, setColor] = useState(false);
   const navigate = useNavigate()

  // console.log(pic)
  return (
    <div className="display--post" key={id}>
      <div className="display--post__wrapper">
        <div className="display--post_top">
          <div className="top_left">
            <img src={pic} alt="" className="top_left_img" />

            <div className="name_time">
              <h1 onClick={()=>navigate("/otheruserprofile")}>  {name}</h1>

              <p>2 days ago</p>
            </div>
          </div>
          <div className="top_right">
            <MoreHorizIcon />
          </div>
        </div>
        <div className="display--post_caption">
          <p>
           {caption}
          </p>
        </div>
        <div className="display--post__image">
          <img src={image} alt="" className="image" />
        </div>
        <div className="display--post_like-comment-share">
          <div className="icons">
            <FavoriteIcon />
            <CommentIcon />
            <ShareIcon />
          </div>
        </div>
        <div className="display--post_comment_box">
            <img src={image} alt=""  className="display--post_comment_box-img"/>
            <div className="display--post_comment_box_input">
            <input type="text" placeholder="Write your comment...." />
            <PhotoLibraryIcon className="iconss" />
            <SendIcon className="iconss"/>
            </div>

        </div>
      </div>
    </div>
  );
};

export default DisplayPosts;
