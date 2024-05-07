import React from 'react'
import logo from '../Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <>
      <nav className='nav-bar'>
        <div className='logo-container'>
          <Link to='/'>
            <img className='logo' src={logo} alt='little lemon  logo' />
          </Link>
        </div>
        <ul className='links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Menu</a>
          </li>
          <li>
            <Link to='/booking'>Book Table</Link>
          </li>
          <li>
            <a href=''>Order Now</a>
          </li>
          <li>
            <a href=''>Login</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
