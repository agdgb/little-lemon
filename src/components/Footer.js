import React from 'react'
import './Footer.css'
import image1 from '../img/img5.png'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='footer'>
      <div className='footer-image'>
        <img src={image1} alt='' />
      </div>
      <div className='footernav'>
        <h3>Navigation</h3>
        <div className='link-items'>
          <Link to='/'>Home</Link>
          <a href=''>About</a>
          <a href=''>Menu</a>
          <Link href='/booking'>Book Table</Link>
          <a href=''>Order Online</a>
          <a href=''>Login</a>
        </div>
      </div>
      <div className='contact'>
        <h3>Contact</h3>
        <div>
          <p>
            <span className='fa fa-phone' id=''></span>
            +251-912385501
          </p>
          <p>
            <span id=''></span>Addis Ababa, Ethiopia
          </p>
          <p>
            <span id=''></span>contact@littlelemon.eat
          </p>
        </div>
      </div>
      <div className='social-links'>
        <h3>Find us on</h3>
        <div className='socials'>
          <a href='' className='facebook'>
            Facebook
          </a>
          <a href='' className='facebook'>
            Twitter
          </a>
          <a href='' className='facebook'>
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
