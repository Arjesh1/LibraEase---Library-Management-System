import React, { useEffect, useState } from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { CustomInput } from '../../components/customInput/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileAction } from './userAction'
import { FaUserEdit } from 'react-icons/fa'
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../../config/firebase-config'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import "./signin_signup.css"





const Profile = () => {
const dispatch = useDispatch()
  const [form, setForm] = useState({})
  const { user }= useSelector(state => state.user)

  useEffect(()=>{
    setForm(user)
  }, [user])


  const handleOnChange = (e) =>{
    const {name, value} = e.target

    setForm({
      ...form, [name]:value,
    })

  }

  const handleOnSubmit = (e) =>{
    e.preventDefault()

    if(!window.confirm("Are you sure you want to update your details?"))
    return;
    const {email, role, uid, ...rest} = form
    const obj = {
      id:uid,
      ...rest
    }
    dispatch(updateProfileAction(obj))
  }

  const handleOnPasswordReset = () =>{
    try {
      if(window.confirm("Are you sure you want to reset your password?")){

        //firebase sends emialwith password reset link
        sendPasswordResetEmail(auth, form.email).then(resp=>{
          console.log(resp);
          toast.success("Password reset link has been sent.")
        })
      }

    } catch (error) {
      console.log(error.message);
      
    }

  }




  const inputs = [
    {
      label: "User Role",
      name: "role",
      type: "text",
      value: form.role,
      required: true,
      disabled: true,
     
      
    },
    {
      label: "First Name",
      name: "fName",
      type: "text",
      value: form.fName,
      required: true,
      
      
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      value: form.lName,
      required: true,
   
      
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      value: form.email,
      required: true,
      disabled: true,
      
    },
    
  ];

  return (

  <PrivateRoute>
    <Header/>
      
        <Container className='mt-4 mb-4' > 

        
        <div className='d-flex justify-content-center mb-5'>

<Form className='mt-3 w-100 border  border-dark p-5 rounded-5 text-dark bg-opacity-50' onSubmit={handleOnSubmit}>

  <h2 className='text-center'>Profile</h2>

  <Row className='mt-5 '>
    <Col md={4}>
    <div className='d-flex justify-content-center align-items-center '><FaUserEdit className='profile_icons'/></div></Col>
    <Col md={8}>
      {inputs.map((item, i) => (
      <CustomInput key={i} {...item} onChange={handleOnChange} />
    ))}



    <div className="d-grid">
      <Button variant="primary" type="submit">
        Update
      </Button>
    </div>
    <Form.Text className="text-muted">
      You cannot change your role and email  at this time. Please contact administration.
    </Form.Text>

    <hr/>


    <div className="d-grid mt-3">
      <Button variant="danger" onClick={handleOnPasswordReset} >
       Request Password Reset
      </Button>
</div></Col>
  </Row>



</Form>
</div>
          

         

          

        
        





        </Container>

        <Footer/>
      

  </PrivateRoute>
  )
}

export default Profile
