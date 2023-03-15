import React from "react";
import "./freinds.css"
import Navbar from "../Navbar/Navbar"
import {freindsData} from "../../pages/json files/Freindsdata"
import { useNavigate } from "react-router-dom";

const Frends = () => {
  const navigate = useNavigate()
  return (
    <>
   
    <div className="freinds">
    <Navbar />
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
