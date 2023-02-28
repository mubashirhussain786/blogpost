import React from "react";
import profileImage from "../Assets/1.jpg";
import "./Sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate, redirect } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/userprofile")
  }
  return (
    <div className="sidebar">
      <div className="user-profile">
        <img src={profileImage} alt="" className="profile-image" />
        <span className="user">
          <h1> <a href="/" style={{color: "black", textDecoration:"none"}} onClick={submitHandler}>Display Name</a> </h1>
          <h3>@displayname</h3>
        </span>
      </div>
      <div className="sidbar-links">
        <ul className="linkss">
          <li>
            <RssFeedIcon />
            <span className="span">
              <a href="/timeline">Feed</a>
            </span>
          </li>
          <li>
            <PeopleIcon />
            <span className="span">
              <a href="/" onClick={(e)=>{
                e.preventDefault()
                navigate("/freinds")}}>Freinds</a>
            </span>
          </li>
          <li>
            <EventIcon />
            <span className="span">
              <a href="#">Events</a>
            </span>
          </li>
          <li>
            <SmartDisplayIcon />
            <span className="span">
              <a href="#">Watch Videos</a>
            </span>
          </li>
          <li>
            <InsertPhotoIcon />
            <span className="span">
              <a href="#">Photos</a>
            </span>
          </li>
          <li>
            <FileCopyIcon />
            <span className="span">
              <a href="#">Files</a>
            </span>
          </li>
          <li>
            <StorefrontIcon />
            <span className="span">
              <a href="#">Market Place</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="sidebar--other__links">
        <p>Pages you like</p>
        <ul className="sidebar--other__links__anchor">
          <li>
            <a href="">Football Fc</a>
          </li>
          <li>
            <a href="">Batminton Club </a>
          </li>
          <li>
            <a href="">UI/UX Community </a>
          </li>
        </ul>
      </div>
      <div>

      <button className="sidebar--logout_btn" onClick={()=>navigate("/")}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
