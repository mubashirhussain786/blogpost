import React from "react";
import "./App.css";
import TimeLine from "./pages/TimeLine";
import { Routes, Route } from "react-router-dom";
import SignInUserProfile from "./pages/SignInUserProfile";
import OtherUserProfile from "./pages/OtherUserProfile";
import Frends from "./components/Frends";
import LandingPage from "./pages/LandingPage"
import Login from "./components/authentication/login/Login"
import Signup from "./components/authentication/signup/Signup"
import Chattmain from "./pages/Chattmain"
import MyMessage from "./components/chattPage/MyMessage"

const App = () => {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/userprofile" element={<SignInUserProfile />} />
          <Route path="/otheruserprofile" element={<OtherUserProfile />} />
          <Route path="/freinds" element={<Frends />} />
          <Route path="/chattmain" element={<Chattmain />} />
          <Route path="/mymessage" element={<MyMessage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
