import React from "react";
import "./App.css";
import TimeLine from "./pages/timline/TimeLine";
import { Routes, Route } from "react-router-dom";
import Frends from "./components/Freinds/Frends";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./components/authentication/login/Login";
import Signup from "./components/authentication/signup/Signup";
import Chattmain from "./pages/chattmain/Chattmain";
import MyMessage from "./components/chattPage/mymessage/MyMessage";
import Profilemain from "./pages/signinprofile/Profilemain";
import OtherUserProfile from "./pages/otheruser/OtherUserProfile";

const App = () => {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/userprofile" element={<Profilemain />} />
          <Route path="/otheruser" element={<OtherUserProfile />} />
          <Route path="/freinds" element={<Frends />} />
          <Route path="/chattmain" element={<Chattmain />} />
          <Route path="/mymessage" element={<MyMessage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
