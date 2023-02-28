import React, { useState } from "react";
import "./Navbar.css";
import logo from "../6.png";
import messanger from "../7.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <nav className="nav_items">
        <div className="brand-logo">
          <img src={logo} alt="" onClick={() => navigate("/timeline")} />
        </div>

        <div className="nav-link-menu">
          <div className="input__field">
            <input type="text" placeholder="Search...." className="input" />
            <SearchIcon />
          </div>
          <img src={messanger} alt="" className="message__icon" onClick={()=>navigate("/chattmain")} />
          <div className="toggle-button">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setToggle(!toggle);
              }}
            >
              <MenuIcon style={{ color: "black" }} />
            </a>
          </div>
        </div>
      </nav>
      <div className={toggle ? "dropdown" : "dropdown-section"}>
        <li>
          <a href="/" onClick={()=>navigate("/userprofile")}>Your Profile</a>
        </li>
        <li>
          <a href="/" onClick={()=>navigate("/")}>Feed</a>
        </li>
        <li>
          <a href="/" onClick={(e)=>{
            e.preventDefault();
            navigate("/freinds")
          }

          }>Freinds</a>
        </li>
        <li>
          <a href="/">Settings</a>
        </li>
        <button onClick={()=>navigate("/")}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
