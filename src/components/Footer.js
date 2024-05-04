import React from "react";
import "./Footer.css";
import image1 from "../img/img5.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div class="footer-image">
        <img src={image1} alt="" />
      </div>
      <div class="footernav">
        <h3>Navigation</h3>
        <div class="link-items">
          <Link to="/">Home</Link>
          <a href="">About</a>
          <a href="">Menu</a>
          <Link href="/booking">Book Table</Link>
          <a href="">Order Online</a>
          <a href="">Login</a>
        </div>
      </div>
      <div class="contact">
        <h3>Contact</h3>
        <div>
          <p>
            <span id=""></span>Phone Number
          </p>
          <p>
            <span id=""></span>Address
          </p>
          <p>
            <span id=""></span>Email
          </p>
        </div>
      </div>
      <div class="social-links">
        <h3>Find us on</h3>
        <div class="socials">
            <a href="" class="facebook">Facebook</a>
            <a href="" class="facebook">Twitter</a>
            <a href="" class="facebook">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
