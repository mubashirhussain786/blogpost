import React from "react";
import "./freinds.css"
import image from "../8.png"
import Navbar from "./Navbar"
import {freindsData} from "../pages/Freindsdata"
import { useNavigate } from "react-router-dom";

const Frends = () => {
  const navigate = useNavigate()
  return (
    <>
   
    <Navbar />
    <div className="freinds">
      <h1 className="freinds-heading">Freinds</h1>
      {
        freindsData.map((freind)=>(
            <div className="freinds--box" key={freind.id} >
            <div className="freinds--box_data" onClick={(e)=>{
              e.preventDefault();
              navigate("/otheruserprofile")
            }}>
              <img src={freind.ProfilePic} alt="" className="freinds--box_img" />
              <h2 className="freinds--box_name">{freind.DisplayName}</h2>
            </div>
            <button className="freinds--box_btn">Message</button>
          </div>
        ))
    }
      
    </div>
    </>
    
  );
};

export default Frends;
