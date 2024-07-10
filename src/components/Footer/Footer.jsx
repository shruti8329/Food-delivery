import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Get ready for a flavor explosion with our sizzling food delivery
            website! Indulge in mouthwatering dishes that pack a punch of spice
            and a touch of sweetness, all delivered straight to your door. From
            fiery favorites to tantalizing treats, every bite is a symphony of
            taste sensations that will leave you craving for more. Order now and
            elevate your dining experience to a whole new level of
            deliciousness!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9850779222</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default footer;
