import React, { useEffect, useState } from 'react'
import Testimony from './Testimony'
import './Testimonials.css'
import { reviews } from '../reviews'

function Testimonials () {
  const [selectedReviews, setSelectedReviews] = useState([])

  useEffect(() => {
    const reviewSet = new Set()
    while (reviewSet.size < 3) {
      const randomIndex = Math.floor(Math.random() * reviews.length)
      reviewSet.add(reviews[randomIndex])
    }
    setSelectedReviews(Array.from(reviewSet)) // Convert Set to an array
  }, [])

  return (
    <section className='testimonials'>
      <article>
        <h1 className='testimonials-header'> testimonials</h1>
        <div className='testimonies'>
          {selectedReviews.map(review => (
            <Testimony
              profile={review.profile}
              customerName={review.Name}
              title={review.Title}
              review={review.review}
            />
          ))}

          {/* <Testimony
            customerName= {}
            title='A Must-Try for Foodies'
            review="Little Lemon is a hidden gem waiting to be discovered. With its commitment to fresh, seasonal ingredients, a menu brimming with Mediterranean flavors, and a warm, family-oriented vibe, it's a restaurant that will leave you wanting more. So, on your next trip to Chicago, make sure to add Little Lemon to your itinerary. You won't be disappointed!"
          />
          <Testimony
            customerName='Basi Kassa'
            title=":

            The ambiance at Little Lemon is as inviting as the food. Imagine a space that balances rustic charm with a modern twist, creating a relaxed and comfortable atmosphere. Whether you're seeking a casual lunch, a leisurely dinner, or a lively brunch, Little Lemon's moderate prices make it a perfect choice for any occasion."
          />
          <Testimony /> */}
        </div>
      </article>
    </section>
  )
}

export default Testimonials
