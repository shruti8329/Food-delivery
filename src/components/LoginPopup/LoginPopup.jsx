import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setcurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form
        action="
    "
        className="login-popup-container"
      >
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your email" required />
          {/* <br /> */}
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms of use & privacy Policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setcurrentState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an Account?{" "}
            <span onClick={() => setcurrentState("Login")}>Login Here</span>
          </p>
        )}
      </form>{" "}
    </div>
  );
};

export default LoginPopup;
