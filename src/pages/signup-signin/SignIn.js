import React, { useState } from 'react'
import {MainLayout} from '../../components/layout/MainLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/customInput/CustomInput'
import { toast } from 'react-toastify'
import {auth, db} from "../../config/firebase-config"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from './userAction'

const SignIn = () => {

  const dispatch =  useDispatch()
  const [form, setForm] = useState({})
  const {user} = useSelector(state => state.user)

  const handleOnChange = (e) =>{
    const {name, value} = e.target

    setForm({...form, [name]:value})
  }

  const handleOnSubmit = async (e) =>{
        e.preventDefault()
    dispatch(loginUser(form))
   
  }

  const inputs = [

    
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

    
  ]


  return (
    <div>
        <MainLayout>
        <Container className='mt-5 mb-5'>
        <Form onSubmit={handleOnSubmit}
        className='border p-5 shadow-lg rounded m-auto bg-light' style={{width: "450px"}}>
            <h3 className='text-primary fw-bolder mb-4'>Welcome back to the  Community</h3>

         <Form.Text > Anyone can create account for admin and user account.</Form.Text>

         <br/>
         <br/>

         <Form.Text > You will be redirected to dashjboardd after successful registraton</Form.Text>

          <div className='mt-5'>

            {
                inputs.map((item, i) => (
                    <CustomInput key={i} {...item} onChange={handleOnChange} />
                ))
            }

            <div className='d-grid'>
                <Button variant='primary' type='submit'>Login</Button>
            </div>

          </div>

        </Form>
      </Container>
      </MainLayout>
    </div>
  )
}

export default SignIn
