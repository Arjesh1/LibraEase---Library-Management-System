import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../customInput/CustomInput'
import { useDispatch } from 'react-redux'
import { addNewReviewAction } from '../../pages/books/BookAction'

const ReviewForm = ({bookForReview}) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({})
    const {bookId, userName, userId, id, bookName} = bookForReview

    const handleOnChange = (e) =>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        

        const reviewObj = {...form, bookId, userName, userId, burrowHistoryId:id, bookName }
        dispatch(addNewReviewAction(reviewObj));
    }



    const inputs =[
        {
            name: 'title',
            label: 'Review title',
            type: 'text',
            required: true,
            placeholder: "Very informative book. ",
            value: form.title,
        },
        {
            name: 'ratings',
            label: 'Review ratings',
            type: 'number',
            min: 1,
            max: 5,
            required: true,
            placeholder: "5",
            value: form.ratings
        },
        {
            name: 'feedback',
            label: 'Enter your review',
            type: 'text',
            as: "textarea",
            required: true,
            placeholder: "Write Details ",
            value: form.feedback,
        },
    ]
  return (
    <Container>
        
        
    <Form
    onSubmit={handleOnSubmit}
    className=" m-auto bg-light p-3 mb-3 modal_body"
    style={{ width: "500px" }}
  >
    <h4 className='text-center'> {bookName}</h4>


    
    <div className="mt-5">


      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} onChange={handleOnChange} />
      ))}

      <div className="d-grid">
        <Button variant="primary" type="submit">
          Submit Review
        </Button>

        
      </div>
    </div>
  </Form>


  </Container>
  )
}

export default ReviewForm
