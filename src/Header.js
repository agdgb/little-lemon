import React from "react";
import logo from "./Logo.svg";
import './Header.css'

function Header({ props }) {
  return (
    <header>
      <nav>
        <img src={logo} alt="little lemon  logo" />
        <ul>
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
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
