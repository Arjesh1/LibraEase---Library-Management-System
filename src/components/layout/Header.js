import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {GoSignIn} from 'react-icons/go'
import {FaUserEdit} from 'react-icons/fa'

const Header = () => (
  <div>
    <Navbar bg="dark" variant='dark' expand="md">
      <Container>
        <Navbar.Brand href="/"><Link to="/"> E-B</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/signin" className='nav-link'> <GoSignIn className='fs-3' /></Link>
            <Link to="/signup" className='nav-link'> <FaUserEdit className='fs-3'/> </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
)

export default Header
