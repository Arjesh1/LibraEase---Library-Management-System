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
import logo from "../../assets/logo1.png";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {

const dispatch = useDispatch()
const {user} = useSelector((state)=>state.user)

const{uid, role, fName} = user


const handleOnSignOut = () => {
  signOut(auth).then(()=>{
  dispatch(setUser({}))
})

}

  return (
  <div>
    <Navbar bg="light" variant='light' expand="md" className='border-bottom border-1 border-dark' >
      <Container>
        <Navbar.Brand href="/"><Link to="/"> <img className=" w-100" src={logo} alt="Logo" /> 
        </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ms-4">
          <Nav className="ms-auto gap-2  fs-5 fw-medium z-3 fw-semibold ">
            {!uid ?
            (<>
            <Link to="/" className='nav-link'> Home</Link>
            <Link to="/about" className='nav-link'> About Us</Link>
            <Link to="/allBooks" className='nav-link'> Books</Link>
            <Link to="/contact" className='nav-link'> Contact Us </Link>
            <Link to="/signin" className='nav-link'> Sign In/Sign Up</Link>
            
            </>
            ):(
             
              <>
               <Link to="/" className='nav-link'> Home</Link>
               <Link to="/about" className='nav-link'> About Us</Link>
            <Link to="/allBooks" className='nav-link'> Books</Link>
              <Link to="/contact" className='nav-link'> Contact Us </Link>
              
              {role === "admin" && (
            <Link to="/dashboard" className='nav-link'> Dashboard </Link>
          )}

{/* {role === "user" && ( */}
               <Dropdown>
               <Dropdown.Toggle variant="" id="dropdown-basic" className='fs-4  mt-auto fw-semibold'>
               {fName}
               </Dropdown.Toggle>
              
         
               <Dropdown.Menu>
         
               
         
               <Dropdown.Item ><Link to="/profile" className='nav-link' >Profile </Link></Dropdown.Item>
                 <Dropdown.Item ><Link to="/history" className='nav-link' >History </Link></Dropdown.Item>
                 <Dropdown.Item><Link to="#" className='nav-link' onClick={handleOnSignOut}>Sign Out </Link></Dropdown.Item>
         
         
                 
               </Dropdown.Menu>
             </Dropdown>
            
        



       

            
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
