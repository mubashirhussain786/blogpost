import React from "react";
import "./Signup.css";
import illustrator from "../signup/assets/illustrator1.jpg";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="illustrator_signup_main">
      <div className="illustrator_signup">
        <div className="illistrator">
          <img src={illustrator} alt="" illustrator />
        </div>
        <div className="signup_page_aligncenter">
          <div className="signup_page_main">
            <div className="signup_heading">
              <h1>SignUp</h1>
            </div>
            <div className="inputs">
              <div className="dummy">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Enter you'r name..."
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="inputs">
              <div className="dummy">
                <label>User name</label>
                <input
                  type="text"
                  placeholder="username..."
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="inputs">
              <div className="dummy">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email address..."
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="inputs">
              <div className="dummy">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="enter password..."
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="inputs">
              <div className="dummy">
                <label>Repeat password</label>
                <input
                  type="password"
                  placeholder="repeat password..."
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="submit_btn">
              <button className="btn" onClick={()=>navigate("/timeline")}>Signup</button>
            </div>
            <div className="already_account_main">
              <h1 className="already_account" onClick={handleClick}>
                I have an account
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
