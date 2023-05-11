import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const UserLayout = ({children}) => {
  const {user} = useSelector((state) => state.user)
 
  return (
    <div className='user-Layout'>

      <div className='left bg-dark p-2 pt-5'>
      <div className='title mt-3 fs-2 text-center'>{user.fName + " " + user.lName}</div>
      <hr/>
      <div className='sidebar fw-bolder list-style-none'>
        <ul>
          {/* for all type of user */}
          <li><Link className='nav-link' to="/dashboard">Dashboard</Link></li>
          <li><Link className='nav-link' to="/history">History</Link></li>
          <li><Link className='nav-link' to="/profile">Profile</Link></li>

          {/* for admin only */}
          <li><Link className='nav-link'  to="/books">Books</Link></li>
          <li><Link className='nav-link' to="/clients">Clients</Link></li>
          {/* <li><Link className='nav-link' to="">User</Link></li>
          <li><Link className='nav-link' to="">Profile</Link></li> */}

          
        </ul>
      </div>

      </div>
      
      

      

      <div className='right'>
        {/* header section */}
        <Header/>
     




        {/* main contetnt area */}
       <div className='main pt-3'>{children}</div>

        {/* footer section */}

        <Footer/>
      </div>

        
      
    </div>
  )
}

export default UserLayout
