import React from "react";
import "./User.css";
import profileImage from "../../../Assets/4.jpg";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/userprofile");
  };

  return (
    <>
      <div className="users-profile">
        <img src={profileImage} alt="" className="Profile-image" />
        <span className="user">
          <h1>
            <a
              href="/"
              style={{ color: "black", textDecoration: "none" }}
              onClick={submitHandler}
            >
              Display Name
            </a>
          </h1>
          <h3>@displayname</h3>
        </span>
      </div>
    </>
  );
};

export default User;
