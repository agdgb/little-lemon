import React from 'react'
import img5 from '../img/img5.png'
import './Main.css'
import { Link } from 'react-router-dom'

function Main () {
  return (
    <main className='hero-section'>
      <section className='hero-container'>
        <article className='hero-left'>
          <div className='top'>
            <h1 className='title'>Little Lemon</h1>
            <h6 className='subtitle'>Chicago</h6>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* <div className="bottom"> */}
          <Link to='/booking'>Reserve a Table</Link>
          {/* </div> */}
        </article>
        <article className='hero-right'>
          <img
            className='hero-image'
            src={img5}
            alt='Images'
            height={100}
            width={100}
          />
        </article>
      </section>
    </main>
  )
}

export default Main
