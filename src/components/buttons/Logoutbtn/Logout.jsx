import React from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="sidebar--logout_btn" onClick={() => navigate("/")}>
        Logout
      </button>
    </>
  );
};

export default Logout;
