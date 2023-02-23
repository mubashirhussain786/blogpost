import React from "react";
import "./App.css";
import TimeLine from "./pages/TimeLine";
import { Routes, Route } from "react-router-dom";
import SignInUserProfile from "./pages/SignInUserProfile";
import OtherUserProfile from "./pages/OtherUserProfile";
import Frends from "./components/Frends";

const App = () => {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<TimeLine />} />
          <Route path="/userprofile" element={<SignInUserProfile />} />
          <Route path="/otheruserprofile" element={<OtherUserProfile />} />
          <Route path="/freinds" element={<Frends />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
