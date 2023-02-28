import React from "react";
import "./LandingPage.css";
import logo from "../Assets/comrexlogo.png";
// import Login from "../authentication/login/Login";
// import Signup from "../authentication/signup/Signup";
// import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
// import Login from "../authentication/login/Login";
// import hexagonal from "./assets/hexagonal.pn g";
// import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="landing_page">
        <div className="bg_color">
          <div className="btn_main">
            <div className="signin_btn">
              <button className="signin" onClick={handleClick}>
                SignIn
              </button>
            </div>
          </div>

          <div className="hexagonal_main">
            <div className="logo_heading">
              <div className="logo_h2_parrent">
                <div className="logo_h2_child">
                  <img src={logo} alt="logo" />

                  <h2>Software Engineering </h2>
                </div>
              </div>
              <div className="qutos">
                <h1>
                  "Bringing people together, no matter the
                  <br /> distance."
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
