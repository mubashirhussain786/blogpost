import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsFacebook } from "react-icons/bs";

import { Outlet } from "react-router-dom";
import illustrator from "../login/assets/illustrator.png";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <div className="login_main">
      <div className="ilustrator_loginPage">
        <div className="side_image">
          <img src={illustrator} alt="illustrator" />
        </div>
        <div className="signin_page_center">
          <div className="signin_page_main">
            <div className="signin_heading">
              <h1>SignIn</h1>
            </div>
            {/* <form className="form_main"> */}
            <div className="inputs">
              <div className="mmu">
                <label>UserName/Email</label>
                {/* <div className="azhar"> */}
                <input
                  type="email"
                  placeholder="Enter you'r email"
                  autoComplete="off"
                  required
                />
                {/* </div> */}
              </div>
            </div>
            <div className="inputs">
              <div className="dummy">
                <label>Password</label>
                <div className="input_forgotp">
                  <div>
                    <input
                      type="password"
                      placeholder="password"
                      autoComplete="off"
                      required
                      className="password_input"
                    />
                  </div>
                  <div className="forgot_password">
                    <h1>Forgot password</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="submit_btn">
              <button className="btn" onClick={()=>navigate("/timeline")}>LogIn</button>
            </div>
            {/* </form> */}

            <div className="login_ways_Icon">
              <div>
                <FcGoogle className="google_icon" onClick={()=>navigate("/timeline")} />
              </div>
              <div>
                <RxLinkedinLogo className="linkdin_icon" onClick={()=>navigate("/timeline")} />
              </div>
              <div>
                <BsFacebook className="facebook_icon" onClick={()=>navigate("/timeline")} />
              </div>
            </div>
            <div className="already_account_main">
              <h1 className="already_account">I have an account</h1>
              <div>
                <button className="signup_btn" onClick={handleClick}>
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Login;
