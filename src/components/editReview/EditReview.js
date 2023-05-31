import React, { useEffect, useState } from 'react'
import { PrivateRoute } from '../private-route/PrivateRoute'
import UserLayout from '../layout/UserLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomInput } from '../customInput/CustomInput'
import { useDispatch } from 'react-redux'
import { deleteUserAction, updateClientAction } from '../../pages/signup-signin/userAction'
import { deleteUser, getAuth } from 'firebase/auth'


export const EditReview = ({selectedBookReview}) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({});

  useEffect(() =>{
    setForm(selectedBookReview)
  },[selectedBookReview])

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };


  const handleOnSubmit = async (e) => {
      e.preventDefault();
      if (window.confirm ("Are you sure you want to update the user details? ")) {
      }dispatch(updateClientAction(form))
      
      
    }

    const inputs =[
      {
          name: 'title',
          label: 'Review title',
          type: 'text',
          required: true,
          placeholder: "Very informative book. ",
          value: form?.title,
      },
      {
          name: 'ratings',
          label: 'Review ratings',
          type: 'number',
          min: 1,
          max: 5,
          required: true,
          placeholder: "5",
          value: form?.ratings
      },
      {
          name: 'feedback',
          label: 'Enter your review',
          type: 'text',
          as: "textarea",
          required: true,
          placeholder: "Write Details ",
          value: form?.feedback,
      },
  ]
  return (

  
      
        <Container>
        
          <Form
          onSubmit={handleOnSubmit}
          className=" m-auto bg-light p-3 mb-3"
          style={{ width: "500px" }}
        >
      

          
          <div className="mt-5">

            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

              

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Update Review
              </Button>

              
            </div>
          </div>
        </Form>


        </Container>
      

  )
}



