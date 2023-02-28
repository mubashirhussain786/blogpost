import React from "react";
import "./UserSidebar.css";
import "./Sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="user-sidebar">
      <div className="user-sidebar_userdetails">
        <div className="user-sidebar_userdetails_heading">
          <h1>Work :</h1>
          <h1>Education :</h1>
          <h1>Work :</h1>
          <h1>Work :</h1>
        </div>
        <div className="user-sidebar_userdetails_text">
          <p>Comrex Private Limited</p>
          <p>Bachlor's</p>
          <p>Islamabad</p>
          <p>Pakistan</p>
        </div>
      </div>
      <li className="user-sidebar_userdetails_button">
        <a href="#">See More</a>
      </li>
      <div className="sidbar-links">
        <ul className="linkss">
          <li>
            <RssFeedIcon />
            <span className="span">
              <a href="#" onClick={() => navigate("/timeline")}>
                Feed
              </a>
            </span>
          </li>
          <li>
            <PeopleIcon />
            <span className="span">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/freinds");
                }}
              >
                Freinds
              </a>
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
    </div>
  );
};

export default UserSidebar;
