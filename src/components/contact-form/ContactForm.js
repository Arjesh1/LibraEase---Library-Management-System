import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ContactForm = () => {

  const [form, setForm] = useState({})

  const handleOnChange = (e) =>{

    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

  }

  const handleOnSubmit = (e) =>{
    e.preventDefault()
    console.log(form);
    
  }


  return (
    <div>
        <Form onSubmit={handleOnSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name='fName' placeholder="Alex" onChange={handleOnChange} required={true} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name='lName' placeholder="Smith" onChange={handleOnChange} required={true}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Alex@book.com" onChange={handleOnChange} required={true}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" name='address' onChange={handleOnChange} required={true} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name='city'  onChange={handleOnChange} required={true}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control  name='state' onChange={handleOnChange} required={true} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control  name='zip ' onChange={handleOnChange} required={true} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Message</Form.Label>
        <Form.Control placeholder="Your message" name='message' onChange={handleOnChange} required={true} as="textarea"/>
      </Form.Group>

     
<div className='d-grid'>
<Button variant="primary" type="submit">
        Submit
      </Button>
</div>
     
    </Form>
      
    </div>
  )
}

export default ContactForm
