import { Button, Carousel, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MainLayout from '../../components/layout/MainLayout';
import mission from '../../assets/mission.jpg'
import world from '../../assets/world.jpg'
import programs from '../../assets/programs.jpg'
import staff from '../../assets/staff.jpg'
import join from '../../assets/join.jpg'
import contact from '../../assets/contact.jpg'
import about from '../../assets/about.jpg'
import { Link } from 'react-router-dom';
import "./about.css"

export const About = () => {
  return (
    <div>


       <MainLayout>
        

       <h2 className='text-center mt-5 mb-4 pt-4 '>About Us </h2>
       
       <Carousel  controls={false}>
    <Carousel.Item>
      <img className="d-block w-100" src={about} alt="about" />
    </Carousel.Item>
    </Carousel>
    <Container className='mt-5 mb-5 p-4'>

        

        

        <p className='fs-4 text-center'>Welcome to Libra Ease, your go-to destination for knowledge, inspiration, and community. At Libra Ease, we believe in the power of books and the transformative effect they can have on individuals and societies. Our library is more than just a collection of books; it is a sanctuary for learning, exploration, and personal growth.</p>

        <div className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h4 className='text-center mb-5'>Our Mission</h4>
        <Row >
        
            <Col md={6}  >
            <img className="d-block w-100" src={mission} alt="contact" />
            </Col >
            <Col  md={6} className='d-flex align-items-center mt-3'>
                
            <p className='fs-5 lh-lg lh-lg'>Our mission is to foster a love for reading, promote literacy, and provide a welcoming space for people of all ages and backgrounds to engage with books and ideas. We aim to be the heart of our community, a place where people can gather, connect, and embark on intellectual journeys.</p></Col>
        </Row>
        </div>

        <div className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h4 className='text-center mb-5'>A World of Possibilities</h4>
        <Row className='d-flex align-items-center reverse_col '>
        <Col className=''>
               
                <p className='fs-5 lh-lg'>Libra Ease is home to an extensive collection of books, spanning various genres, subjects, and languages. Whether you're searching for classic literature, contemporary fiction, academic resources, or children's books, our shelves are stocked with a diverse array of titles to cater to every interest and curiosity.</p></Col>
             <Col md={6} >
            <img className="d-block w-100" src={world} alt="contact" />
            </Col>
           
        </Row>
        </div>

        <div className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h4 className='text-center mb-5'>Engaging Programs and Events</h4>
        <Row >
        
             <Col md={6} >
            <img className="d-block w-100" src={programs} alt="contact" />
            </Col>
            <Col className='d-flex align-items-center'>
                
            <p className='fs-5 lh-lg'>We believe in the power of shared experiences, and our library is a hub of activities and events designed to engage, entertain, and educate our community. From book clubs and author talks to workshops and storytelling sessions, there's always something happening at Libra Ease. We encourage you to explore our calendar and join us in the joy of lifelong learning.</p></Col>
        </Row>

        </div>

        <div className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h4 className='text-center mb-5'>Knowledgeable and Friendly Staff</h4>
        <Row className='d-flex align-items-center reverse_col '>
        <Col className=''>
               
        <p className='fs-5 lh-lg'>Our dedicated team of librarians is passionate about books and committed to providing exceptional service to our patrons. Whether you need assistance in finding the perfect book, navigating our digital resources, or exploring new areas of interest, our staff is here to help. We pride ourselves on creating a warm and inclusive environment where everyone feels welcome.</p></Col>
             <Col md={6} >
             <img className="d-block w-100" src={staff} alt="contact" />
            </Col>
           
        </Row>
        </div>

        

        <div className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h4 className='text-center mb-5'>Join Us</h4>
        <Row >
       
             <Col md={6} >
            <img className="d-block w-100" src={join} alt="contact" />
            </Col>
            <Col className=''>

                <div className='d-flex align-items-center'>
                <p className='fs-5 lh-lg'>Whether you're an avid reader, a lifelong learner, or simply seeking a space to relax and explore, Libra Ease welcomes you with open arms. Come and experience the joy of books, discover new worlds, and connect with fellow bibliophiles. We look forward to being your partner on your intellectual journey.</p>
                </div>
                
            
            
            <div className='d-flex justify-content-center flex-row '>
            
                  <Link to ="/signup" >
    
            <Button variant='info' className='mt-1'>  Register</Button>
            

          </Link>
          
    
    </div>
    </Col>
        </Row>
        </div>


        <div className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h4 className='text-center mb-5'>Contact Us</h4>
        <Row className='d-flex align-items-center reverse_col '>
        <Col >
            <div className='d-flex align-items-center'>
                
                <p className='fs-5 lh-lg'>If you have any questions, suggestions, or feedback, please feel free to reach out to us. You can visit our library in person at 123 East Street, Sydney, NSW, or contact us through phone or email. We are here to assist you in any way we can.

At Libra Ease, we believe in the power of reading, and we invite you to embark on a lifelong adventure with us.</p>
</div>

<div className='d-flex justify-content-center flex-row '>
<Link to ="/contact">
            <Button variant='info' className='mt-1'>  Contact Us</Button>

          </Link>
    
    </div>
    </Col>
             <Col md={6} >
             <img className="d-block w-100" src={contact} alt="contact" />
            </Col>
           
        </Row>
        </div>

        


        
        
    </Container>

    </MainLayout>

    </div>
    
  );
}

