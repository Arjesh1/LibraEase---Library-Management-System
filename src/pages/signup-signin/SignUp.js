import React, { useState } from 'react'
import {MainLayout} from '../../components/layout/MainLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../components/customInput/CustomInput'
import { toast } from 'react-toastify'
import {auth, db} from "../../config/firebase-config"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'


const SignUp = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const { confirmPassword, password, ...rest } = form;
      if (confirmPassword !== password)
        return toast.error("Password do not match");

      //regist
      const pendingUser = createUserWithEmailAndPassword(
        auth,
        rest.email,
        password
      );
      toast.promise(pendingUser, {
        pending: "Please wait...",
      });

      const { user } = await pendingUser;
      if (user?.uid) {
        await setDoc(doc(db, "user", user.uid), rest);
        return toast.success(
          "Your account has been creted successfull, Please login in now!"
        );
      }
      toast.error("Error, lease try again later");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
    <MainLayout>
      <Container className="mt-5">
        <Form
          onSubmit={handleOnSubmit}
          className="border p-5 shadow-lg rounded m-auto bg-light  mb-3"
          style={{ width: "400px" }}
        >
          <h3 className="text-primary fw-bolder mb-3">Join Library Comunity</h3>

          <Form.Text>
            Anyone can create admin or user account for experiment purpose.
            <br />
            <br />
            Once you are regustered, you will be redirected to Dashboard
            automatically.
          </Form.Text>
          <div className="mt-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Account Type</Form.Label>
              <Form.Select name="role" onChange={handleOnChange}>
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
                Register Now!
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default SignUp;