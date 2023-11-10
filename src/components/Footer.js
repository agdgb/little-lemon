import React from "react";
import "./Footer.css";
import image1 from "../img/img5.png";

function Footer() {
  return (
    <div className="footer">
      <div class="footer-image">
        <img src={image1} alt="" />
      </div>
      <div class="footernav">
        <h3>Dootmat Naviagation</h3>
        <div class="link-items">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Menu</a>
          <a href="">Reservations</a>
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
        <h3>Social Media Links</h3>
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
