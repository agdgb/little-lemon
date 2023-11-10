import React from "react";
import logo from "../Logo.svg";
import "./Header.css";

function Header({ props }) {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="little lemon  logo" />
        </div>
        <ul className="links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservations</a>
          </li>
          <li>
            <a href="">Order Now</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
