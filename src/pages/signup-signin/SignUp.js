import React from 'react'
import {MainLayout} from '../../components/layout/MainLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/customInput/CustomInput'


const SignUp = () => {
  const inputs = [

    {
        label: "First Name",
        name: "fname",
        type: 'text',
        placeholder: 'Sam',
        required: true,

    },

    {
        label: "Last Name",
        name: "lname",
        type: 'text',
        placeholder: 'Smith',
        required: true,

    },

    {
        label: "Email",
        name: "email",
        type: 'email',
        placeholder: 'Sam@gmail.com',
        required: true,

    },

    {
        label: "Password",
        name: "password",
        type: 'password',
        placeholder: '********',
        required: true,

    },

    {
        label: "Confirm Password",
        name: "confirmpassword",
        type: 'password',
        placeholder: '********',
        required: true,

    },
  ]
    return (
    <div>
        <MainLayout>
      <Container className='mt-5 mb-5'>
        <Form className='border p-5 shadow-lg rounded m-auto bg-light' style={{width: "450px"}}>
            <h3 className='text-primary fw-bolder mb-4'>Join Our Community</h3>

         <Form.Text > Anyone can create account for admin and user account.</Form.Text>

         <br/>
         <br/>

         <Form.Text > You will be redirected to dashjboardd after successful registraton</Form.Text>

          <div className='mt-5'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Account Type</Form.Label>
        <Form.Select>
            <option value="">Select user</option>
            <option value="">Admin</option>
            <option value="">User</option>
        </Form.Select>
        
      </Form.Group>

            {
                inputs.map((item, i) => (
                    <CustomInput key={i} {...item}/>
                ))
            }

            <div className='d-grid'>
                <Button variant='primary'>Register Now!</Button>
            </div>

          </div>

        </Form>
      </Container>
      </MainLayout>
    </div>
  )
}

export default SignUp
