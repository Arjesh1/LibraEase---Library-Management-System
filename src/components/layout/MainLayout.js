import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'

export const MainLayout = ({children}) => {
  
  useEffect(() => {
    // to scroll all the pages to the top, avoiding react fetature that keeps the page starting from where it was left
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

        {/* header section */}
        <div className='fixed-top  '>
        <Header />
        </div>
     




        {/* main contetnt area */}
       <div className='main '>{children}</div>

        {/* footer section */}

        <Footer/>
      
    </div>
  )
}

export default MainLayout
