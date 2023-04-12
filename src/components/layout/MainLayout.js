import React from 'react'
import Footer from './Footer'
import Header from './Header'

export const MainLayout = ({children}) => {
  return (
    <div>

        {/* header section */}
        <Header/>
     




        {/* main contetnt area */}
       <div className='main'>{children}</div>

        {/* footer section */}

        <Footer/>
      
    </div>
  )
}

export default MainLayout
