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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            unde, numquam laudantium, corrupti doloremque reprehenderit soluta
            voluptate deserunt, dolores tenetur fuga voluptas repudiandae
            accusantium. Facilis amet, ipsam id quo excepturi perferendis dicta,
            alias labore optio, sed harum at? Quaerat quo consequatur ex. Dicta
            natus velit iste sed quaerat? Nulla recusandae harum accusantium
            voluptatem delectus sint.
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
            <li>+1 36-256-2586</li>
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
