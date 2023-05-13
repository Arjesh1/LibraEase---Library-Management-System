import React, { useState } from 'react'
import { PrivateRoute } from '../private-route/PrivateRoute'
import UserLayout from '../layout/UserLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomInput } from '../customInput/CustomInput'
import { useDispatch } from 'react-redux'
import { addNewBookAction } from '../../pages/books/BookAction'


export const EditBook = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };


  const handleOnSubmit = async (e) => {
      e.preventDefault();
      // dispatch(addNewBookAction(form))
    }

  const inputs = [

    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Clean Code",
      required: true,
    },

    {
      label: "Author Name",
      name: "name",
      type: "text",
      placeholder: "Sam smith",
      required: true,
    },
    {
      label: "Published Year",
      name: "year",
      type: "number",
      placeholder: "2019",
      required: true,
    },
    
    {
      label: "Image Url",
      name: "url",
      type: "url",
      placeholder: "http://image.com",
      required: true,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      required: true,
    },
  ];
  return (

  
      
        <Container>
        
          <Form
          onSubmit={handleOnSubmit}
          className=" m-auto bg-light p-4 mb-3"
          style={{ width: "500px" }}
        >
      

          
          <div className="mt-5">


            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Update Book
              </Button>
            </div>
          </div>
        </Form>


        </Container>
      

  )
}



