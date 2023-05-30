import React, { useEffect, useState } from 'react'
import { PrivateRoute } from '../private-route/PrivateRoute'
import UserLayout from '../layout/UserLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomInput } from '../customInput/CustomInput'
import { useDispatch } from 'react-redux'
import { deleteUserAction, updateClientAction } from '../../pages/signup-signin/userAction'
import { deleteUser, getAuth } from 'firebase/auth'


export const EditUser = ({selectedUser}) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({});

  useEffect(() =>{
    setForm(selectedUser)
  },[selectedUser])

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };


  const handleOnSubmit = async (e) => {
      e.preventDefault();
      if (window.confirm ("Are you sure you want to update the user details? ")) {
      }dispatch(updateClientAction(form))
      
    }

        

    const handleOnDelete = () =>{
      if (window.confirm ("Are you sure you want to delete this user? ")) {
        dispatch(deleteUserAction(form.id))

        }
      

    }

  const inputs = [

    {
      label: "First name",
      name: "fName",
      type: "text",
      required: true,
      value: form?.fName,
    },

    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      value: form?.lName,
    },
    
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      value: form?.email,
      disabled:true,
    },
    
  ];
  return (

  
      
        <Container>
        
          <Form
          onSubmit={handleOnSubmit}
          className=" m-auto bg-light p-3 mb-3"
          style={{ width: "500px" }}
        >
      

          
          <div className="mt-5">

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Account Type</Form.Label>
              <Form.Select name="role" onChange={handleOnChange} value={form?.role}>
                <option value="">-- Select user --</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>


            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

              

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Update User
              </Button>

              
            </div>
          </div>
        </Form>
        <div className='d-grid   '  >
        <Button variant="danger" className='m-auto' type="submit" style={{ width: "475px" }} onClick={handleOnDelete}>
                Delete User
              </Button>
              </div>


        </Container>
      

  )
}



