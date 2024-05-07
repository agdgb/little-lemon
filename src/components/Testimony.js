import React from 'react'
import './Testimony.css'

function Testimony ({ profile, title, review, customerName }) {
  return (
    <div className='testimony'>
      <h1 className='rating'>
        <p>{title}</p>
      </h1>
      <div className='avatar'>
        <img className='img' src={profile} />
        <p className='name'>{customerName}</p>
      </div>
      <p className='review'>{review}</p>
    </div>
  )
}

export default Testimony
