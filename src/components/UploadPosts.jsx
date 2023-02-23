import React from "react";
import "./UploadPosts.css";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import image from "../Assets/2.jpg"

const UploadPosts = () => {
  return <div className="upload--posts--wrapper" >
    <div className="upload-posts-items">
        <img src={image} alt="" className="post-user-profile--img" />
        <input type="text" placeholder="Write something......" />
        <div >
        <PhotoLibraryIcon className="choose-photo">
        <input type="file" />
        </PhotoLibraryIcon>
        </div>
        <button>Post</button>
    </div>
  </div>;
};

export default UploadPosts;
