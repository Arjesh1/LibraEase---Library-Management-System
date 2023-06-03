import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const UserLayout = ({children}) => {
  const {user} = useSelector((state) => state.user)

  useEffect(() => {
    // to scroll all the pages to the top, avoiding react fetature that keeps the page starting from where it was left
    window.scrollTo(0, 0);
  }, []);

  
 
  return (
    <>
   
    
    <div className='user-Layout'>

      

      <div className='left  text-dark  pt-5'>
      <div className='title fs-2 text-center pt-3 mt-4'>{user.fName + " " + user.lName}
      <hr /></div>
      
      <div className='sidebar fw-bolder list-style-none'>
        <ul className='pe-5'>
        
        <li><Link className='nav-link' to="/dashboard">Dashboard</Link></li>
    
    

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
    <li><Link className='nav-link' to="/book_history">Client Burrow History</Link></li>
    <li><Link className='nav-link' to="/message">Messages</Link></li>
  </>
) }
          

          
          
          

          
        </ul>
      </div>

      </div>
      
      

      

      <div className='right'>
        
     
 {/* header section */}
 <div className='fixed-top'>
    <Header />
    </div>



        {/* main contetnt area */}
       <div className='main ps-5 pt-4 mt-5 '>{children}</div>


{/* footer section */}

<div className=''>
     <Footer/>
    </div>
        
      </div>

     

        
      
    </div>
     
     

    </>
  )
}

export default UserLayout
