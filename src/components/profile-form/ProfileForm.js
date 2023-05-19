import React from 'react'
import { Container, Form, Row } from 'react-bootstrap';

const ProfileForm = () => {


    const inputs = [
        {
          label: "First Name",
          name: "fName",
          type: "text",
          placeholder: "Sam smith",
          required: true,
        },
        {
          label: "Last Name",
          name: "lName",
          type: "text",
          placeholder: "Sam smith",
          required: true,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "Samsmith@email.com",
          required: true,
        },
        {
          label: "Password",
          name: "password",
          type: "password",
          placeholder: "xxxxxxxxxx",
          required: true,
        },
        {
          label: "Confirm Password",
          name: "confirmPassword",
          type: "password",
          placeholder: "xxxxxxxxxx",
          required: true,
        },
      ];
  return (
    <div>

        <Container>

            hjbjh
        </Container>
      
    </div>
  )
}

export default ProfileForm
