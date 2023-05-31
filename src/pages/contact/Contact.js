import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContactForm from '../../components/contact-form/ContactForm';
import MainLayout from '../../components/layout/MainLayout';
import contact from '../../assets/contact.webp'

export const Contact = () => {
  return (
    <div>
       <MainLayout>

    <Container className='mt-5'>

        <h2 className='text-center'>Contact Us</h2>

        <Row className='mt-4 mb-5'>
            <Col md={6}>
            <img className="d-block w-100" src={contact} alt="contact" />
            </Col>
            <Col md={6} className='mt-5'><ContactForm/></Col>
        </Row>


        
        
    </Container>

    </MainLayout>

    </div>
    
  );
}

