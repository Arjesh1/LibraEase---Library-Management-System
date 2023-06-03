import React, { useEffect, useState } from 'react'
import { PrivateRoute } from '../private-route/PrivateRoute'
import UserLayout from '../layout/UserLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomInput } from '../customInput/CustomInput'
import { useDispatch } from 'react-redux'
import { addNewBookAction, deleteBookAction, updateBookAction } from '../../pages/books/BookAction'


export const EditBook = ({selectedBook}) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({});

  useEffect(() =>{
    setForm(selectedBook)
  },[])

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };


  const handleOnSubmit = async (e) => {
      e.preventDefault();
      if (window.confirm ("Are you sure you want to update this book? ")) {
      dispatch(updateBookAction(form))
      }
      
    }

    const handleOnDelete = () =>{
      if (window.confirm ("Are you sure you want to delete this book? ")) {
        dispatch(deleteBookAction(form.id))
        }
      

    }

  const inputs = [

    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Clean Code",
      required: true,
      value: form?.title,
    },

    {
      label: "Author Name",
      name: "name",
      type: "text",
      placeholder: "Sam smith",
      required: true,
      value: form?.name,
    },
    {
      label: "Published Year",
      name: "year",
      type: "number",
      placeholder: "2019",
      required: true,
      value: form?.year,
    },
    
    {
      label: "Image Url",
      name: "url",
      type: "url",
      placeholder: "http://image.com",
      required: true,
      value: form?.url,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      required: true,
      value: form?.summary,
    },
  ];
  return (

  
      
        <Container>
        
          <Form
          onSubmit={handleOnSubmit}
          className=" m-auto bg-light p-3 mb-3 modal_body"
          style={{ width: "500px" }}
        >
      

          
          <div className="mt-1">


            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Update Book
              </Button>

              
            </div>

            <div className='d-grid   '  >
        <Button variant="danger" className='mt-3' type="submit"  onClick={handleOnDelete}>
                Delete Book
              </Button>
              </div>
          </div>
        </Form>
        


        </Container>
      

  )
}



