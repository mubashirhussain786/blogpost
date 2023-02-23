import React from "react";
import "./Posts.css";
import UploadPosts from "./UploadPosts";
import DisplayPosts from "./DisplayPosts";
import { infoData } from "../pages/Data";

const Posts = () => {
  const data = infoData;
  // console.log(data)
  return (
    <div className="posts">
            <div className="post--upload" >
              <UploadPosts  />
            </div>
      {data.map((user) => (
        // console.log(user.DisplayName)
       
          <>
            <div className="display--posts" key={user.id} >
              <DisplayPosts  pic={user.ProfilePic} name={user.DisplayName} caption={user.caption} image={user.postImage} />
            </div>
          </>
       
      ))}
    </div>
  );
};

export default Posts;
