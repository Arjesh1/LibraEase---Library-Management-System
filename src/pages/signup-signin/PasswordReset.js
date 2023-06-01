import React, { useState } from 'react'
import {MainLayout} from '../../components/layout/MainLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/customInput/CustomInput'
import { toast } from 'react-toastify'
import {auth} from "../../config/firebase-config"
import { sendPasswordResetEmail } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { FaUserLock } from 'react-icons/fa'



const PasswordReset = () => {
  
  const [form, setForm] = useState({});
  

  

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    
    try {
      if(window.confirm("Are you sure you want to reset your password?")){

        //firebase sends emialwith password reset link
        sendPasswordResetEmail(auth, form.email).then(resp=>{
          toast.success("Password reset link has been sent.")
        })
      }

    } catch (error) {
      console.log(error.message);
      
    }

   
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Samsmith@email.com",
      required: true,
    },
    
  ];

  

  return (
    <MainLayout>
      <div className='forget_password'>
      <Container className=' mb-5 pb-5' >
      <Link to ="/signin">
            <Button variant='secondary' className='mt-4'> <BsFillArrowLeftCircleFill/> Back</Button>

          </Link>
        <Form
          onSubmit={handleOnSubmit}
          className="border p-5 shadow-lg rounded m-auto mt-4 bg-light signin_form mb-3 "
          style={{ width: "400px" }}
        >

          <div className=' d-flex justify-content-center'>
            <FaUserLock className='signin_icons'/>
          </div>
          <h3 className="text-primary fw-bolder mt-2 mb-2">
            Reset Password
          </h3>

          <Form.Text className="text-muted">
              We will send you the password reset link if we find you in our system.
            </Form.Text>

          <div className="mt-3">
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
            </div>

           

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Submit 
              </Button>
            </div>
          
         
         
        </Form>
        
      </Container>

      </div>
    </MainLayout>
  );
};

export default PasswordReset;
