import React, { useEffect, useState } from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'
import { HistoryTable } from '../../components/history-table/HistoryTable'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { PulseLoader } from 'react-spinners'

const History = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 5000)
  
  }, [])

  return (

    <>
    
    {loading ?  
    <div className='d-flex justify-content-center align-items-center loader'>
     <PulseLoader
  color="#000000"
  size={25}
/>
      </div> :

  <PrivateRoute>
      <Header/>
        <Container className='mt-4 history_page '>
          <h3 className='text-center'>History</h3>

          <hr/>

          <HistoryTable/>



        </Container>

        <Footer/>
      

  </PrivateRoute>
}
  </>
  )
}

export default History
