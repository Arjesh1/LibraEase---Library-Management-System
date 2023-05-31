import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'
import { HistoryTable } from '../../components/history-table/HistoryTable'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

const History = () => {
  return (

  <PrivateRoute>
      <Header/>
        <Container className='mt-4 history_page '>
          <h3 className='text-center'>History</h3>

          <hr/>

          <HistoryTable/>



        </Container>

        <Footer/>
      

  </PrivateRoute>
  )
}

export default History
