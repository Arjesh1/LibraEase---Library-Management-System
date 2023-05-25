import React, { useEffect, useState } from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/customInput/CustomInput'
import { useSelector } from 'react-redux'




const Profile = () => {

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
      disabled: true,
      
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      value: form.lName,
      required: true,
      disabled: true,
      
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
      <UserLayout>
        <Container>
          <h3 className='text-center'>Profile</h3>

          <hr/>

        <Form className='mt-3 ' onSubmit={handleOnSubmit}>

        {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}



            <div className="d-grid">
              <Button variant="primary" type="submit">
                Update
              </Button>
            </div>

        </Form>

        
        <div className="d-grid mt-3">
              <Button variant="danger" type="submit">
                Password Reset
              </Button>
        </div>





        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default Profile
