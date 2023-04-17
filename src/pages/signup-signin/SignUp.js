import React, { useState } from 'react'
import {MainLayout} from '../../components/layout/MainLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/customInput/CustomInput'
import { toast } from 'react-toastify'
import {auth, db} from "../../config/firebase-config"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'


const SignUp = () => {

  

  const [form, setForm] = useState({})

  const handleOnChange = (e) =>{
    const {name, value} = e.target

    setForm({...form, [name]:value})
  }

  const handleOnSubmit = async (e) =>{
    try {
    
    
    e.preventDefault()
    console.log(form);

    const {confirmpassword, password, ...rest} = form

    if(password !== confirmpassword)
    return toast.error("Password do not match")


// register
const pendingUser = createUserWithEmailAndPassword(auth, rest.email, password)
toast.promise(pendingUser,{
  pending:"Please wait..."
})

const {user} = await pendingUser 
if (user?.uid){


  await setDoc(doc(db, 'user', user.uid), rest)
return toast.success("Account has been created")
}
return toast.error("Please try again later")

} catch (error) {
  toast.error(error.message)
      
}
  }

  const inputs = [

    {
        label: "First Name",
        name: "fname",
        type: "text",
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
        <Form onSubmit={handleOnSubmit}
        className='border p-5 shadow-lg rounded m-auto bg-light' style={{width: "450px"}}>
            <h3 className='text-primary fw-bolder mb-4'>Join Our Community</h3>

         <Form.Text > Anyone can create account for admin and user account.</Form.Text>

         <br/>
         <br/>

         <Form.Text > You will be redirected to dashjboardd after successful registraton</Form.Text>

          <div className='mt-5'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Account Type</Form.Label>
        <Form.Select name='role' onChange={handleOnChange}>
            <option value="">Select user</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </Form.Select>
        
      </Form.Group>

            {
                inputs.map((item, i) => (
                    <CustomInput key={i} {...item} onChange={handleOnChange} />
                ))
            }

            <div className='d-grid'>
                <Button variant='primary' type='submit'>Register Now!</Button>
            </div>

          </div>

        </Form>
      </Container>
      </MainLayout>
    </div>
  )
}

export default SignUp
