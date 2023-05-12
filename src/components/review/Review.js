import React from 'react'
import Rating from '../rating/Rating'

const Review = () => {
  return (
    <div className='d-flex justify-content-between gap-2 border p-5 shadow-lg'>
        <div className='avatar bg-light p-4'>
            <div className='nameLogo'>AK</div>
            <div className='nameLogo'>Arjesh Khadka</div>
        </div>

        <div className='review-content'>
            <h4>Best Book</h4>
            <Rating rate={2}/>
            <p> LoremhdjkcsdhckozcnhzxLKCnzxKVjxcVhulsduicksdnvcxcm,vnxczviusdfhyvsdaifsidh;fcnlzxkCVxcvuipsdfraefvhahvuvhzxcuibgviyvgfnmsdbzxcviydfovgavgfasho;
            </p>
        </div>
      
    </div>
  )
}

export default Review
