import React from 'react'
import Rating from '../rating/Rating'
import './review.css'
import { useSelector } from 'react-redux'

const Review = ({userName, title, ratings, feedback   }) => {
  return (
    <div className='d-flex justify-content-between gap-2 border p-5 shadow-lg mb-5'>
        <div className='avatar '>
            <div className='nameLogo'> {userName[0].toUpperCase()}</div>
            <div className='name'> {userName}</div>
        </div>

        <div className='review-content '>
            <h4>{title}</h4>
            <Rating rate={ratings} />
            <p> {feedback}
            </p>
        </div>
      
    </div>
  )
}

export default Review
