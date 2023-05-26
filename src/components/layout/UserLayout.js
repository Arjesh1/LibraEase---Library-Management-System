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
      <div className='title mt-4 fs-2 text-center '>{user.fName + " " + user.lName}
      <hr className='mt-4'/></div>
      
      <div className='sidebar fw-bolder list-style-none'>
        <ul>
        {/* for all user */}

        <li><Link className='nav-link' to="/dashboard">Dashboard</Link></li>
    
    <li><Link className='nav-link' to="/profile">Profile</Link></li>

    {user.role === "user" && (
            // for user only 
  <>
    
    <li><Link className='nav-link' to="/history">History</Link></li>
  </>
) }
    
          
          {user.role === "admin" && (
            // for admin 
  <>
    
    <li><Link className='nav-link' to="/books">Books</Link></li>
    <li><Link className='nav-link' to="/clients">Clients</Link></li>
    <li><Link className='nav-link' to="/book_history">Burrow History</Link></li>
  </>
) }
          

          
          
          

          
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
