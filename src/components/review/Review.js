import React from 'react'
import Rating from '../rating/Rating'
import './review.css'

const Review = () => {
  return (
    <div className='d-flex justify-content-between gap-2 border p-5 shadow-lg mb-5'>
        <div className='avatar '>
            <div className='nameLogo'>AK</div>
            <div className='name'>Arjesh Khadka</div>
        </div>

        <div className='review-content '>
            <h4>Best Book</h4>
            <Rating rate={2} />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </p>
        </div>
      
    </div>
  )
}

export default Review
