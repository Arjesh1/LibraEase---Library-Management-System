import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {GoSignIn} from 'react-icons/go'
import {GoSignOut} from 'react-icons/go'
import {FaUserEdit} from 'react-icons/fa'
import {AiFillDashboard} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../pages/signup-signin/userSlice';
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";

const Header = () => {

const dispatch = useDispatch()
const {user} = useSelector((state)=>state.user)


const handleOnSignOut = () => {
  signOut(auth).then(()=>{
  dispatch(setUser({}))
})

}

  return (
  <div>
    <Navbar bg="dark" variant='dark' expand="md">
      <Container>
        <Navbar.Brand href="/"><Link to="/"> E-B</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ms-4">
          <Nav className="ms-auto ">
            {!user.uid ?
            (<>
            <Link to="/signin" className='nav-link'> <GoSignIn className='fs-3' /></Link>
            <Link to="/signup" className='nav-link'> <FaUserEdit className='fs-3'/> </Link>
            
            </>
            ):(
              <>
              <Link to="/dashboard" className='nav-link'> <AiFillDashboard className='fs-3' /></Link>
            <Link to="#" className='nav-link' onClick={handleOnSignOut}> <GoSignOut className='fs-3'/> </Link>
            </>
            )
          }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
)
  }

export default Header
