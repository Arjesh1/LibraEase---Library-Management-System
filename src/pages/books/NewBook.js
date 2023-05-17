import React, { useState } from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomInput } from '../../components/customInput/CustomInput'
import { useDispatch } from 'react-redux'
import { addNewBookAction } from './BookAction'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const NewBook = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value, isAvailable:true });
  };


  const handleOnSubmit = async (e) => {
      e.preventDefault();
      dispatch(addNewBookAction(form))
      setForm({})
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

  <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>New Book</h3>

          <Link to ="/books">
            <Button variant='secondary'> <BsFillArrowLeftCircleFill/> Back</Button>

          </Link>

          <hr/>
          <Form
          onSubmit={handleOnSubmit}
          className="border p-5 shadow-lg rounded m-auto bg-light  mb-3"
          style={{ width: "400px" }}
        >
          <h3 className="text-primary fw-bolder mb-3">Add New Book</h3>

          
          <div className="mt-5">


            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Availability</Form.Label>
              <Form.Select name="isAvailable" onChange={handleOnChange}>
                <option value="">-- Select  --</option>
                <option value="True">Yes</option>
                <option value="False">No</option>
              </Form.Select>
            </Form.Group> */}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </div>
          </div>
        </Form>


        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default NewBook

